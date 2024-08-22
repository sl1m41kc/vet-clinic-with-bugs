"use client";
import React from "react";

import LogoSVG from "/public/Svg/logo.svg";

import styles from './logo.module.css'


const Logo = () => {
  return (
      <LogoSVG className={styles.logo} onClick={() => window.location.href = "/"}/>
  );
};

export default Logo;
