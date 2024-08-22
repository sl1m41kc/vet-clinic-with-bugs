"use client";
import React from "react";
import clsx from "clsx";
import useResize from "@/app/hooks/useResize";
import useScroll from "@/app/hooks/useScroll";

import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import Contacts from "@/app/components/Contacts/Contacts";

import styles from "./header.module.css";
import Logo from "@/app/components/Logo/Logo";

const Header = () => {
  const { width } = useResize();
  const { isScrolled } = useScroll();

  return (
    <>
      <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
        <div className={styles.logoMenu}>
          <BurgerMenu />
          <Logo scrolled={isScrolled} />
        </div>
        {width > 650 && <Contacts />}
      </header>
      <div className={styles.phantom}></div>
    </>
  );
};

export default Header;
