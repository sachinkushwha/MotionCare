import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
// import './index.css'
import App from './App.jsx'
import { Service } from './pages/serviesList.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

 const router =createBrowserRouter([
   {
    path: "/",
    element: <App />,       
    children: [
      {
        index: true,         
        element: <Home />,
      },
      {
        path: "service",        
        element: <Service />,
      },
    ],
  },
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
