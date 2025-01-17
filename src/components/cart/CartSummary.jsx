import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cartTotal, tax }) => {
  const subTotal = cartTotal > 0 ? cartTotal.toFixed(2) : '0.00';
  const cartTax = cartTotal > 0 ? tax.toFixed(2) : '0.00';
  const total = cartTotal > 0 ? (cartTotal + tax).toFixed(2) : '0.00';

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h5 className="text-xl font-semibold mb-4">Cart Summary</h5>
        <hr className="mb-4" />
        
        {/* Subtotal */}
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal:</span>
          <span>{`$${subTotal}`}</span>
        </div>
        
        {/* Tax */}
        <div className="flex justify-between text-sm mb-2">
          <span>Tax:</span>
          <span>{`$${cartTax}`}</span>
        </div>
        
        {/* Total */}
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total:</span>
          <strong>{`$${total}`}</strong> 
        </div>
        
        {/* Checkout Button */}
        <Link to="/checkout">
          <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
