"use client";
import React, { useState } from "react";
import Image from "next/image";

import blueArrow from "/public/arrow_forward_blue.svg";
import whiteArrow from "/public/arrow_forward_white.svg";

import styles from "./arrowButton.module.css";
import clsx from "clsx";

const ArrowButton = ({
  text,
  arrowChange,
}: {
  text: string;
  arrowChange: boolean;
}) => {
  const [arrow, setArrow] = useState(blueArrow);

  const mouseEnter = () => setArrow(whiteArrow);
  const mouseLeave = () => setArrow(blueArrow);
  return (
    <button
      className={clsx(styles.arrowButton, {[styles.changedColor]: arrowChange, [styles.notChangedColor]: !arrowChange})}
      onMouseEnter={() => {
        if (arrowChange) mouseEnter();
      }}
      onMouseLeave={() => {
        if (arrowChange) mouseLeave();
      }}
    >
      {text}
      <Image src={arrow} alt="A_dog_runs_against_the_background_of_a_park" />
    </button>
  );
};

export default ArrowButton;
