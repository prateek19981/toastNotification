import React from "react";
import Styles from "./Button.module.css";
const Button = ({ children, handleClick }) => {
  return (
    <button className={Styles.btn} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default Button;
