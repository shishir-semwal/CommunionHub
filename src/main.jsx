import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Event from './Event.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.jsx'
import Homepage from './Homepage.jsx'

const router=createBrowserRouter([
{
  path:'/',element:<App/>,children:[
    {path:'/',element:<Homepage/>},
    {path:'/event',element:<Event/>},
    {path:'/about',element:<About/>},
  ],
},

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
