import React from "react";
import Image from "next/image";

import ArrowButton from "@/app/UI/ArrowButton/ArrowButton";

import hero from "/public/Images/hero.png";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className='container'>
      <div className={styles.hero}>
        <div className={styles.blackout} />
        <Image
          className={styles.img}
          fill
          src={hero}
          alt="собака бежит на фоне парка"
          priority
          placeholder="blur"
        />
        <div className={styles.description}>
          <div className={styles.text}>
            <p className={styles.discount}>-20%</p>
            <p className={styles.term}>
              До&nbsp;17&nbsp;июня действует скидка&nbsp;20% на&nbsp;вакцинацию
              от&nbsp;клеща
            </p>
          </div>
          <ArrowButton text="Подробнее" isFill={false} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
