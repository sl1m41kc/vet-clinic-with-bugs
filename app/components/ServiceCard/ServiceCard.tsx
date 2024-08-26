import React from "react";
import clsx from "clsx";
import Link from "next/link";
import CircleButton from "@/app/UI/СircleButton/CircleButton";
import PawSVG from "/public/Svg/Paw.svg";
import classes from "./serviceCard.module.css";
import { IServiceGroup } from "@/app/types/IServiceGroup";

const ServiceCard = ({ title, services, SVG, pathName }: IServiceGroup) => {
  return (
    <div className={classes.card}>
      <Link href={`/services/${pathName}`} className={classes.headerPanel}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.button}><CircleButton image="arrow" /></div>
      </Link>

      {services.map((service, index) => (
        <div key={clsx(index, service.text)} className={classes.service}>
          <PawSVG className={classes.paw_svg} />
          {service.isLink ? (
            <Link
              href={{
                pathname: `/services/${pathName}`,
                query: { serviceActiveId: `${service.id}` },
              }}
            >
              <p className={clsx(classes.text, classes.link)}>{service.text}</p>
            </Link>
          ) : (
            <p className={classes.text}>{service.text}</p>
          )}
        </div>
      ))}

      {SVG && <div className={classes.svg}>{SVG}</div>}
    </div>
  );
};

export default ServiceCard;
