import React from 'react';
import { BASE_URL } from '../../context/api';

const OrderItem = ({cartitem}) => (
  <div className="flex justify-between items-center border-b pb-3 mb-3">
    <div className="flex items-center">
      <img 
        src={`${BASE_URL}${cartitem.product.image}`}
        alt="Product" 
        className="w-16 h-16 object-cover rounded-lg shadow-md" 
      />
      <div className="ml-4">
        <h6 className="font-semibold text-lg text-white">{cartitem.product.name}</h6>
        <small className="text-gray-300">{`Quantity: ${cartitem.quantity}`}</small>
      </div>
    </div>
    <span className="font-semibold text-lg text-gray-400">{`$${cartitem.product.price}`}</span>
  </div>
);

export default OrderItem;
