import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//1 configurando o router 

import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Canyon from './pages/Canyon'
import Error from './pages/ErrorPage'
import Escocia from './pages/Escocia'
import China from './pages/China'
import Aruba from './pages/Aruba'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
