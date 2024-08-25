import React from "react";
import prisma from "@/prisma/client";
import { cache } from 'react'

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";
import { Item } from "./Item/Item";

import classes from "./prices.module.css";
import type { IGroupPrice } from "@/app/types/IPrice";


const Prices = async () => {
  try {
    const prices: IGroupPrice[] = await prisma.priceList.findMany();
    // Проверка на пустой массив
    if (prices.length === 0) {
      throw new Error();
    }
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
  } catch (error) {
    return (
      <section className="container">
        {/* TODO Стилизовать сообщение */}
        <p>Произошла ошибка. Попробуйте обновить страницу</p>
      </section>
    );
  }
};

export default Prices;
