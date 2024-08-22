'use client'
import React from "react";
import clsx from "clsx";

import LogoSVG from "/public/Svg/logo_vetlekar_horizontal.svg";

import styles from './logo.module.css'

interface IProps {
  scrolled: boolean
}

const Logo = ({ scrolled }: IProps) => {
  return (
      <LogoSVG className={clsx(styles.logo, { [styles.scrolled] : scrolled } )} onClick={() => window.location.href = "/"}/>
  );
};

export default Logo;
