import Link from "next/link";
import { ExitButton } from "@/app/UI/ExitButton/ExitButton";

import LogoSVG from "/public/Svg/logo_vetlekar_horizontal.svg";

import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoMenu}>
        <div className={classes.burger}>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
        </div>
        <Link href="/">
          <LogoSVG className={classes.logo} />
        </Link>
      </div>
      <ExitButton />
    </header>
  );
};
