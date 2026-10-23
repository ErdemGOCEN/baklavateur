import {createServer} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {products} from '../src/data/products.js';
import {getLocalizedPath} from '../src/routes/localizedRoutes.js';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
const escape=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
try{
 const {render}=await server.ssrLoadModule('/src/entry-server.jsx');
 const template=await readFile('dist/index.html','utf8');let count=0;
 for(const language of ['fr','tr','de','en']){
  const routes=['home','products','about','contact'].map(key=>({path:getLocalizedPath(key,language)}));
  routes.push(...products.map(p=>({path:getLocalizedPath('product',language,p.slug),title:p.name[language],description:p.description[language]})));
  for(const route of routes){
   const markup=await render(language,route.path);
   if(!markup.includes('<main'))throw Error(`Missing rendered content: ${route.path}`);
   let page=template.replace('<html lang="fr">',`<html lang="${language}">`).replace('<div id="root"></div>',`<div id="root">${markup}</div>`).replace('https://baklavateur.ch/fr"',`https://baklavateur.ch${route.path}"`);
   if(route.title)page=page.replace(/<title>.*?<\/title>/,`<title>${escape(route.title)} — Baklavateur Genève</title>`).replace(/<meta name="description" content="[^"]*"/,`<meta name="description" content="${escape(route.description)}"`);
   const directory=`dist${route.path}`;await mkdir(directory,{recursive:true});await writeFile(`${directory}/index.html`,page);count++;
   if(route.path==='/fr')await writeFile('dist/index.html',page);
  }
 }
 console.log(`Pre-rendered ${count} localized pages with real content.`);
}finally{await server.close();}
