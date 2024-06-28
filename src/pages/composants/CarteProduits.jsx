import React from 'react'

const CarteProduits = ({ title, image, description, buttonText }) => {
    return (
        <div className="flex flex-col w-full max-w-sm m-4 overflow-hidden rounded shadow-lg md:w-1/2 lg:w-1/3">
          <img className="object-cover w-full h-48" src={image} alt={title} />
          <div className="flex flex-col flex-grow px-6 py-4">
            <div className="mb-2 text-xl font-bold">{title}</div>
            <p className="flex-grow text-base text-gray-700">{description}</p>
          </div>
          <div className="flex justify-center px-6 pt-4 pb-2">
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
              {buttonText}
            </button>
          </div>
        </div>
      );
};

export default CarteProduits
