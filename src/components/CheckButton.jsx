import React from "react";
import styles from "../modules/todo-item.module.css";
import { motion } from "framer-motion";

const checkVariant = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
    opacity: 1,
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
  },
};

const boxVariant = {
  checked: {
    background: "var(--primary-color)",
  },
  unchecked: {
    background: "rgba(128, 128, 128, 0.15)",
  },
};

function CheckButton({ checked, handleCheck }) {
  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariant}
      animate={checked ? "checked" : "unchecked"}
      onClick={handleCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariant}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;
