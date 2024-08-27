"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

import useResize from "@/app/hooks/useResize";

import LocationSVG from "/public/Svg/location.svg";
import PhoneSVG from "/public/Svg/phone_iphone.svg";

import styles from "./contacts.module.css";

interface IProps {
  style?: string;
}

const Contacts = ({ style }: IProps) => {
  const { width } = useResize();

  if (style === "menu") {
    return (
      <div className={clsx(styles.info, styles.menu)}>
        <div className={clsx(styles.address, styles.menu)}>
          <LocationSVG />
          <div className={styles.text}>
            <p>Красный проспект, 169/1</p> <p>Кропоткина, 132</p>{" "}
            <p>Зорге, 77а</p> <p>Большевистская, 132</p>
          </div>
        </div>
        <Link className={styles.phone} href="tel:+73832850204">
          <PhoneSVG className={styles.icon} /> +7 (383) 285-02-04
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.info}>
      {width > 1130 && (
        <div className={styles.address}>
          <LocationSVG />
          <p className={styles.text}>
            Красный проспект, 169/1
            <br />
            Кропоткина, 132
          </p>
          <p className={styles.text}>
            Зорге, 77а
            <br />
            Большевистская, 132
          </p>
        </div>
      )}
      <Link className={styles.phone} href="tel:+73832850204">
        <PhoneSVG className={styles.icon} /> +7 (383) 285-02-04
      </Link>
    </div>
  );
};

export default Contacts;
