import React from "react";

import AdvantagesCard from "@/app/components/AdvantagesCard/AdvantagesCard";

import styles from './advantages.module.css'
import "@/app/globals.css";

const Advatages = () => {
  return (
    <div className={`container ${styles.advantages}`}>
      <AdvantagesCard
        title="12"
        description="лет наша клиника работает для вас"
        changeColor={false}
      />

      <AdvantagesCard
        title="24/7"
        description="Мы рады вам в любое время"
        changeColor={true}
      />

      <AdvantagesCard
        title="1000+"
        description="довольных пациентов"
        changeColor={false}
      />

      <AdvantagesCard
        title="36"
        description="высококвалифицированных специалистов"
        changeColor={false}
      />

    </div>
  );
};

export default Advatages;
