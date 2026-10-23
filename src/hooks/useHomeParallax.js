import { useEffect } from 'react';

// Independent translate preserves each element's existing rotation and hover transform.
export default function useHomeParallax() {
 useEffect(() => {
  const main=document.querySelector('.botanical-home');
  if (!main) return undefined;
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  let items=[];let frame=0;let disposed=false;
  const register=()=>{
   items.forEach(({el})=>el.style.removeProperty('translate'));
   items=[];
   if(media.matches)return;
   const add=(selector,speed,max,layer)=>main.querySelectorAll(selector).forEach(el=>{
    const section=el.closest('section');if(!section)return;
    el.dataset.parallaxLayer=layer;items.push({el,section,speed,max,current:0});
   });
   add('.hero-blob,.gift-blob',.16,65,'background');
   add('.botanical:not([class*="extra-"])',-.12,95,'middle');
   add('.botanical[class*="extra-"]',.22,120,'background');
   add('.hero-baklava-video,.gift-art>img',-.24,65,'foreground');
   add('.garden-category',-.08,22,'foreground');
   schedule();
  };
  const draw=()=>{
   frame=0;if(disposed||media.matches)return;
   const height=window.innerHeight;
   const mobile=window.innerWidth<600;
   // Read all layout measurements before updating styles.
   const updates=items.map(item=>{
    const rect=item.section.getBoundingClientRect();
    const distance=height*.5-(rect.top+Math.min(rect.height,height)*.5);
    const limit=item.max*(mobile?.55:1);
    const offset=Math.max(-limit,Math.min(limit,distance*item.speed));
    return {item,offset};
   });
   updates.forEach(({item,offset})=>{item.current=offset;item.el.style.translate=`0 ${offset.toFixed(2)}px`;});
  };
  function schedule(){if(!frame&&!disposed)frame=requestAnimationFrame(draw);}
  register();
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  media.addEventListener('change',register);
  return()=>{
   disposed=true;cancelAnimationFrame(frame);
   window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);media.removeEventListener('change',register);
   items.forEach(({el})=>{el.style.removeProperty('translate');delete el.dataset.parallaxLayer;});
  };
 },[]);
}
