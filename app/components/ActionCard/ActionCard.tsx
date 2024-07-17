import React from "react";

import ArrowButton from "@/app/UI/ArrowButton/ArrowButton";

import VKLogoSVG from "/public/VK_logo.svg";

import styles from "./ActionCard.module.css";

interface IProps {
  title: string;
  description: string;
  haveSVG: boolean;
  buttonText: string;
}

const ActionCard = ({ title, description, haveSVG, buttonText }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <ArrowButton text={buttonText} isFill={true} />
      {haveSVG && <VKLogoSVG className={styles.svg} />}
    </div>
  );
};

export default ActionCard;
