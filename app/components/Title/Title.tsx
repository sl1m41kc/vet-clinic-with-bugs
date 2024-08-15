import React from "react";

import styles from "./title.module.css";

interface IProps {
  marginTop: number;
}

const Title = ({ marginTop }: IProps) => {
  return (
    <section className="container">
      <div className={styles.text} style={{ marginTop: marginTop }}>
        <p className={styles.moved}>
          Наша цель&nbsp;&mdash; обеспечить{" "}
          <span className={styles.colored}>индивидуальный уход,</span>
        </p>{" "}
        <span className={styles.colored}>гарантируя каждому питомцу</span>{" "}
        необходимое внимание с&nbsp;учетом его возраста и&nbsp;состояния
        здоровья.
      </div>
    </section>
  );
};

export default Title;
