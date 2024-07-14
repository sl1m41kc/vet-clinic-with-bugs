import React from "react";
import clsx from "clsx";

import ArrowSVG from '/public/arrow_forward_blue.svg'
import CrossSVG from '/public/close.svg'

import styles from "./circleButton.module.css";

interface IProps {
  image: string;
}

const CircleButton = ({ image }: IProps) => {
  return (
    <button
      className={clsx(styles.circleButton, {
        [styles.arrow]: image === 'arrow',
        [styles.cross]: image === 'cross'
      })}
    >
      {image === 'arrow' ? <ArrowSVG className={styles.arrow_icon}/> : <CrossSVG/>}
    </button>
  );
};

export default CircleButton;
