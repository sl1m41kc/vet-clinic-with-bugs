"use client";
import React from "react";
import useResize from "@/app/hooks/useResize";
import styles from "./title.module.css";

interface IProps {
  marginTop: number;
  marginTopMobile?: number;
}

const Title = ({ marginTop, marginTopMobile }: IProps) => {
  const { width } = useResize();
  return (
    <section className="container">
      <div className={styles.text} style={{ marginTop: width > 768 ? marginTop: marginTopMobile }}>
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