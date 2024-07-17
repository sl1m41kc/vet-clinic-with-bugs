"use client";
import React from "react";
import clsx from "clsx";
import useResize from "@/app/hooks/useResize";
import useScroll from "@/app/hooks/useScroll";

import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import Logo from "@/app/components/Logo/Logo";
import Contacts from "@/app/components/Contacts/Contacts";

import styles from "./header.module.css";

const Header = () => {
  const { width } = useResize();
  
  const { isScrolled } = useScroll();


  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled )}>
      <div className={styles.logoMenu}>
        <BurgerMenu />
        <Logo scrolled={isScrolled}/>
      </div>
      {width > 650 && <Contacts />}
    </header>
  );
};

export default Header;
