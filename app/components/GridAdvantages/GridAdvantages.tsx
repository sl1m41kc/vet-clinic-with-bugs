import React from "react";

import PetCard from "@/app/components/PetCard/PetCard";
import RecordCard from "@/app/components/ActionCard/ActionCard";

import dogPNG from "/public/Corgi_dog.png";
import catPNG from "/public/Cat.png";

import styles from "./gridAdvantages.module.css";

const GridAdvantages = () => {
  return (
    <div className='container'>
      <div className={styles.grid}>
        <div className={styles.gridCard}>
          <PetCard
            title="Хирургия любой сложности"
            description="Оснащение клиники позволяет принимать плановых и&nbsp;экстренных пациентов"
            image={dogPNG}
            reverse={false}
            alt="Собака сидит и улыбается"
          />
        </div>
        <div className={styles.gridCard}>
          <PetCard
            title="Все анализы в&nbsp;одном месте"
            description="Оснащение хирургического отделения позволяет проводить приём как плановых, так и&nbsp;экстренных больных"
            image={catPNG}
            reverse={true}
            alt="Котенок выглядывает"
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
    </div>
  );
};

export default GridAdvantages;
