import React from "react";
import styles from '../modules/page-title.module.css'
function PageTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default PageTitle;
