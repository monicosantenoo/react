'use client'; // Only needed if you're using Next 13+ with app router and interactivity

import { useState } from 'react';

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MyWebsite
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
