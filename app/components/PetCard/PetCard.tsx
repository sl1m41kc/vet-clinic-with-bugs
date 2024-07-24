import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

import CircleButton from "@/app/UI/СircleButton/CircleButton";

import styles from "./petCard.module.css";

interface IProps {
  title: string;
  description: string;
  image: StaticImageData;
  reverse: boolean;
  alt: string
}

const PetCard = ({ title, description, image, reverse, alt }: IProps) => {
  return (
    <div className={clsx(styles.card, reverse && styles.reverse_card)}>
      <div className={styles.button}>
        <CircleButton image="arrow" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={reverse ? styles.reverse_image : styles.image}>
        <Image loading="lazy" draggable={false} src={image} alt={alt} />
      </div>
    </div>
  );
};

export default PetCard;
