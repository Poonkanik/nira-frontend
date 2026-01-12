import React from "react";
import "./QuantitySelctor.css";
const QuantitySelector = ({ qty, setQty }) => {
  return (
    <div className="quantity-box">
      <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty(qty + 1)}>+</button>
    </div>
  );
};

export default QuantitySelector;
