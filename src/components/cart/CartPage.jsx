import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import useCartData from "../../context/useCartData";

const CartPage = ({ setNumberCartItems }) => {
  const { cartitems, setCartItems, cartTotal, setCartTotal, tax } = useCartData();

  console.log('Cart Items:', cartitems); 

  return (
    <div className="container mx-auto my-6 p-4 bg-gradient-to-b from-black to-gray-400 rounded-lg">
      <h5 className="text-2xl font-semibold text-white mb-4">Shopping Cart</h5>
    
      {cartitems.length === 0 && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-4 shadow-md">
          <p className="text-center text-xl font-semibold">Your cart is empty!</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 flex-1 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {cartitems.length > 0 ? (
            cartitems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                cartitems={cartitems}
                setCartTotal={setCartTotal}
                setNumberCartItems={setNumberCartItems}
                setCartItems={setCartItems}
              />
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>

        <div className="lg:w-1/3 flex-1">
          <CartSummary cartTotal={cartTotal} tax={tax} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
