import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './routes/App.jsx'
import Event from './pages/Event.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Homepage from './pages/Homepage.jsx'

/**
 * Application entry point
 * Sets up React Router and renders the app
 */

// Create router configuration with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Home page route
      { path: '/', element: <Homepage /> },
      
      // Events page route
      { path: '/event', element: <Event /> },
      
      // About page route
      { path: '/about', element: <About /> },
    ],
  },
])

// Render the app with router provider in strict mode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)