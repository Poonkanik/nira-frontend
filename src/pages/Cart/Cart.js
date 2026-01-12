import React from "react";
import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="cart-empty">Your cart is empty</h2>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
   <div class="cart-page">
     <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            className="cart-img"
          />

          {/* DETAILS */}
          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>₹{item.price} × {item.qty}</p>
          </div>

          {/* REMOVE */}
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total:</strong>
        <strong>₹{total}</strong>
      </div>

      <Link to="/checkout">
        <button className="cart-btn">
          Continue Buy
        </button>
      </Link>
    </div>
   </div>
  );
};

export default Cart;
