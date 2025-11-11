import { createRoot } from 'react-dom/client'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import './index.css'

import App from './App.tsx'
import { PrimeReactProvider } from "primereact/api";


createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
)
