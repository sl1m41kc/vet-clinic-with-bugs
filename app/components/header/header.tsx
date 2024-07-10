"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useResize from "@/app/hooks/useResize";

import BurgerMenu from "../burger-menu/burgerMenu";
import Logo from "../logo/logo";
import Info from "../info/info";

import styles from "./header.module.css";

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);

  const { width } = useResize();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (width < 1025)
    return (
      <header className={clsx(styles.header, { [styles.scrolled]: isScrolled })}>
        <div className={styles.logoMenu}>
          <BurgerMenu />
          <Logo scrolled={isScrolled}/>
        </div>
      </header>
    );

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: isScrolled } )}>
      <div className={styles.logoMenu}>
        <BurgerMenu />
        <Logo scrolled={isScrolled}/>
      </div>
      <Info />
    </header>
  );
};

export default Header;
