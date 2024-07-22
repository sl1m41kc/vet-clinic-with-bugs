import React, { useState } from "react";

import styles from "./burgerMenu.module.css";
import MenuInterface from "../MenuInterface/MenuInterface";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.burgerMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      
      <MenuInterface isOpen={isOpen} setIsOpen={setIsOpen}></MenuInterface>
    </>
  );
};

export default BurgerMenu;
