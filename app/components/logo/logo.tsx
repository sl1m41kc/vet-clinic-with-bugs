import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { ILogoProps } from "@/app/types/ILogoProps";

import logo from "/public/logo_vetlekar_horizontal.svg";

import styles from './logo.module.css'

const Logo = ({ scrolled }: ILogoProps) => {
  return (
    <Link className={clsx(styles.logo, { [styles.scrolled] : scrolled } )} href="/">
      <Image src={logo} fill alt="Vetlekar_logo" priority={true}/>
    </Link>
  );
};

export default Logo;
