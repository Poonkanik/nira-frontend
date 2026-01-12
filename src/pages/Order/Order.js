import React from "react";
import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Order = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div>
            <strong>{item.name}</strong>
            <p>
              ₹{item.price} × {item.qty}
            </p>
          </div>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Order;
