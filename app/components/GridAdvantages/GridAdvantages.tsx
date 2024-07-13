import React from "react";

import styles from "./gridAdvantages.module.css";
import '@/app/globals.css'

const GridAdvantages = () => {
  return (
    <div className={`container ${styles.grid}`}>
      <div className={`${styles.block1} ${styles.gridCard}`}></div>
      <div className={`${styles.block1} ${styles.gridCard}`}></div>
      <div className={styles.block1}></div>
      <div className={styles.block1}></div>
    </div>
  );
};

export default GridAdvantages;
