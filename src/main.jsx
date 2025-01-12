import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './Layout.jsx'
import Brides from './pages/Brides.jsx'

// for aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const router=createBrowserRouter(
  createRoutesFromElements(
    // outlet of header and footer
    <Route path='/' element={<Layout/>}>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/about' element={<About/>}></Route>
 <Route path='/gallery' element={<Gallery/>}></Route>
 <Route path='/services/brides' element={<Brides/>}></Route>
 <Route path='/contact' element={<Contact/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
   
  </StrictMode>,
)


// Initialize AOS
AOS.init({
  duration: 2000,
  once: true,
});
