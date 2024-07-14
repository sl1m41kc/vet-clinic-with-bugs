import React from "react";

import PetCard from "@/app/components/PetCard/PetCard";
import RecordCard from "@/app/components/RecordCard/RecordCard";

import dogPNG from "/public/Corgi_dog.png";
import catPNG from "/public/Cute_kitten.png";

import styles from "./gridAdvantages.module.css";
import "@/app/globals.css";

const GridAdvantages = () => {
  return (
    <div className={`container ${styles.grid}`}>
      <div className={`${styles.gridCard}`}>
        <PetCard
          title="Хирургия любой сложности"
          description="Оснащение клиники позволяет принимать плановых и&nbsp;экстренных пациентов"
          image={dogPNG}
          reverse={false}
        />
      </div>
      <div className={`${styles.gridCard}`}>
        <PetCard
          title="Все анализы в&nbsp;одном месте"
          description="Оснащение хирургического отделения позволяет проводить приём как плановых, так и&nbsp;экстренных больных"
          image={catPNG}
          reverse={true}
        />
      </div>
      <div className={styles.block}>
        <RecordCard
          title="Записаться на&nbsp;приём"
          description="Наши специалисты ответят на&nbsp;все ваши вопросы"
          buttonText="Записаться"
          haveSVG={false}
        />
      </div>
      <div className={styles.block}>
        <RecordCard
          title="Онлайн-консультация"
          description="Наши специалисты ответят на&nbsp;все ваши вопросы"
          buttonText="Перейти в&nbsp;VK"
          haveSVG={true}
        />
      </div>
    </div>
  );
};

export default GridAdvantages;
