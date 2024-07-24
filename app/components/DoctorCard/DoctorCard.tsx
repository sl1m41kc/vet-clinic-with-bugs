import React from "react";
import Image from "next/image";

import { IDoctorCard } from "@/app/types/IDoctorCard";

import CircleButton from "@/app/UI/СircleButton/CircleButton";

import style from "@/app/components/PetCard/petCard.module.css";
import classes from "./doctorCard.module.css";
import { DOCTORS_PATH } from "@/app/Сonstants/pathsConsts";

const DoctorCard = ({
  image,
  fullName,
  professions,
  startWork,
  alt
}: IDoctorCard) => {

  let currentYear = new Date().getFullYear();

  let experience = currentYear - startWork;
  return (
    <div className={classes.card}>
      <div className={style.button}>
        <CircleButton image="arrow" />
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <Image
            className={classes.img}
            fill
            src={`${DOCTORS_PATH}${image}.png`}
            alt={alt}
          />
        </div>
        <div className={classes.text}>
          <h1 className={classes.fullName}>{fullName}</h1>
          <p className={classes.professions}>{professions}</p>
        </div>
      </div>
      <div className={classes.experience}>
        <hr className={classes.line} />
        <p>
          Стаж:<span className={classes.experience_number}> {experience}</span> лет
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
