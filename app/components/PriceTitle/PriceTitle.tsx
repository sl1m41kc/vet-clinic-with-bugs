"use client";
import React from "react";
import clsx from "clsx";

import useResize from "@/app/hooks/useResize";

import classes from "./priceTitle.module.css";

const PriceTitle = () => {
  const { width } = useResize();
  return (
    <section className={clsx("container", classes.content)}>

        { width > 500 ?
          <p className={classes.moved}>
            Ветеринарная клиника &laquo;Ветлекарь&raquo;
          </p>
          :
          <>Ветеринарная клиника &laquo;Ветлекарь&raquo;</>
        }
        <>предоставляет широкий спектр услуг. В&nbsp;данном разделе вы можете
        ознакомиться с&nbsp;нашими расценками и&nbsp;узнать стоимость
        консультаций у&nbsp;наших специалистов.</>
    </section>
  );
};

export default PriceTitle;
