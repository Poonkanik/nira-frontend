import React from "react";
import "./SoapCard.css";
import { useCart } from "../../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const SoapCard = ({ soap }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(soap);
  };

  const handleBuyNow = () => {
    addToCart(soap);
    navigate("/checkout");
  };

  // 👉 NEW: Navigate to detail page
 const handleViewDetail = () => {
  navigate(`/product/${soap.id}`);
};

  return (
   <div className="soap-card" onClick={handleViewDetail}>
      <img src={soap.image} alt={soap.name} />
      <h3>{soap.name}</h3>
      <p>{soap.notes}</p>

      <div className="price">₹{soap.price}</div>

      <div className="btn-group">
        <button
          className="btn-cart"
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>

        <button
          className="btn-buy"
          onClick={(e) => {
            e.stopPropagation();
            handleBuyNow();
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default SoapCard;