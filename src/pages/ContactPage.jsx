import { Clock3, Mail, MapPin, MessageCircle, Phone, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import WhatsAppButton from '../components/WhatsAppButton';
import { organizationSchema } from '../config/seoSchemas';

const copy={
 tr:{kicker:'Cenevre’de kişisel hizmet',title:'Bizimle İletişime Geçin',lead:'Ürün seçimi, hediye kutuları ve Cenevre teslimatı için size doğrudan yardımcı olalım.',panel:'Siparişinizi birlikte hazırlayalım',text:'Baklava, lokum, kuruyemiş veya hediye kutusu için WhatsApp üzerinden kısa bir mesaj gönderin. Ürün, gramaj, teslimat ve sunum seçeneklerini birlikte netleştirelim.',area:'Cenevre ve İsviçre geneli',hours:'Pazartesi–Cumartesi · 09.00–19.00',formTitle:'Mesaj bırakın',name:'Adınız',email:'E-posta',message:'Mesajınız',send:'Mesajı hazırla'},
 fr:{kicker:'Un service personnel à Genève',title:'Contactez-Nous',lead:'Nous vous accompagnons pour le choix des produits, les coffrets cadeaux et la livraison à Genève.',panel:'Préparons votre commande ensemble',text:'Envoyez-nous un message sur WhatsApp pour vos baklavas, loukoums, fruits secs ou coffrets. Nous préciserons ensemble le format, la présentation et la livraison.',area:'Genève et toute la Suisse',hours:'Lundi–Samedi · 09h00–19h00',formTitle:'Laissez un message',name:'Votre nom',email:'E-mail',message:'Votre message',send:'Préparer le message'},
 de:{kicker:'Persönlicher Service in Genf',title:'Kontaktieren Sie Uns',lead:'Wir beraten Sie bei Produkten, Geschenkboxen und Lieferungen in Genf.',panel:'Wir stellen Ihre Bestellung gemeinsam zusammen',text:'Senden Sie uns eine kurze WhatsApp-Nachricht zu Baklava, Lokum, Nüssen oder Geschenkboxen. Gemeinsam klären wir Größe, Präsentation und Lieferung.',area:'Genf und ganze Schweiz',hours:'Montag–Samstag · 09:00–19:00',formTitle:'Nachricht hinterlassen',name:'Ihr Name',email:'E-Mail',message:'Ihre Nachricht',send:'Nachricht vorbereiten'},
 en:{kicker:'Personal service in Geneva',title:'Get in Touch',lead:'We are here to help with product selection, gift boxes and delivery across Geneva.',panel:'Let us prepare your order together',text:'Send us a short WhatsApp message for baklava, Turkish delight, nuts or gift boxes. We will confirm size, presentation and delivery with you.',area:'Geneva and throughout Switzerland',hours:'Monday–Saturday · 09:00–19:00',formTitle:'Leave a message',name:'Your name',email:'Email',message:'Your message',send:'Prepare message'}
};
export default function ContactPage(){
 const {i18n,t}=useTranslation(); const lang=i18n.language.slice(0,2); const c=copy[lang]||copy.tr;
 return <main className="luxury-page contact-luxury-page"><Seo title={t('seo.contactTitle')} description={t('seo.contactDescription')} keywords={['Baklavateur iletişim','Cenevre baklava siparişi','WhatsApp baklava siparişi']} schema={organizationSchema}/>
  <section className="luxury-page-hero contact-page-hero"><div className="luxury-page-hero-overlay"/><div className="luxury-page-hero-content"><span>{c.kicker}</span><h1>{c.title}</h1><p>{c.lead}</p></div></section>
  <section className="contact-luxury-shell">
   <div className="contact-luxury-copy"><span className="eyebrow">Baklavateur — Genève</span><h2>{c.panel}</h2><p>{c.text}</p><WhatsAppButton/><div className="contact-details-luxury"><div><MessageCircle/><span>+41 77 997 70 42</span></div><div><Mail/><span>contact@baklavateur.ch</span></div><div><MapPin/><span>{c.area}</span></div><div><Clock3/><span>{c.hours}</span></div><div><Truck/><span>50 CHF+</span></div></div></div>
   <form className="contact-form-luxury" onSubmit={(e)=>e.preventDefault()}><h2>{c.formTitle}</h2><label><span>{c.name}</span><input type="text"/></label><label><span>{c.email}</span><input type="email"/></label><label><span>{c.message}</span><textarea rows="6"/></label><button className="btn btn-gold" type="submit"><Phone size={17}/>{c.send}</button></form>
  </section>
 </main>;
}
