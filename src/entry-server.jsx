import {renderToPipeableStream} from 'react-dom/server';
import {PassThrough} from 'node:stream';
import {StaticRouter} from 'react-router-dom';
import {SiteContent} from './App';
import i18n from './i18n';
export async function render(language,location){
 await i18n.changeLanguage(language);
 return new Promise((resolve,reject)=>{
  const output=new PassThrough();const chunks=[];
  output.on('data',chunk=>chunks.push(chunk));
  output.on('end',()=>resolve(Buffer.concat(chunks).toString('utf8')));
  output.on('error',reject);
  const stream=renderToPipeableStream(<StaticRouter location={location}><SiteContent/></StaticRouter>,{
   onAllReady(){stream.pipe(output);},onError(error){reject(error);}
  });
 });
}
