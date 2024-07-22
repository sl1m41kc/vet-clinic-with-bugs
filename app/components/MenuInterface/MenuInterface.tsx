import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";

import { menuNavData } from "@/app/data/menuNavData";

import Contacts from "../Contacts/Contacts";
import CircleButton from "@/app/UI/СircleButton/CircleButton";

import LogoSVG from "/public/logo_vetlekar_horizontal.svg";

import classes from "./menuInterface.module.css";
import style from "@/app/components/PetCard/petCard.module.css";

const MenuInterface = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);
  return (
    <>
      <div
        className={clsx(classes.blackout, isOpen && classes.active)}
        onClick={() => setIsOpen(false)}
      />
      <div className={clsx(classes.menu, isOpen && classes.open)}>
        <div className={style.button} onClick={() => setIsOpen(false)}>
          <CircleButton image="cross" />
        </div>
        <div className={classes.content} onClick={(e) => e.stopPropagation()}>
          <div className={classes.contacts}>
            <Link className={classes.logo} href="/">
              <LogoSVG />
            </Link>
            <Contacts style="menu" />
          </div>

          <ul className={classes.list}>
            {menuNavData.map((item, index) => (
              <Link key={index} className={classes.item} href={item.href}>
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuInterface;
