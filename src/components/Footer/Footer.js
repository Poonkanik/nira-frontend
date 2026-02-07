import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-section">
          <h3>Nira Soaps</h3>
          <p>
            Handmade herbal soaps crafted with natural ingredients.
            Gentle on skin. Free from harsh chemicals.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/refund-policy">Return / Refund Policy</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Tamil Nadu, India</p>
          <p>📞 +91 9003713234</p>
          <p>
            ✉️ <a href="mailto:poonkanikannan@gmail.com">poonkanikannan@gmail.com</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 <strong>Nira Soaps</strong> — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
