import React from 'react';
import photoPresentation from './images/photo-presentation.gif';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen md:grid md:grid-cols-2">
      {/* Contenu pour les grands écrans */}
      <div className="justify-center order-1 hidden md:flex md:justify-start md:order-1">
        <img src={photoPresentation} alt="Homme marchant dans un parc regardant des immeubles au loin" className="w-full max-w-xs md:w-auto md:max-w-none" />
      </div>
      <div className="flex-col items-center justify-center order-2 hidden p-4 space-y-4 text-center md:flex md:text-left md:p-8 md:order-2">
        <h1 className="text-3xl text-center md:text-6xl text-[#456A4A] pb-5"> Bienvenue chez GreenLeaf Solutions !</h1>
        <p className="pb-5 text-lg md:text-2xl">Votre partenaire pour des solutions écologiques innovantes.</p>
        <button className="px-6 py-3 transition duration-300 bg-[#456A4A] rounded hover:bg-[#61BA74] text-white text-lg"><Link to="/produitsetservices" >En savoir plus</Link></button>
      </div>
      {/* Contenu pour les petits écrans */}
      <div className="absolute inset-0 bg-center bg-cover md:hidden" style={{ backgroundImage: `url(${photoPresentation})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 space-y-4 text-center text-white">
          <h1 className="text-5xl">GreenLeaf Solutions</h1>
          <p className="text-base">Votre partenaire pour des solutions écologiques innovantes.</p>
          <button className="px-6 py-3 transition duration-300 bg-[#61BA74] rounded hover:bg-green-600"><Link to="/produitsetservices" >En savoir plus</Link></button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
