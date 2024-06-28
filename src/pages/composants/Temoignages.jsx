import React, { useState, useEffect } from 'react';
import TemoignageUn from './images/tem1.jpg'; 
import TemoignageDeux from './images/tem2.jpg'; 
import TemoignageTrois from './images/tem3.jpg'; 
import TemoignageQuatre from './images/tem4.jpg'; 

const Temoignages = () => {
  const [current, setCurrent] = useState(0);

  const temoignages = [
    {
      name: "Sophie Martin",
      title: "Fondatrice de Nature's Delight",
      image: TemoignageUn,
      text: "GreenLeaf Solutions a été notre partenaire clé dans notre transition vers des pratiques écologiques. Leur expertise et leur engagement ont été essentiels pour développer des solutions durables qui ont renforcé notre mission environnementale tout en augmentant notre efficacité opérationnelle. Je recommande fortement GreenLeaf Solutions à toute entreprise désireuse de faire une différence positive pour l'environnement."
    },
    {
      name: "Alexandre Dubois",
      title: "Directeur Technique chez GlobalTech",
      image: TemoignageDeux,
      text: "En collaborant avec GreenLeaf Solutions, nous avons trouvé des moyens innovants pour réduire notre empreinte carbone tout en améliorant notre rentabilité. Leur approche stratégique et leur soutien constant ont été cruciaux pour transformer notre entreprise en un modèle de durabilité. GreenLeaf Solutions est vraiment un partenaire de confiance pour toute entreprise qui cherche à innover tout en respectant l'environnement."
    },
    {
      name: "Jean Baptiste",
      title: "Responsable RSE chez ÉcoVie",
      image: TemoignageTrois,
      text: "Nous avons choisi GreenLeaf Solutions pour leur engagement profond envers la durabilité et leur capacité à proposer des solutions pratiques et efficaces. Leur équipe dévouée nous a guidés à chaque étape de notre parcours vers une entreprise plus verte, ce qui a non seulement réduit nos coûts mais a également renforcé notre réputation dans le secteur. GreenLeaf Solutions est sans aucun doute le choix idéal pour toute entreprise engagée dans une transformation écologique significative."
    },
    {
      name: "Jeanne Robert",
      title: "Fondateur de GreenBuilders",
      image: TemoignageQuatre,
      text: "Travailler avec GreenLeaf Solutions a été une expérience transformative pour notre entreprise. Leur approche proactive et leur expertise approfondie nous ont permis de concevoir et de mettre en œuvre des initiatives écologiques qui ont dépassé nos attentes. GreenLeaf Solutions est bien plus qu'un consultant; ils sont de véritables catalyseurs de changement pour toute organisation cherchant à intégrer la durabilité au cœur de ses opérations."
    },
  ];

  const nextTemoignage = () => {
    setCurrent((current + 1) % temoignages.length);
  };

  const prevTemoignage = () => {
    setCurrent((current - 1 + temoignages.length) % temoignages.length);
  };

  // Défilement automatique des témoignages toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % temoignages.length);
    }, 5000); // Interval de 5 secondes

    return () => clearInterval(interval);
  }, [current, temoignages.length]);

  return (
    <section className="max-w-screen-lg p-8 mx-auto text-center">
      <h2 className="mb-8 text-3xl font-bold text-green-600">Témoignages</h2>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <button onClick={prevTemoignage} className="absolute left-0 z-10 p-3 transform -translate-y-1/2 bg-gray-200 rounded-full top-1/2 hover:bg-gray-300 focus:outline-none">&larr;</button>
        <div className="flex flex-col items-center justify-center w-full md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              src={temoignages[current].image}
              alt={temoignages[current].name}
              className="object-cover w-full h-full rounded-l-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-full p-6 text-left md:w-2/3">
            <h3 className="mb-2 text-xl font-semibold">{temoignages[current].name}</h3>
            <p className="mb-2 italic text-gray-500">{temoignages[current].title}</p>
            <p className="text-gray-600">{temoignages[current].text}</p>
          </div>
        </div>
        <button onClick={nextTemoignage} className="absolute right-0 z-10 p-3 transform -translate-y-1/2 bg-gray-200 rounded-full top-1/2 hover:bg-gray-300 focus:outline-none">&rarr;</button>
      </div>
    </section>
  );
};

export default Temoignages;
