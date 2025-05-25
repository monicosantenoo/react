import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sas from './Sas.jsx'
import Card from './Card.jsx'
import Nac from './Nac.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nac/>
    <Card/>
  </StrictMode>,
)
