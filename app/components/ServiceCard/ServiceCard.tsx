import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { IServiceCard } from "@/app/types/IServiceCard";

import CircleButton from "@/app/UI/СircleButton/CircleButton";

import PawSVG from "/public/Paw.svg";
import HeartSVG from "/public/Heart.svg";
import FlaskSVG from "/public/Flask.svg";
import MedBowlSVG from "/public/Med_bowl.svg";

import style from "@/app/components/PetCard/petCard.module.css";
import classes from "./serviceCard.module.css";

const ServiceCard = ({ title, services, hasSVG, src }: IServiceCard) => {
  return (
    <div className={classes.card}>
      <div className={style.button}>
        <CircleButton image="arrow" />
      </div>

      <h1 className={classes.title}>{title}</h1>
      {services.map((service, index) => (
        <div key={index} className={classes.service}>
          <PawSVG className={classes.paw_svg} />
          {service.isLink ? (
            <Link href="/">
              <p className={clsx(classes.text, classes.link)}>{service.text}</p>
            </Link>
          ) : (
            <p className={classes.text}>{service.text}</p>
          )}
        </div>
      ))}

      {hasSVG && src == "heart" ? <HeartSVG className={classes.svg} /> : ""}
      {hasSVG && src == "flask" ? <FlaskSVG className={classes.svg} /> : ""}
      {hasSVG && src == "bowl" ? <MedBowlSVG className={classes.svg} /> : ""}
    </div>
  );
};

export default ServiceCard;
