import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import MainLayout from './layout/MainLayout';
import NotFoundError from './components/main_ui/NotFoundError';
import ProductPage from './components/products/ProductPage';
import api from './context/api'; 
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkoutpages/CheckoutPage';
import LoginPage from './components/user/LoginPage';
import ProtectedRoute from './components/main_ui/ProtectedRoute';
import { AuthProvider } from './userContext/AuthContext';
import UserProfile from './components/user/UserProfile';
import PaymentStatus from './components/payments/PaymentsStatus';
import Signup from './components/user/Signup';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';




const App = () => {
  const [numCartItems, setNumberCartItems] = useState(0);
  const cart_code = localStorage.getItem("cart_code");

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart_items')) || [];
    setNumberCartItems(cartItems.length);
  };

  useEffect(() => {
    updateCartCount();

    if (cart_code) {
      api.get(`get_cart_stat?cart_code=${cart_code}`)
        .then(res => {
          setNumberCartItems(res.data.num_of_items);
        })
        .catch(err => {
          console.log("Error fetching cart status:", err.message);
        });
    }
  }, [cart_code]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path='/TermsConditions' element={<TermsConditions/>}/>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>} />
            <Route path="/product_details/:slug" element={<ProductPage setNumberCartItems={setNumberCartItems}/>} />
            <Route path='checkout' element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='profile' element={<UserProfile/>}/>
            <Route path="*" element={<NotFoundError />} />
            <Route path='payment-status' element={<PaymentStatus setNumberCartItems={setNumberCartItems}/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
};

export default App;


