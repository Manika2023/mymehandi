import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";

// connected to main.jsx

export default function Layout(){
     return (
          <>
          <Header/>
          {/* here dynamic data */}
          <Outlet/>
          <Footer/>
          </>
     )
}