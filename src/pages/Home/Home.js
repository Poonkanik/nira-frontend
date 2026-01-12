import React from "react";
import SoapGrid from "../../components/SoapGrid/SoapGrid";
import soapsData from "../SoapData";
import "./Home.css";

const Home = () => {
  return <SoapGrid soaps={soapsData} />;
};

export default Home;
