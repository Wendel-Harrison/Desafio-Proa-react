import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//1 configurando o router 

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/ErrorPage'
import ContactDetails from './pages/ContactDetails'





// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
// ])

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
        path: '/contact',
        element: <Contact />
      },
      // nested routes = identificador unico
      {
        path: '/contact/:id',
        element: <ContactDetails />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
