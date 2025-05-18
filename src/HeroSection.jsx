import React from "react";
import logo from "./assets/logo.png";
import heroImage from "./assets/Hero.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-full min-h-screen bg-cover  bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="HeroSection"
    >
      {/* Header */}
      <header className="bg-[#003366] text-white py-4 px-6 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-12" />
            <span>Sprint Apps</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#HeroSection" className="hover:text-blue-300 font-medium ">
              Home
            </a>
            <a href="#AboutUs" className="hover:text-blue-300 font-medium ">
              About
            </a>
            <a href="#OurServices" className="hover:text-blue-300 font-medium">
              Our Services
            </a>
            <a href="#Projects" className="hover:text-blue-300 font-medium">
              Projects
            </a>
            <a href="#Contact" className="hover:text-blue-300 font-medium">
              Contact
            </a>
            <a
              href="https://forms.gle/nnyKEZ6musDXjtht5" // <- replace with your actual form link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 font-medium"
            >
              Register
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-2 flex flex-col items-start">
            <a href="#HeroSection" className="hover:text-blue-300 font-medium">
              Home
            </a>
            <a href="#AboutUs" className="hover:text-blue-300 font-medium">
              About
            </a>
            <a href="#OurServices" className="hover:text-blue-300 font-medium">
              Our Services
            </a>
            <a href="#Projects" className="hover:text-blue-300 font-medium">
              Projects
            </a>
            <a href="#Contact" className="hover:text-blue-300 font-medium">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero Content - Vertically Centered */}
      <div className="flex items-center justify-start min-h-[calc(100vh-80px)] md:h-20 px-6 md:px-20">
        <div className="text-left text-black max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering Businesses <br />
            Through Innovative <br />
            Software Solutions
          </h1>
          <div className="mt-4">
            <svg
              width="80"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 C30 30, 70 -10, 100 10"
                stroke="#003366"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
