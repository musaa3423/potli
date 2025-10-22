import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Landing from './pages/شيك'
import Login from './pages/Login'
import Verify from './pages/Verify'
import City from './pages/City'
import Cafes from './pages/Cafes'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/verify', element: <Verify /> },
  { path: '/city', element: <City /> },
  { path: '/cafes/:city', element: <Cafes /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
