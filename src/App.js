import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/CheckOut/CheckOut";
import ProductView from "./pages/ProductView/ProductView";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Contact from "./pages/Contact/contact";
import Terms from "./pages/Terms/Terms";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";


function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductView />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Footer Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
