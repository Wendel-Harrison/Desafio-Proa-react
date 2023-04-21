import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//1 configurando o router 

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Canyon from './pages/Canyon'
import Error from './pages/ErrorPage'
import Escocia from './pages/Escocia'
import China from './pages/China'
import Aruba from './pages/Aruba'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/canyon',
        element: <Canyon />
      },
      {
        path: '/escocia',
        element: <Escocia />
      },
      {
        path: '/china',
        element: <China />
      },
      {
        path: '/aruba',
        element: <Aruba />
      }
      // nested routes = identificador unico
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
