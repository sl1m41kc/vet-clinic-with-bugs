import React from "react";
import Link from "next/link";

import VK_Logo from "/public/VK_logo.svg";

import classes from "./footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="container">
      <div className={classes.footer}>
        <div className={classes.info}>
          <div className={classes.inEn}>
            <p>ИП Арзамасцева А. Е.</p>
            <p>ОГРН 313547627000098</p>
          </div>
          <div className={classes.documents}>
            <Link className={classes.link} href="/">
              Лицензии
            </Link>
            <Link className={classes.link} href="/">
              Политика конфиденциальности
            </Link>
          </div>
          <Link href='/'>
            <VK_Logo className={classes.svg} />
          </Link>
        </div>
        <p className={classes.copyright}>© {currentYear}, Ветлекарь</p>
      </div>
    </footer>
  );
};

export default Footer;
