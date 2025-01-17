import React from "react";
import HomeCard from "./HomeCard";
import { motion } from "framer-motion";

const Clothing = ({ products }) => {
    return (
        <>
        <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center text-black bg-gradient-to-r from-gray-500 to-white py-2 px-6 rounded-e-full inline-block shadow-lg mt-16 mb-8"
        >
            Clothes
        </motion.h2>


        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 text-center mb-8">
            <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg font-semibold"
            >
            Limited Time Offer for Pongal: 30% Off All Clothing!
            </motion.h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
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
        </>
    );
};

export default Clothing;
