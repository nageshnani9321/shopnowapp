import { useEffect, useState } from "react";
import api from "./api";

function useCartData() {
  const cart_code = localStorage.getItem("cart_code");
  const [cartitems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.00);
  const tax = 4.00;

  useEffect(() => {
    if (cart_code) {
      api.get(`/get_cart?cart_code=${cart_code}`)
        .then(res => {
          console.log('Cart Data:', res.data);  
          if (res.data && res.data.items) {
            setCartItems(res.data.items);
            setCartTotal(res.data.sum_total);
          } else {
            console.error('Invalid data format:', res.data);
          }
        })
        .catch(err => {
          console.error('API Error:', err.message);
        });
    } else {
      console.log("Cart code not found in localStorage");
    }
  }, [cart_code]);

  return { cartitems, setCartItems, cartTotal, setCartTotal, tax };
}

export default useCartData;
