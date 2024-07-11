"use client";
import React, { useState } from "react";
import Image from "next/image";

import blueArrow from "/public/arrow_forward_blue.svg";
import whiteArrow from "/public/arrow_forward_white.svg";

import styles from "./arrowButton.module.css";
import clsx from "clsx";

interface IProps {
  text: string;
  arrowChange: boolean;
}

const ArrowButton = ({ text, arrowChange }: IProps) => {
  const [arrow, setArrow] = useState(blueArrow);

  const mouseEnter = () => setArrow(whiteArrow);
  const mouseLeave = () => setArrow(blueArrow);
  return (
    <button
      className={clsx(styles.arrowButton, {
        [styles.changedColor]: arrowChange,
        [styles.notChangedColor]: !arrowChange,
      })}
      onMouseEnter={() => {
        if (arrowChange) mouseEnter();
      }}
      onMouseLeave={() => {
        if (arrowChange) mouseLeave();
      }}
    >
      {text}
      <Image src={arrow} alt="стрелка" />
    </button>
  );
};

export default ArrowButton;
