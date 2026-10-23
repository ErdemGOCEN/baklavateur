import {StrictMode} from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import './i18n';
import './styles/botanical.css';
import App from './App';
const root=document.getElementById('root');
const app=<StrictMode><App/></StrictMode>;
if(root.hasChildNodes())hydrateRoot(root,app);else createRoot(root).render(app);
