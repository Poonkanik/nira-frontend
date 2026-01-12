import React from "react";
import "./SoapCard.css";
import { useCart } from "../../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const SoapCard = ({ soap }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

const handleAddToCart = () => {
  console.log("ADD TO CART CLICKED", soap);
  addToCart(soap);
};


  const handleBuyNow = () => {
    addToCart(soap);
    navigate("/checkout");
  };

  return (
    <div className="soap-card">
      <img src={soap.image} alt={soap.name} />
      <h3>{soap.name}</h3>
      <p>{soap.notes}</p>

      <div className="price">₹{soap.price}</div>

      <div className="btn-group">
        <button className="btn-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button className="btn-buy" onClick={handleBuyNow}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default SoapCard;
