import React, { useEffect, useState } from 'react';
import Header from '../home/Header';
import CardContainer from '../home/CardsComponent';
import api from '../../context/api';
import PlaceHolderContainer from '../main_ui/PlaceHolderContainer';
import { randomValue } from '../../GenerateCartCode';

const Home = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(function(){
    if(localStorage.getItem("cart_code") === null){
      localStorage.setItem("cart_code", randomValue)
    }
  },[])

  useEffect(() => {
    api.get('products')
      .then((response) => {
        console.log('Fetched products:', response.data); 
        setProducts(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error('Error fetching products:', err.message); 
        setError(err.message); 
        setLoading(false); 
      });
  }, []); 

  return (
    <>
      <Header />
      
      {loading ? (
        <PlaceHolderContainer count={products.length || 12} />
      ) : error ? (
        <p className="text-center text-lg text-red-600">Error: {error}</p>
      ) : (
        <CardContainer products={products} />
      )}
    </>
  );
};

export default Home;
