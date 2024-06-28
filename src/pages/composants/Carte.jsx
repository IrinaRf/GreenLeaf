import React from 'react';

const Carte = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col flex-1 max-w-xs m-2 overflow-hidden rounded shadow-lg">
      <img className="object-cover w-full h-40" src={imageSrc} alt={title} />
      <div className="flex flex-col justify-center px-6 py-4 bg-[#456A4A] h-20">
        <h2 className="text-sm font-bold text-center text-white whitespace-nowrap">{title}</h2>
      </div>
    </div>
  );
};

export default Carte;
