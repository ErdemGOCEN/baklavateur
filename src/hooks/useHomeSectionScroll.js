import { useEffect } from 'react';

// One wheel burst or touch gesture advances exactly one home-page section.
export default function useHomeSectionScroll() {
  useEffect(() => {
    const main = document.querySelector('.botanical-home');
    if (!main) return undefined;
    let frame = 0;
    let unlockTimer = 0;
    let locked = false;
    let lastInput = 0;
    let touch = null;
    const quietPeriod = 320;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const positions = () => {
      const header = document.querySelector('.header');
      const inset = header?.getBoundingClientRect().height || 0;
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const sections = [...main.querySelectorAll(':scope > section')];
      const elements = [...sections.slice(1), document.querySelector('.footer')].filter(Boolean);
      const points = [0, max];
      for (const el of elements) {
        const top = el.getBoundingClientRect().top + window.scrollY - inset;
        points.push(Math.round(Math.min(max, Math.max(0, top))));
      }
      // Only genuinely long mobile layouts need reading stops. Desktop sections
      // always advance directly to the next section, regardless of viewport height.
      const viewport = Math.max(200, window.innerHeight-inset-24);
      for (const el of window.innerWidth < 600 ? sections : []) {
        const rect = el.getBoundingClientRect();
        const top = Math.max(0,rect.top+window.scrollY-inset);
        for (let offset=viewport; offset<rect.height-80; offset+=viewport) {
          points.push(Math.round(Math.min(max,top+offset)));
        }
      }
      return [...new Set(points)].sort((a,b) => a-b).filter((v,i,a) => !i || v-a[i-1]>12);
    };
    const excluded = target => document.body.classList.contains('mobile-nav-open') || target?.closest?.('input, textarea, select, [contenteditable="true"], dialog, .nav.open');
    const releaseWhenQuiet = () => {
      clearTimeout(unlockTimer);
      const remaining = quietPeriod - (performance.now() - lastInput);
      if (remaining > 0) unlockTimer = window.setTimeout(releaseWhenQuiet, remaining);
      else { locked = false; }
    };
    const advance = direction => {
      lastInput = performance.now();
      if (locked) return;
      const stops = positions();
      const y = window.scrollY;
      const target = direction > 0 ? stops.find(v => v > y + 16) : [...stops].reverse().find(v => v < y - 16);
      if (target === undefined) return;
      locked = true;
      const started = performance.now();
      const from = y;
      const duration = reduced.matches ? 0 : 800;
      const animate = now => {
        const p = duration ? Math.min(1, (now-started)/duration) : 1;
        const eased = p < .5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;
        window.scrollTo({top:from+(target-from)*eased,behavior:'instant'});
        if (p<1) frame=requestAnimationFrame(animate);
        else releaseWhenQuiet();
      };
      frame=requestAnimationFrame(animate);
    };
    const wheel = event => {
      if (event.ctrlKey || excluded(event.target) || Math.abs(event.deltaX)>Math.abs(event.deltaY) || !event.deltaY) return;
      event.preventDefault();
      advance(Math.sign(event.deltaY));
    };
    const startTouch = event => {
      if (event.touches.length!==1 || excluded(event.target)) {touch=null;return;}
      const point=event.touches[0]; touch={x:point.clientX,y:point.clientY,fired:false};
    };
    const moveTouch = event => {
      if (!touch || event.touches.length!==1) return;
      const point=event.touches[0], dy=touch.y-point.clientY, dx=touch.x-point.clientX;
      if (Math.abs(dy)<=Math.abs(dx)) return;
      event.preventDefault();
      lastInput=performance.now();
      if (Math.abs(dy)>45 && !touch.fired) {touch.fired=true;advance(Math.sign(dy));}
    };
    const endTouch = () => { touch=null; };
    const key = event => {
      if (event.ctrlKey || event.metaKey || event.altKey || excluded(event.target) || event.target?.closest?.('button,a')) return;
      const direction = ['ArrowDown','PageDown',' '].includes(event.key) ? (event.shiftKey?-1:1) : ['ArrowUp','PageUp'].includes(event.key)?-1:0;
      if (!direction) return;
      event.preventDefault();advance(direction);
    };
    window.addEventListener('wheel',wheel,{passive:false});
    window.addEventListener('touchstart',startTouch,{passive:true});
    window.addEventListener('touchmove',moveTouch,{passive:false});
    window.addEventListener('touchend',endTouch,{passive:true});
    window.addEventListener('touchcancel',endTouch,{passive:true});
    window.addEventListener('keydown',key);
    return () => {
      cancelAnimationFrame(frame);clearTimeout(unlockTimer);
      window.removeEventListener('wheel',wheel);window.removeEventListener('touchstart',startTouch);window.removeEventListener('touchmove',moveTouch);window.removeEventListener('touchend',endTouch);window.removeEventListener('touchcancel',endTouch);window.removeEventListener('keydown',key);
    };
  }, []);
}
