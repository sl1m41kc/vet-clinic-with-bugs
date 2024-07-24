import React from "react";

import styles from "./title.module.css";

const Title = () => {
  return (
    <div className="container">
      <div className={styles.text}>
        <p className={styles.moved}>
          Наша цель&nbsp;&mdash; обеспечить{" "}
          <span className={styles.colored}>индивидуальный уход,</span>
        </p>{" "}
        <span className={styles.colored}>гарантируя каждому питомцу</span>{" "}
        необходимое внимание с&nbsp;учетом его возраста и&nbsp;состояния
        здоровья.
      </div>
    </div>
  );
};

export default Title;
