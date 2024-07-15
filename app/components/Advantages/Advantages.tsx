"use client";
import React from "react";
import useResize from "@/app/hooks/useResize";

import AdvantagesCard from "@/app/components/AdvantagesCard/AdvantagesCard";
import AdvantagesSwiper from "@/app/components/AdvantagesSwiper/AdvantagesSwiper";

import { advantagesData } from "@/app/data/advantagesData";

import styles from "./advantages.module.css";

const Advantages = () => {
  const { width } = useResize();

  if (width <= 1024) return <AdvantagesSwiper />;
  return (
    <div className={`container`}>
      <div className={styles.advantages}>
        {advantagesData.map((card) => (
          <AdvantagesCard
            key={card.title}
            title={card.title}
            description={card.description}
            changeColor={card.changeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
