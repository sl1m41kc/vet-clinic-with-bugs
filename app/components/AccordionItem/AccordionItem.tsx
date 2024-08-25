"use client";
import React, { useState } from "react";
import clsx from "clsx";

import ArrowSVG from "/public/Svg/swiper_arrow.svg";

import classes from "./accordionItem.module.css";

interface IProps {
  title: string;
  description: string | null;
  isAccordion?: boolean;
  children: React.ReactNode;
}

const AccordionItem = ({ title, description, isAccordion, children }: IProps) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <div
        className={clsx(classes.accordion_item, active && classes.active)}
        onClick={() => {
          isAccordion && toggle();
        }}
        style={{ cursor: isAccordion ? "pointer" : "default" }}
      >
        <div className={classes.text}>
          <h1 className={classes.title}>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {isAccordion && <button className={classes.button}>
          <ArrowSVG className={clsx(classes.svg, active && classes.active)} />
        </button>}
      </div>
      <div className={clsx(classes.inner, active && classes.active)}>
        <div className={classes.inner_content}>
          {children}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
