import React from "react";
import "./button.css";

const Button = ({ active, children, ...otherProps }) => {
  return (
    <button {...otherProps} className={`button ${active ? "active" : ""}`}>
      {children}
    </button>
  );
};
export default Button;
