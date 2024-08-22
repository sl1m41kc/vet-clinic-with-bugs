import React from "react";
import clsx from "clsx";

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";
import { Item } from "./Item/Item";

import classes from "./prices.module.css";
import { PRICE_DATA } from "@/app/data/priceData";

const Prices = () => {
  return (
    <section className="container">
      <ul className={classes.accordion}>
        {PRICE_DATA.map((price, index) => (
          <li key={clsx(index, price.title)}>
            <AccordionItem
              title={price.title}
              description={price.description}
              isAccordion
            >
              <Item services={price.services} note={price.note} id={""} title={""} />
            </AccordionItem>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prices;
