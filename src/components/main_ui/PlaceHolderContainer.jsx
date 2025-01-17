import React from "react";
import PlaceHolder from './PlaceHolder.jsx';


const PlaceHolderContainer = ({ count }) => {
    const placenumbers = Array.from({ length: count });

    return (
        <section className="py-5" id="shop">
        <h4 className="text-center text-2xl font-semibold mb-5">Our Products</h4>
        <div className="container mx-auto px-4 lg:px-5 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
            {placenumbers.map((_, index) => (
                <PlaceHolder key={index} />
            ))}
            </div>
        </div>
        </section>
    );
};

export default PlaceHolderContainer;
