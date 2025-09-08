import React from "react";
import "../Cart/Cart.css";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const goTocart = () => {
    navigate("/Cart");
  };

  const cartItems = useSelector((state) => state.cart.value);
  console.log(cartItems);

  return (
    <div className="cart-whole">
      <div className="cart">
        <h1 className="carth1" onClick={goTocart}>
          Cart
        </h1>
        <FaCartShopping className="cart-icn" />
      </div>
      <div className="cart-num">{cartItems.length}</div>
    </div>
  );
};

export default Cart;
