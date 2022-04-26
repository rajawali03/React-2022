import React from "react";
import "./button.css";

const Button = ({ active, children }) => {
  return (
    <button className={`button ${active ? "active" : ""}`}>{children}</button>
  );
};
export default Button;
