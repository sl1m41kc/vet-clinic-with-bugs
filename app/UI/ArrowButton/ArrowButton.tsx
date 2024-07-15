import React from "react";
import clsx from "clsx";

import ArrowSVG from "/public/arrow_forward_blue.svg";


import styles from "./arrowButton.module.css";

interface IProps {
  text: string;
  arrowChange: boolean;
}

const ArrowButton = ({ text, arrowChange }: IProps) => {

  return (
    <button
      className={clsx(styles.arrowButton, {
        [styles.changedColor]: arrowChange,
        [styles.notChangedColor]: !arrowChange,
      })}
    >
      {text}
      <ArrowSVG className={styles.icon}/>
    </button>
  );
};

export default ArrowButton;
