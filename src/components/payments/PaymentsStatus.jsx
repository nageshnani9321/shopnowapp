import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../context/api';

const PaymentStatus = ({ setNumberCartItems }) => {
    const [statusMessage, setStatusMessage] = useState('Verifying your payment');
    const [statusSubMessage, setStatusSubMessage] = useState('Wait a moment, your payment is being verified!');
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const paymentId = queryParams.get("paymentId");
        const payId = queryParams.get('PayerID');
        const ref = queryParams.get('ref');
        const status = queryParams.get('status');
        const txRef = queryParams.get('tx_ref');
        const transactionId = queryParams.get('transaction_id');

        // Handle PayPal payment verification
        if (paymentId && payId && ref) {
            api.post(`paypal_payment_callback/?paymentId=${paymentId}&PayerId=${payId}&ref=${ref}`)
                .then(res => {
                    setStatusMessage(res.data.message);
                    setStatusSubMessage(res.data.subMessage);
                    localStorage.removeItem("cart_code");
                    setNumberCartItems(0);  // Reset cart items count
                })
                .catch(err => {
                    console.log(err.message);
                    setStatusMessage('Payment verification failed');
                    setStatusSubMessage('There was an error verifying your PayPal payment.');
                });
        }
        // Handle Flutterwave payment verification
        else if (status && txRef && transactionId) {
            api.post(`payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
                .then(res => {
                    setStatusMessage(res.data.message);
                    setStatusSubMessage(res.data.subMessage);
                    localStorage.removeItem("cart_code");
                    setNumberCartItems(0);  // Reset cart items count
                })
                .catch(err => {
                    console.log(err.message);
                    setStatusMessage('Payment verification failed');
                    setStatusSubMessage('There was an error verifying your Flutterwave payment.');
                });
        }
        else {
            setStatusMessage('Invalid payment details');
            setStatusSubMessage('The payment details provided are invalid.');
        }
    }, [location, setNumberCartItems]);

    return (
        <div>
            <header className="py-16 bg-gradient-to-r from-slate-400 via-gray-600 to-black">
                <div className="container px-4 mx-auto my-5 text-center text-white">
                    <h2 className="text-4xl font-bold">{statusMessage}</h2>
                    <p className="mt-4 text-lg text-white opacity-75">{statusSubMessage}</p>
                    <div className="mt-6">
                        <Link to="/profile" className="btn btn-light bg-white text-indigo-700 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 mx-3">
                            View Order Details
                        </Link>
                        <Link to="/" className="bg-white text-indigo-700 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default PaymentStatus;
