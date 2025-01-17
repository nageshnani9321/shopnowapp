import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../context/api';  
import { toast } from 'react-toastify';

const ProductPage = ({setNumberCartItems}) => {
  const { slug } = useParams();  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [deliveryTime, setDeliveryTime] = useState(""); 
  const cart_code = localStorage.getItem("cart_code") || generateCartCode();  
  const [inCart, setInCart] = useState(false);

  function generateCartCode() {
    const newCartCode = Math.random().toString(36).substr(2, 9); 
    localStorage.setItem("cart_code", newCartCode);  
    return newCartCode;
  }


  const fetchDeliveryTime = () => {

    setDeliveryTime("3-5 business days");  
  };

  function add_item() {
    if (product && cart_code) {
      const newItem = { cart_code: cart_code, product_id: product.id, quantity: quantity };

      console.log("Adding item to cart:", newItem);

      api.post("add_item/", newItem, {
        headers: {
          'Content-Type': 'application/json', 
        },
      })
        .then((res) => {
          console.log("Item added:", res.data);
          setInCart(true)
          toast.success("Product Added To Cart Successfully")
          setNumberCartItems(curr => curr + 1)
          
        })
        .catch((err) => {
          console.error("Error adding item:", err.response ? err.response.data : err.message);
          alert("Failed to add item to cart. Please try again.");
        });
    } else {

      if (!product) {
        console.error("Product is missing.");
        alert("Product not found.");
      }
      if (!cart_code) {
        console.error("Cart Code is missing.");
        alert("Cart Code is missing. Please try again.");
      }
    }
  }

  useEffect(() => {
    if (product && product.id) {
      api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
        .then(res => {
          console.log(res.data);
          setInCart(res.data.product_in_cart);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }, [cart_code, product]); 

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await api.get(`/product_details/${slug}`);
        setProduct(response.data);  
        setRelatedProducts(response.data.similar_products || []);  
      } catch (err) {
        setError('Failed to fetch product data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);  
    } else {
      setQuantity(1);  
    }
  };

  useEffect(() => {
    fetchDeliveryTime(); 
  }, [product]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;  
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;  
  }

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>; 
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={`http://127.0.0.1:8000${product.image}`} 
            alt={product.name}
            className="rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-500 mt-6">${product.price}</p>

          {/* Delivery Time */}
          <p className="text-lg text-green-500 mt-4">Estimated Delivery Time: {deliveryTime}</p>

          {/* Add to Cart Button */}
          <div className="mt-6 w-full text-center lg:text-left">
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transform hover:scale-105 transition duration-300"
              onClick={add_item}
              disabled={inCart}
            >
              {inCart ? "Product added to Cart!!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="text-2xl font-semibold text-gray-900 text-center mt-16 mb-6">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <Link to={`/product_details/${relatedProduct.slug}`} className="relative w-full h-72">
                <img
                  src={`http://127.0.0.1:8000${relatedProduct.image}`}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover object-center rounded-t-lg"
                />
              </Link>

              <div className="p-4 flex flex-col space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 truncate">{relatedProduct.name}</h4>
                <p className="text-sm text-gray-500 truncate">{relatedProduct.description}</p>
                <p className="text-lg font-bold text-gray-900">${relatedProduct.price}</p>
                <Link 
                  to={`/product_details/${relatedProduct.slug}`} 
                  className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No related products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
