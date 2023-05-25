import React from "react";
import styles from "../modules/button.module.css";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
  cancel: "cancel",
  update: "update",
};

function getButtonClassName(variant) {
  return styles[`button-${buttonTypes[variant]}`];
}

function Button({ children, type, variant, ...rest }) {
  return (
    <button
      className={`${styles.button} ${getButtonClassName(variant)}`}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
