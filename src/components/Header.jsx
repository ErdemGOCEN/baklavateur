import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import WhatsAppButton from './WhatsAppButton';
import useLocalizedPath from '../hooks/useLocalizedPath';

export default function Header(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [topbarVisible,setTopbarVisible]=useState(()=>sessionStorage.getItem('baklavateur-topbar-closed')!=='true');
  const {t}=useTranslation();
  const path = useLocalizedPath();
  const location = useLocation();

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);

  useEffect(()=>{
    setOpen(false);
  },[location.pathname, location.search]);

  useEffect(()=>{
    document.body.classList.toggle('mobile-nav-open', open);
    const onKeyDown=(event)=>{ if(event.key==='Escape') setOpen(false); };
    const onResize=()=>{ if(window.innerWidth>1050) setOpen(false); };
    window.addEventListener('keydown',onKeyDown);
    window.addEventListener('resize',onResize);
    return()=>{
      document.body.classList.remove('mobile-nav-open');
      window.removeEventListener('keydown',onKeyDown);
      window.removeEventListener('resize',onResize);
    };
  },[open]);

  const closeTopbar=()=>{
    setTopbarVisible(false);
    sessionStorage.setItem('baklavateur-topbar-closed','true');
  };

  const navigation = [
    [path('home'), t('nav.home')],
    [path('products'), t('nav.products')],
    [path('about'), t('nav.about')],
    [path('contact'), t('nav.contact')],
  ];

  const whatsappLabel = t('hero.order');

  return <>
    {topbarVisible && <div className="topbar"><span>{t('top')}</span><button type="button" onClick={closeTopbar} aria-label="Kapat"><X size={16}/></button></div>}
    <header className={`header metallic-header ${scrolled?'header-scrolled':''} ${!topbarVisible?'topbar-closed':''}`}>
      <div className="header-inner">
        <Link className="brand" to={path('home')} onClick={()=>setOpen(false)} aria-label="Baklavateur Genève">
          <svg className="brand-logo" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#d4af37" strokeWidth="1.5" />
            <path d="M20 8V32M20 8C23 8 25.5 10 25.5 13.5C25.5 17 23 19 20 19M20 8C17 8 14.5 10 14.5 13.5C14.5 17 17 19 20 19M20 19C23.5 19 26 21 26 25.5C26 30 23.5 32 20 32M20 19C16.5 19 14 21 14 25.5C14 30 16.5 32 20 32" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="brand-text">
            <strong>BAKLAVATEUR</strong>
            <span>L'ART DU BAKLAVA</span>
          </div>
        </Link>

        <button
          className="mobile-nav-backdrop"
          type="button"
          aria-label={t('menuLabel')}
          tabIndex={open?0:-1}
          onClick={()=>setOpen(false)}
        />

        <nav id="mobile-navigation" className={open?'nav open':'nav'} aria-hidden={!open && undefined}>
          <div className="mobile-nav-heading">
            <span>Baklavateur — Genève</span>
            <button type="button" onClick={()=>setOpen(false)} aria-label="Menüyü kapat"><X size={24}/></button>
          </div>
          {navigation.map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}
          <div className="mobile-tools"><LanguageSwitcher/><WhatsAppButton label={whatsappLabel} /></div>
        </nav>
        <div className="desktop-tools"><LanguageSwitcher/><WhatsAppButton className="header-whatsapp" label={whatsappLabel} /></div>
        <button className="menu-toggle" onClick={()=>setOpen((current)=>!current)} aria-controls="mobile-navigation" aria-label={t('menuLabel')} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
      </div>
    </header>
  </>;
}
