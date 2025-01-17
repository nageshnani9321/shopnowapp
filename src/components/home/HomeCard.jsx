import React from 'react';
import { Link } from 'react-router-dom'; 
import { BASE_URL } from '../../context/api';

const HomeCard = ({ image, title, description, price, slug }) => {
  return (
    <Link to={`/product_details/${slug}`} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <div className="relative w-full h-64 bg-gray-200">
        <img
          src={`${BASE_URL}${image}`} 
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-4 flex flex-col space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-lg text-gray-600 truncate">{description}</p>
        <p className="text-lg font-bold text-gray-900">${price}</p>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Details
        </button>
      </div>
    </Link>
  );
};

export default HomeCard;
