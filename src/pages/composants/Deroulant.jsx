import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 border-b border-gray-200">
      <div
        onClick={toggleOpen}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

const Deroulant = () => {
  const faqItems = [
    {
      question: "Comment fonctionne GreenTech Software?",
      answer: "GreenTech Software est une suite logicielle qui permet de surveiller et d’optimiser la consommation énergétique des bâtiments.",
    },
    {
      question: "Qu'est-ce qu'un EcoDevice?",
      answer: "Un EcoDevice est un appareil IoT (Internet des objets) qui permet de suivre la consommation d'énergie en temps réel.",
    },
    {
      question: "Quels services de consulting offrez-vous?",
      answer: "Nous offrons des services de conseil aux entreprises pour l'adoption de sources d'énergie renouvelables.",
    },
    {
      question: "Qu'est-ce qu'un audit environnemental?",
      answer: "Un audit environnemental consiste en une évaluation des pratiques d'entreprise pour réduire l'empreinte carbone.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="mb-6 text-2xl font-bold text-center text-green-600">FAQ</h1>
      {faqItems.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Deroulant
