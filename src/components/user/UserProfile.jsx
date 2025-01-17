// import React, { useEffect, useState } from 'react';
// import UserInfo from './UserInfo';
// import OrderHistoryContainer from './OrderHistoryContainer';
// import api from '../../context/api';

// const UserProfile = () => {
//   const [userInfo, setUserInfo] = useState({});
//   const [orderitems, setOrderItems] = useState([])
//   const [loading, setLoading] = useState(true); 
  
//   useEffect(() => {
//     setLoading(true);
    
//     api.get('user_info')
//       .then(res => {
//         console.log(res.data);
//         setUserInfo(res.data);
//         setOrderItems(res.data.items)
//         setLoading(false); 
//       })
//       .catch(err => {
//         console.log(err.message);
//         setLoading(false); 
//       });
//   }, []);

//   return (
//     <div className="my-5 container mx-auto px-6">

//       {loading ? (
//         <div className="text-center py-10">
//           <span>Loading...</span>
//         </div>
//       ) : (
//         <>
//           <UserInfo userInfo={userInfo} />
//           <OrderHistoryContainer orderitems={orderitems}/>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserProfile;



import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import OrderHistoryContainer from './OrderHistoryContainer';
import api from '../../context/api';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [orderitems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api.get('user_info')
      .then(res => {
        console.log(res.data);
        setUserInfo(res.data);
        setOrderItems(res.data.items || []); // Ensure 'items' is an array
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5 container mx-auto px-6">
      {loading ? (
        <div className="text-center py-10">
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <UserInfo userInfo={userInfo} />
          <OrderHistoryContainer orderitems={orderitems} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
