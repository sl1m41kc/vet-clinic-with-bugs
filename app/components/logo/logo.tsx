import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import logo from "/public/logo_vetlekar_horizontal.svg";

import styles from './logo.module.css'

interface IProps {
  scrolled: boolean
}

const Logo = ({ scrolled }: IProps) => {
  return (
    <Link className={clsx(styles.logo, { [styles.scrolled] : scrolled } )} href="/">
      <Image src={logo} fill alt="Ветлекарь логотип" priority={true}/>
    </Link>
  );
};

export default Logo;
