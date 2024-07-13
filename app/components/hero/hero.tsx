import React from "react";
import Image from "next/image";

import hero from "/public/hero.png";

import styles from "./hero.module.css";
import '@/app/globals.css'
import ArrowButton from "@/app/UI/ArrowButton/ArrowButton";

const Hero = () => {
  return (
    <div className={`container ${styles.hero}`}>
      <div className={styles.blackout}></div>
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
          <p className={styles.term}>До&nbsp;17&nbsp;июня действует скидка&nbsp;20% на&nbsp;вакцинацию от&nbsp;клеща</p>
        </div>
        <ArrowButton text={"Подробнее"} arrowChange={false} />
      </div>
    </div>
  );
};

export default Hero;
