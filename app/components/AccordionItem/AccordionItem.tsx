"use client";
import React, { useState } from "react";
import clsx from "clsx";

import { IService } from "@/app/types/IPrice";

import ArrowSVG from "/public/Svg/swiper_arrow.svg";

import classes from "./accordionItem.module.css";

const AccordionItem = ({ title, description, services, note }: IService) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <div
        className={clsx(classes.service, active && classes.active)}
        onClick={() => {
          toggle();
        }}
      >
        <div className={classes.text}>
          <h1 className={classes.title}>{title}</h1>
          <p>{description}</p>
        </div>
        <button className={classes.button}>
          <ArrowSVG className={clsx(classes.svg, active && classes.active)} />
        </button>
      </div>
      <div className={clsx(classes.inner, active && classes.active)}>
        <div className={classes.inner_content}>
          {services.map((service, index) => (
            <div key={clsx(index, service.title)}>
              <div className={clsx(classes.service, classes.service_item)}>
                <div className={classes.text}>
                  <h1 className={clsx(classes.title, classes.service_title)}>
                    {service.title}
                  </h1>
                  <p>{service.description}</p>
                </div>
                {service.price && (
                  <p className={classes.price}>
                    {service.price} <span className={classes.rub}> ₽</span>
                  </p>
                )}
              </div>
              {service.services &&
                service.services.map((service, index) => (
                  <div
                    key={clsx(index, service.title)}
                    className={clsx(
                      classes.service,
                      classes.service_item,
                      classes.sub_service
                    )}
                  >
                    <div className={classes.text}>
                      <h1
                        className={clsx(classes.title, classes.service_title)}
                      >
                        {service.title}
                      </h1>
                      <p>{service.description}</p>
                    </div>
                    <p className={classes.price}>
                      {service.price} <span className={classes.rub}> ₽</span>
                    </p>
                  </div>
                ))}
            </div>
          ))}
          <p className={classes.note}>{note}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
