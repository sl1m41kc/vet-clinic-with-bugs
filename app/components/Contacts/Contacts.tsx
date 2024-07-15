import React from "react";
import Link from "next/link";

import LocationSVG from "/public/location.svg";
import PhoneSVG from "/public/phone_iphone.svg";

import styles from "./contacts.module.css";

const Info = () => {

  return (
    <div className={styles.info}>
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
      <Link
        className={styles.phone}
        href="tel:+73832850204"
      >
        <PhoneSVG className={styles.icon}/> +7 (383) 285-02-04
      </Link>
    </div>
  );
};

export default Info;
