import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import location from "/public/location.svg";
import phone from "/public/phone_iphone.svg";
import bluePhone from "/public/phone_iphone_blue.svg";

import styles from "./info.module.css";

const Info = () => {
  const [image, setImage] = useState(phone);

  const mouseEnter = () => setImage(bluePhone);
  const mouseLeave = () => setImage(phone);
  return (
    <div className={styles.info}>
      <div className={styles.address}>
        <Image src={location} alt="location" />
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
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.phone}
        href="tel:+7 (383) 285-02-04"
      >
        <Image src={image} alt="phone" /> +7 (383) 285-02-04
      </Link>
    </div>
  );
};

export default Info;
