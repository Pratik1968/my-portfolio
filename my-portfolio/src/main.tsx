import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home/layout.tsx';
import Blog from './Routes/Blog/layout.tsx';
import Navbar from './Navbar/layout.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<Home/> 
  </React.StrictMode>,
)
