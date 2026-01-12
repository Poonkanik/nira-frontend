import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/CheckOut/CheckOut";
import ProductView from "./pages/ProductView/ProductView";
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
