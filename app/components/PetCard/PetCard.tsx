import React from "react";
import Image, { StaticImageData } from "next/image";

import CircleButton from "@/app/UI/СircleButton/CircleButton";

import styles from "./petCard.module.css";

interface IProps {
  title: string;
  description: string;
  image: StaticImageData;
  reverse: boolean;
}

const PetCard = ({ title, description, image, reverse }: IProps) => {
  if (reverse)
    return (
      <div className={`${styles.card} ${styles.reverse_card}`}>
        <div className={styles.reverse_image}>
          <Image draggable={false} src={image} alt="" />
        </div>
        <div className={styles.button}>
          <CircleButton image="arrow" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );
  return (
    <div className={styles.card}>
      <div className={styles.button}>
        <CircleButton image="arrow" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.image}>
        <Image draggable={false} src={image} alt='' />
      </div>
    </div>
  );
};

export default PetCard;
