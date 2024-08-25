import React from "react";
import prisma from "@/prisma/client";

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";
import { Item } from "./Item/Item";

import classes from "./prices.module.css";
import type { IGroupPrice } from "@/app/types/IPrice";

const Prices = async () => {
  const prices: IGroupPrice[] = await prisma.priceList.findMany();
  return (
    <section className="container">
      <ul className={classes.accordion}>
        {prices.map((price) => (
          <li key={price.id}>
            <AccordionItem
              title={price.groupTitle}
              description={price.groupDescription}
              isAccordion
            >
              <Item services={price.services} groupNote={price.groupNote} />
            </AccordionItem>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prices;
