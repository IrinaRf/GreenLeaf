import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-2 bg-white shadow-md md:p-2">
      <div className="w-32 md:w-36">
        <Link to="/"><img src={logo} alt="greenleaf solutions logo" className="w-full h-auto" /></Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="relative z-50 focus:outline-none">
          <svg className="w-6 h-6 text-gray-700 transition-colors duration-300 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className="flex-row items-center hidden gap-4 md:flex md:gap-4">
        <ul className="flex flex-row gap-4 text-sm md:text-base md:gap-6">
          <li><Link to="/" className="text-gray-700 transition-colors duration-300 hover:text-green-500">Accueil</Link></li>
          <li><Link to="/produitsetservices" className="text-gray-700 transition-colors duration-300 hover:text-green-500">Produits et Services</Link></li>
          <li><Link to="/contact" className="text-gray-700 transition-colors duration-300 hover:text-green-500">Contact</Link></li>
          <li><Link to="/faq" className="text-gray-700 transition-colors duration-300 hover:text-green-500">FAQ</Link></li>
        </ul>
      </nav>
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700 transition-colors duration-300 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full p-4">
          <ul className="flex flex-col gap-6 text-lg">
            <li><Link to="/" onClick={toggleMenu} className="text-gray-700 transition-colors duration-300 hover:text-green-500">Accueil</Link></li>
            <li><Link to="/produitsetservices" onClick={toggleMenu} className="text-gray-700 transition-colors duration-300 hover:text-green-500">Produits et Services</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="text-gray-700 transition-colors duration-300 hover:text-green-500">Contact</Link></li>
            <li><Link to="/faq" onClick={toggleMenu} className="text-gray-700 transition-colors duration-300 hover:text-green-500">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
