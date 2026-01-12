import React from "react";
import SoapCard from "../SoapCard/SoapCard";
import "./SoapGrid.css";

const SoapGrid = ({ soaps }) => {
  return (
    <div className="soap-grid">
      {soaps.map((soap) => (
        <SoapCard key={soap.id} soap={soap} />
      ))}
    </div>
  );
};

export default SoapGrid;
