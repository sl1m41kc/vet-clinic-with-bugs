import React from "react";
import Link from "next/link";
import clsx from "clsx";

import LogoSVG from "/public/Svg/logo_vetlekar_horizontal.svg";

import styles from './logo.module.css'

interface IProps {
  scrolled: boolean
}

const Logo = ({ scrolled }: IProps) => {
  return (
    <Link href="/">
      <LogoSVG className={clsx(styles.logo, { [styles.scrolled] : scrolled } )}/>
    </Link>
  );
};

export default Logo;
