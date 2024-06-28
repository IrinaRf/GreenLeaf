import React from 'react';
import GreenTech from './images/GreenTech.jpg';
import EcoDevice from './images/iot.jpg';
import Audits from './images/audits.jpg';
import Consultation from './images/consultation.jpg';
import Carte from './Carte';

const APropos = () => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold text-center text-[#456A4A]">Nos produits et services</h2>
      <div className="overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden">
        <section className="flex p-4 lg:justify-center">
          {/* Cartes */}
          <div className="flex justify-center mx-auto flex-nowrap md:flex-nowrap lg:flex-wrap">
            <div className="flex-shrink-0 w-64">
              <Carte imageSrc={GreenTech} title="GreenTech Software" />
            </div>
            <div className="flex-shrink-0 w-64">
              <Carte imageSrc={EcoDevice} title="EcoDevice" />
            </div>
            <div className="flex-shrink-0 w-64">
              <Carte imageSrc={Audits} title="Audits environnementaux" />
            </div>
            <div className="flex-shrink-0 w-64">
              <Carte imageSrc={Consultation} title="Consultation" />
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 text-white transition duration-300 bg-[#61BA74] rounded-3xl hover:bg-green-600">En savoir plus</button>
      </div>
    </>
  );
};

export default APropos;
