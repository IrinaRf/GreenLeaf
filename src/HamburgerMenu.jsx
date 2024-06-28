// HamburgerMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute right-0 p-4 bg-white rounded-lg shadow-lg top-12">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/produitsetservices" className="block py-2" onClick={() => setIsOpen(false)}>Produits et Services</Link>
          <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/faq" className="block py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
