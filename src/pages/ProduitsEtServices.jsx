import React from 'react';
import SectionProduit from './composants/SectionProduit';
import GreenTech from './composants/images/GreenTech.jpg';
import EcoDevice from './composants/images/iot.jpg';
import Audits from './composants/images/audits.jpg';
import Consultation from './composants/images/consultation.jpg';

const ProduitsEtServices = () => {
  const products = [
    {
      title: "GreenTech Software",
      image: GreenTech,
      description: "Une suite logicielle permettant de surveiller et d’optimiser la consommation énergétique des bâtiments.",
      buttonText: "Acheter",
    },
    {
      title: "EcoDevice",
      image: EcoDevice,
      description: "Un appareil IoT (Internet des objets) pour suivre la consommation d'énergie en temps réel.",
      buttonText: "Acheter",
    },
  ];

  const services = [
    {
      title: "Consulting en Energies Renouvelables",
      image: Consultation,
      description: "Conseil aux entreprises pour l'adoption de sources d'énergie renouvelables.",
      buttonText: "Nous contacter",
    },
    {
      title: "Audits environnementaux",
      image: Audits,
      description: "Évaluation des pratiques d'entreprise pour réduire l'empreinte carbone.",
      buttonText: "Nous contacter",
    },
  ];

  return (
    <div className="App">
      <SectionProduit title="Nos Produits" items={products} />
      <SectionProduit title="Nos Services" items={services} />
    </div>
  );
};

export default ProduitsEtServices;
