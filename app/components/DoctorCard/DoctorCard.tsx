import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IDoctorCard } from '@/app/types/IDoctorCard';
import CircleButton from '@/app/UI/СircleButton/CircleButton';
import classes from './DoctorCard.module.css';
import { DOCTORS_PATH } from '@/app/Сonstants/pathsConsts';

const DoctorCard = ({
  id,
  image,
  fullName,
  professions,
  startWork,
  alt,
}: IDoctorCard) => {
  const currentYear = new Date().getFullYear();

  const experience = currentYear - startWork;
  return (
    <Link href={`specialists/${id}`} className={classes.card}>
      <div className={classes.button}>
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
      {experience >= 2 && (
        <div className={classes.experience}>
          <hr className={classes.line} />
          <p>
            Стаж:
            <span className={classes.experience_number}> {experience}</span> лет
          </p>
        </div>
      )}
    </Link>
  );
};

export default DoctorCard;
