import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";
import { RecoilRoot } from "recoil";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <App />  
    </RecoilRoot>
  </StrictMode>,
)
