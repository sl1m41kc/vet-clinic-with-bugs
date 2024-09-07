import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import CircleButton from '@/app/UI/СircleButton/CircleButton';

import styles from './petCard.module.css';

interface IProps {
  title: string;
  description: string;
  image: StaticImageData;
  reverse: boolean;
  alt: string;
  link: string;
}

const PetCard = ({ title, description, image, reverse, alt, link }: IProps) => {
  return (
    <div className={clsx(styles.card, reverse && styles.reverse_card)}>
      <Link href={link} className={styles.button}>
        <CircleButton image="arrow" />
      </Link>
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
