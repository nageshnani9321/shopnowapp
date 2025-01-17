import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { FaSearch } from 'react-icons/fa';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Groceries from './Groceries';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CardContainer = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const shuffledFilteredProducts = shuffleArray(filteredProducts);


  const trendingClothes = products.filter((product) => product.category === 'Clothings');


  const trendingElectronics = products.filter((product) => product.category === 'Electronics');


  const trendingGroceries = products.filter((product) => product.category === 'Groceries');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="sticky top-16 bg-white py-2 z-10 shadow-md">
        <div className="mb-2 flex justify-center items-center">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search for a product..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>


      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shuffledFilteredProducts.slice(0, 4).map((product) => (
          <HomeCard
            key={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>

      {shuffledFilteredProducts.length === 0 && (
        <div className="text-center text-lg text-gray-500 mt-4">No products found.</div>
      )}


      {trendingClothes.length > 0 && <Clothing products={trendingClothes} />}
      {trendingElectronics.length > 0 && <Electronics products={trendingElectronics} />}
      {trendingGroceries.length > 0 && <Groceries products={trendingGroceries} />}
    </div>
  );
};

export default CardContainer;



