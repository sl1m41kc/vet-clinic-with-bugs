import React from "react";
import clsx from "clsx";

import ArrowSVG from "/public/arrow_forward_blue.svg";


import styles from "./arrowButton.module.css";

interface IProps {
  text: string;
  isFill: boolean;
}

const ArrowButton = ({ text, isFill }: IProps) => {

  return (
    <button
      className={clsx(styles.arrowButton, 
        isFill ? styles.fill : styles.notFill
      )}
    >
      {text}
      <ArrowSVG className={styles.icon}/>
    </button>
  );
};

export default ArrowButton;
