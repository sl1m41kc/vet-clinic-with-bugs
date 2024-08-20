import React from "react";
import clsx from "clsx";

import { PRICE_DATA } from "@/app/data/priceData";

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";

import classes from "./prices.module.css";

const Prices = () => {
  return (
    <section className="container">
      <ul className={classes.accordion}>
        {PRICE_DATA.map((price, index) => (
          <li key={clsx(index, price.title)}>
            <AccordionItem
              title={price.title}
              description={price.description}
              services={price.services}
              note={price.note} id=""            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prices;
