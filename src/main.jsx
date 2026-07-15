import { StrictMode } from 'react'; import { createRoot } from 'react-dom/client'; import './i18n'; import './styles/tokens.css'
import './styles/global.css'; import './styles/premium-rebuild.css'; import App from './App';
import './styles/final-polish.css';
createRoot(document.getElementById('root')).render(<StrictMode><App/></StrictMode>);
