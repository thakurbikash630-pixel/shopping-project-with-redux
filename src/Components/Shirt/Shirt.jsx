import React from "react";
import "../Shirt/Shirt.css";
import Shirt_img from "../../assets/shirt.jpg";
import { useDispatch } from "react-redux";
import { addItemstoCart } from "../../store/Cart/CartSlice";

const Shirt = (props) => {
  const dispatch = useDispatch();

  const onAddtoCart = () => {
    dispatch(addItemstoCart(props));
  };

  return (
    <div className="shirt-whole">
      <div className="shirt-img">
        <img className="shirt-img" src={props.image} alt="" />
      </div>
      <div className="shirt-name-price">
        <h1 className="name">{props.name}</h1>
        <h1 className="price">{props.price}</h1>
      </div>
      <button className="shirt-btn" onClick={onAddtoCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Shirt;
