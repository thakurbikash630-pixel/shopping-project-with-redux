import React from "react";
import "../Pant/Pant.css";

const Pant = (props) => {
  console.log(props);
  return (
    <div className="pant-whole">
      <div>
        <img className="pant-img" src={props.image} alt="" />
      </div>
      <div className="pant-name-price">
        <h1 className="pant-name">{props.name}</h1>
        <h1 className="pant-price">{props.price}</h1>
      </div>
      <button className="pant-btn">Add to Cart</button>
    </div>
  );
};

export default Pant;
