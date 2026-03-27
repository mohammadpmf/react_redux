import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HttpReq from './HttpReq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HttpReq />
    <App />
  </StrictMode>,
)
