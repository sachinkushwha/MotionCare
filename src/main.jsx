import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
// import './index.css'
import App from './App.jsx'
import { Service } from './pages/serviesList.jsx'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { About } from './pages/about.jsx'
import { Form } from './components/appointment.jsx'
import Loging from './pages/loginButton.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter([
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
        path: 'about',
        element: <About />
      },
      {
        path: 'form',
        element:(
          <Loging>
            <Form />
          </Loging>)

      }
    ],
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    clientId='CWSFhfsR57SJ5NnoWWqywJZuv08Q1xq9'
    domain='dev-w6btg3l42g00b1oa.us.auth0.com'
    authorizationParams={{
      redirect_uri: window.location.origin+"/form"
     
    }}
    >
    <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
