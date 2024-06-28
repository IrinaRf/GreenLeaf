import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16">
      <h2 className="mb-8 text-2xl font-bold text-[#456A4A] sm:text-3xl">Rejoignez notre newsletter</h2>
      <div className="w-full p-4 sm:p-6">
        <form className="flex flex-col items-center">
          <div className="w-full max-w-xs mb-4 sm:max-w-md">
            <input
              type="text"
              id="name"
              placeholder="Insérer votre nom ici..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full sm:px-6 sm:py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="w-full max-w-xs mb-4 sm:max-w-md">
            <input
              type="email"
              id="email"
              placeholder="Insérer votre adresse email ici..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full sm:px-6 sm:py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-center w-full max-w-xs sm:max-w-md">
            <button
              type="submit"
              className="px-4 py-3 text-white bg-[#456A4A] rounded-full sm:px-6 sm:py-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
