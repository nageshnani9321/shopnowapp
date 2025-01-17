import React from 'react';
import OrderSummary from './OrderSummary'; 
import PaymentSection from './PaymentSection'; 
import useCartData from '../../context/useCartData';

const CheckoutPage = () => {
    const {cartitems, setCartItems, cartTotal, setCartTotal, tax } = useCartData()
    return (
        <div className="container mx-auto my-6 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax}/>
                <PaymentSection />
            </div>
        </div>
    );
};

export default CheckoutPage;
