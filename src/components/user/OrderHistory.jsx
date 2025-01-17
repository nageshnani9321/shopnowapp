// import React from 'react';
// import { BASE_URL } from '../../context/api';

// const OrderHistory = ({item}) => {
//     return (
//         <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
//             {/* Product Image */}
//             <div className="col-span-1">
//             <img
//                 src={`${BASE_URL}${item.product.image}`}
//                 alt="Order Item"
//                 className="w-full h-auto rounded-lg"
//             />
//             </div>

//             {/* Product Details */}
//             <div className="col-span-2">
//             <h6 className="font-semibold text-lg text-gray-800">{item.product.name}</h6>
//             <p className="text-sm text-gray-500">{`Order Date: ${item.order_date}`}</p>
//             <p className="text-sm text-gray-500">{`Order ID: ${item.order_id}`}</p>
//             </div>

//             {/* Quantity */}
//             <div className="col-span-1 text-center">
//             <h6 className="text-sm text-gray-500">{`Quantity: ${item.quantity}`}</h6>
//             </div>

//             {/* Price */}
//             <div className="col-span-1 text-center">
//             <h6 className="text-lg font-semibold text-gray-900">{`₹${item.product.price}`}</h6>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default OrderHistory;



import React from 'react';
import { BASE_URL } from '../../context/api';
import { Dates } from '../../context/Dates';

const OrderHistory = ({ item }) => {
  if (!item.product) {
    return <div>Product information is unavailable.</div>; // Return a fallback message if item.product is undefined
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
        {/* Product Image */}
        <div className="col-span-1">
          <img
            src={`${BASE_URL}${item.product.image}`}
            alt="Order Item"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="col-span-2">
          <h6 className="font-semibold text-lg text-gray-800">{item.product.name}</h6>
          <p className="text-sm text-gray-500">{`Order Date: ${Dates(item.order_date)}`}</p>
          <p className="text-sm text-gray-500">{`Order ID: ${item.order_id}`}</p>
        </div>

        {/* Quantity */}
        <div className="col-span-1 text-center">
          <h6 className="text-sm text-gray-500">{`Quantity: ${item.quantity}`}</h6>
        </div>

        {/* Price */}
        <div className="col-span-1 text-center">
          <h6 className="text-lg font-semibold text-gray-900">{`₹${item.product.price}`}</h6>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
