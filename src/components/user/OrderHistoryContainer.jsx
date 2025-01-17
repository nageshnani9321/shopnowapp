// import React from 'react';
// import OrderHistory from './OrderHistory';

// const OrderHistoryContainer = ({orderitems}) => {
//     return (
//         <div className="h-[400px] overflow-auto container mx-auto p-6 OrderHistory-scrollbar">
//         <div className="bg-white shadow-lg rounded-lg">
//             <div className="bg-purple-600 text-white p-4 rounded-t-lg">
//             <h5 className="text-xl font-semibold">Order History</h5>
//             </div>
//             <div className="p-4">
//                 {orderitems.map(item => <OrderHistory key={item.id} item={item}/>)}
            
//             <OrderHistory />
//             <OrderHistory />
//             </div>
//         </div>
//         </div>
//     );
// };

// export default OrderHistoryContainer;




import React from 'react';
import OrderHistory from './OrderHistory';

const OrderHistoryContainer = ({ orderitems }) => {
    if (!orderitems || orderitems.length === 0) {
        return <div>No order items available.</div>; // Handle the case where there are no order items
    }

    return (
        <div className="h-[400px] overflow-auto container mx-auto p-6 OrderHistory-scrollbar">
        <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-purple-600 text-white p-4 rounded-t-lg">
            <h5 className="text-xl font-semibold">Order History</h5>
            </div>
            <div className="p-4">
            {orderitems.map(item => (
                <OrderHistory key={item.id} item={item} />
            ))}
            </div>
        </div>
        </div>
    );
};

export default OrderHistoryContainer;
