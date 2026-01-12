import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Link to="/">Home</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">Cart <span className="cart-badge">{cart.length}</span></Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
