import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/New_Dec_3000x1200._CB538652056_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg',
  ];

  const imageCards = [
    {
      id: 1,
      image: 'https://img.freepik.com/premium-vector/iphone-multi-screeen-mockup-design_1287372-368.jpg?w=740',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/premium-photo/vibrant-mountain-scenery-with-iphone-15-pro-max-dual-iphones-capturing-mountain-beauty_976564-6424.jpg?w=740',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/premium-photo/pink-apple-iphone-is-box-with-pink-ipod-inside_1263303-1401.jpg?w=740',
    },
    {
      id: 4,
      image: 'https://img.freepik.com/premium-photo/display-iphones-with-word-iphone-screen_1043920-11904.jpg?w=740',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className='relative w-full h-screen'>
      <div className='relative w-full h-[90%] overflow-hidden'>
        <div
          className='flex transition-all duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className='w-full flex-shrink-0'>
              <img
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75'
        >
          <FaChevronLeft className='w-4 h-4' />
        </button>
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75'
        >
          <FaChevronRight className='w-4 h-4' />
        </button>
      </div>

      <div className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-6'>
        {imageCards.map((card, index) => (
          <motion.div
            key={card.id}
            className='bg-white p-4 rounded-lg shadow-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, type: 'spring', stiffness: 100 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className='w-40 h-40 object-cover rounded-md'
            />
            {/* <h3 className='mt-2 text-center font-semibold'>{card.title}</h3> */}
          </motion.div>
        ))}
      </div>
    </header>
  );
};

export default Header;


