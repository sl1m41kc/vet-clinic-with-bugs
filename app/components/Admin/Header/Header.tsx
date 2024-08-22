import { ExitButton } from "@/app/UI/ExitButton/ExitButton";
import classes from "./Header.module.css";
import Logo from "../../Logo/Logo";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoMenu}>
        <div className={classes.burger}>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
          <span className={classes.line}></span>
        </div>
        <div className={classes.logo}><Logo /></div>
      </div>
      <ExitButton />
    </header>
  );
};
