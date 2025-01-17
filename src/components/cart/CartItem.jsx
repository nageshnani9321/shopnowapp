import React, { useState } from "react";
import api, { BASE_URL } from "../../context/api";
import { toast } from "react-toastify";

const CartItem = ({ item, setCartTotal, cartitems, setNumberCartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false);

  const itemData = { quantity, item_id: item.id };
  const itemID = { item_id: item.id };

  function deleteCartitem() {
    const confirmDelete = window.confirm("Are you sure you want to delete this cart item?");
    if (confirmDelete) {
      api
        .post("delete_cartitem/", itemID)
        .then((res) => {
          console.log(res.data);
          toast.success("Cart item deleted successfully");
          setCartItems(cartitems.filter((cartitem) => cartitem.id !== item.id));
          setCartTotal(
            cartitems.filter((cartitem) => cartitem.id !== item.id).reduce((acc, curr) => acc + curr.total, 0)
          );
          setNumberCartItems(
            cartitems.filter((cartitem) => cartitem.id !== item.id).reduce((acc, curr) => acc + curr.quantity, 0)
          );
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  function updateCartitem() {
    setLoading(true);
    api
      .patch("update_quantity/", itemData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        toast.success("Cart item updated successfully🎉");
        setCartTotal(
          cartitems
            .map((cartitem) => (cartitem.id === item.id ? res.data.data : cartitem))
            .reduce((acc, curr) => acc + curr.total, 0)
        );
        setNumberCartItems(
          cartitems
            .map((cartitem) => (cartitem.id === item.id ? res.data.data : cartitem))
            .reduce((acc, curr) => acc + curr.quantity, 0)
        );
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Cart Item */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={`${BASE_URL}${item.product.image}`}
          alt="Product Image"
          className="w-20 h-20 object-cover rounded-md mx-auto md:mx-0"
        />
        <div className="flex-1 text-center md:text-left">
          <h5 className="text-lg font-semibold">{item.product.name}</h5>
          <p className="text-gray-500 text-sm">{`$${item.product.price}`}</p>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="number"
            min="1"
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ maxWidth: "80px" }}
          />
          <button
            onClick={updateCartitem}
            disabled={loading}
            className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-950 transition-colors"
          >
            {loading ? "Updating" : "Update"}
          </button>
          <button
            onClick={deleteCartitem}
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
