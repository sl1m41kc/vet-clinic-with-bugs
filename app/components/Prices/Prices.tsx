import React from "react";
import clsx from "clsx";

import { priceData } from "@/app/data/pricesData";

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";

import classes from "./prices.module.css";

const Prices = () => {
  return (
    <section className="container">
      <ul className={classes.accordion}>
        {priceData.map((price, index) => (
          <li key={clsx(index, price.title)}>
            <AccordionItem
              title={price.title}
              description={price.description}
              services={price.services}
              note={price.note}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prices;
