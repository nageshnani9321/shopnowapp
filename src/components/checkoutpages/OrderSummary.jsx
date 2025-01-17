import React from 'react';
import OrderItem from './OrderItem';

const OrderSummary = ({ cartitems, cartTotal, tax }) => {
  const total = (cartTotal + tax).toFixed(2)
  return (
    <div className="bg-gradient-to-t from-black via-gray-800 to-gray-600 shadow-sm rounded-lg p-6 max-h-[500px] overflow-hidden">
      <div className="sticky top-0 bg-black p-4 rounded-lg mb-4">
        <h5 className="text-2xl font-medium text-white">Cart Summary</h5>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[300px] scrollbar-custom pr-4">
        {cartitems.map(item => (
          <OrderItem key={item.id} cartitem={item} />
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-4">
        <div className="flex justify-between font-semibold text-lg text-white">
          <span>Total</span>
          <span>{`$${total}`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
