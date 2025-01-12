// import { hover } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isProductsOpen, setIsProductsOpen] = useState(false); // For products dropdown

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const toggleProductsDropdown = () => setIsProductsOpen(!isProductsOpen);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <h3 className="text-2xl font-bold mb-4">ManikaMehndi<span className="text-green-500">Art</span></h3>

  
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline underline-offset-4"
              : "hover:underline hover:underline-offset-8 hover:text-red-600"
          }
        >
          Home
        </NavLink>
  
        {/* Products Link with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleProductsDropdown}
            className="flex items-center hover:text-red-600 active:underline-offset-auto "
          >
            Services
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isProductsOpen && (
            <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <NavLink
                to="/services/brides"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block px-4 py-2 hover:text-red-600 underline underline-offset-4"
                    : "block px-4 py-2 hover:underline hover:underline-offset-8 hover:text-red-600"
                }
              >
               Brides Design
              </NavLink>
             
            </div>
          )}
        </div>
  
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline underline-offset-4"
              : "hover:underline hover:underline-offset-8 hover:text-red-600"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline underline-offset-4"
              : "hover:underline hover:underline-offset-8 hover:text-red-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline underline-offset-4"
              : "hover:underline hover:underline-offset-8 hover:text-red-600"
          }
        >
          Gallery
        </NavLink>
      </div>
  
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
    </div>
  
    {/* Mobile Links */}
    {isOpen && (
      <div className="md:hidden bg-white text-black">
        <div className="flex flex-col space-y-2 px-4 py-2">
          <NavLink
            to="/"
            className="hover:text-red-600"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
  
          {/* Products Dropdown for Mobile */}
          <div className="relative">
            <button
              className="w-full text-left hover:text-red-600"
              onClick={toggleProductsDropdown}
            >
              Services
            </button>
            {isProductsOpen && (
              <div className="bg-white text-black p-4 rounded-lg mt-2">
                <NavLink
                  to="/services/brides"
                  className="block hover:text-red-600"
                  onClick={toggleMobileMenu}
                >
                  Brides
                </NavLink>
               
              </div>
            )}
          </div>
  
          <NavLink
            to="/contact"
            className="hover:text-red-600"
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-red-600"
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>
          <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline underline-offset-4"
              : "hover:underline hover:underline-offset-8 hover:text-red-600"
          }
        >
          Gallery
        </NavLink>
        </div>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
