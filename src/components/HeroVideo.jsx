import {useEffect,useRef,useState} from 'react';

export default function HeroVideo(){
 const ref=useRef(null);
 const [ready,setReady]=useState(false);
 useEffect(()=>{
  const video=ref.current;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(motion.matches||navigator.connection?.saveData)return;
  let timer,idle;
  const load=()=>{timer=setTimeout(()=>{
   if('requestIdleCallback' in window)idle=requestIdleCallback(()=>setReady(true),{timeout:1500});
   else setReady(true);
  },300);};
  if(document.readyState==='complete')load();else window.addEventListener('load',load,{once:true});
  const observer=new IntersectionObserver(([entry])=>{
   if(!entry.isIntersecting)video.pause();
   else if(video.getAttribute('src'))video.play().catch(()=>{});
  });
  observer.observe(video);
  return()=>{clearTimeout(timer);if(idle)cancelIdleCallback(idle);window.removeEventListener('load',load);observer.disconnect();};
 },[]);
 useEffect(()=>{
  if(!ready)return;
  const video=ref.current;const rect=video.getBoundingClientRect();
  if(rect.bottom>0&&rect.top<window.innerHeight)video.play().catch(()=>{});
 },[ready]);
 return <video ref={ref} className="hero-baklava-video" src={ready?'/videos/baklava-hero-hd.mp4':undefined} onLoadedMetadata={e=>{e.currentTarget.defaultPlaybackRate=.75;e.currentTarget.playbackRate=.75;}} onCanPlay={e=>{const bounds=e.currentTarget.getBoundingClientRect();if(bounds.bottom>0&&bounds.top<window.innerHeight)e.currentTarget.play().catch(()=>{});}} muted loop playsInline preload="none" width="1920" height="1080" poster="/videos/baklava-hero-poster.webp" aria-label="Baklava — Baklavateur Genève"/>;
}
