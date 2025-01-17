// import React, { useState } from 'react';
// import api from '../../context/api';

// const PaymentSection = () => {
//     const cart_code = localStorage.getItem("cart_code");
//     console.log(cart_code);  

//     const [loading, setLoading] = useState(false); 

//     function makePayment() {
//         setLoading(true); 
//         api.post("initiate_payment/", { cart_code })
//             .then(res => {
//                 console.log(res.data);
//                 setLoading(false); 
//                 window.location.href = res.data.data.link;
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 setLoading(false); 
//             });
//     }

    

//     function makePaypalPayment() {
//         setLoading(true); 
//         api.post("initiate_paypal_payment/", { cart_code })
//             .then(res => {
//                 console.log(res.data);
//                 setLoading(false); 
//                 window.location.href = res.data.data.link;
//             })
//             .catch(err => {
//                 console.log(err.message);
//                 setLoading(false); 
//             });
//     }

//     return (
//         <div className="bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white rounded-lg shadow-2xl p-6">
//             <h5 className="text-2xl font-semibold mb-6">Payment Options</h5>
            
//             <button className="w-full bg-[#0070ba] text-white font-semibold py-3 rounded-md mb-4 hover:bg-[#0063a6] transition duration-300 flex items-center justify-center">
//                 <i className="bi bi-paypal text-white mr-3"></i> Pay Online
//             </button>

//             <button
//                 onClick={makePayment}
//                 className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md mb-4 hover:bg-yellow-400 transition duration-300 flex items-center justify-center"
//                 disabled={loading} 
//             >
//                 {loading ? (
//                     <span>Loading...</span>
//                 ) : (
//                     <><i className="bi bi-credit-card text-white mr-3"></i> Pay with Flutterwave</>
//                 )}
//             </button>
//         </div>
//     );
// };

// export default PaymentSection;





import React, { useState } from 'react';
import api from '../../context/api';

const PaymentSection = () => {
    const cart_code = localStorage.getItem("cart_code");
    console.log(cart_code);  

    const [loading, setLoading] = useState(false); 

    function makePayment() {
        setLoading(true); 
        api.post("initiate_payment/", { cart_code })
            .then(res => {
                console.log(res.data);
                setLoading(false); 
                window.location.href = res.data.data.link;
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false); 
            });
    }

    function makePaypalPayment() {
        setLoading(true); 
        api.post("initiate_paypal_payment/", { cart_code })
            .then(res => {
                console.log(res.data);
                setLoading(false); 
                if(res.data.approval_url){
                    window.location.href = res.data.approval_url;
                }
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false); 
            });
    }

    return (
        <div className="bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white rounded-lg shadow-2xl p-6">
            <h5 className="text-2xl font-semibold mb-6">Payment Options</h5>
            
            <button
                onClick={makePaypalPayment}
                className="w-full bg-[#0070ba] text-white font-semibold py-3 rounded-md mb-4 hover:bg-[#0063a6] transition duration-300 flex items-center justify-center"
                disabled={loading}
            >
                {loading ? (
                    <span>Loading...</span>
                ) : (
                    <>
                        <i className="bi bi-paypal text-white mr-3"></i> Pay with PayPal
                    </>
                )}
            </button>

            <button
                onClick={makePayment}
                className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md mb-4 hover:bg-yellow-400 transition duration-300 flex items-center justify-center"
                disabled={loading}
            >
                {loading ? (
                    <span>Loading...</span>
                ) : (
                    <>
                        <i className="bi bi-credit-card text-white mr-3"></i> Pay with Flutterwave
                    </>
                )}
            </button>
        </div>
    );
};

export default PaymentSection;
