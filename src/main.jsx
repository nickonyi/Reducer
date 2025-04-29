import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.jsx';
import Messenger from './components/Messenger';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Messenger />
  </StrictMode>
);
