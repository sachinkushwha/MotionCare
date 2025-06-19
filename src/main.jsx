import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
// import './index.css'
import App from './App.jsx'
import { Service } from './pages/serviesList.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { About } from './pages/about.jsx'
import { Form } from './components/appointment.jsx'

 const router =createBrowserRouter([
   {
    path: "/",
    element: <App />,       
    children: [
      {
        index: true,         
        element: <Home />
      },
      {
        path: "service",        
        element: <Service />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'form',
        element:<Form/>
      }
    ],
  },
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
