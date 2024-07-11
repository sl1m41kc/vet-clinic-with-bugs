import React from "react";
import Image from "next/image";
import clsx from "clsx";

import arrow from "/public/arrow_forward_blue.svg";
import cross from "/public/close.svg";

import styles from "./circleButton.module.css";

interface IProps {
  image: string;
}

const CircleButton = ({ image }: IProps) => {
  return (
    <button
      className={clsx(styles.circleButton, {
        [styles.arrow]: image === arrow,
        [styles.cross]: image === cross
      })}
    >
      <Image className={clsx({[styles.arrow_img]: image === arrow})} src={image} alt="" />
    </button>
  );
};

export default CircleButton;
