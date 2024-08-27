import React from "react";

import AccordionItem from "@/app/components/AccordionItem/AccordionItem";
import { Item } from "./Item/Item";

import { fetchPrices } from "@/app/utils/API";

import classes from "./prices.module.css";
import styles from "@/app/UI/PriceLoading/PriceLoading.module.css";
import type { IGroupPrice } from "@/app/types/IPrice";
import type { IError } from "@/app/types/IError";

const Prices = async () => {
  const prices: IGroupPrice[] | IError = await fetchPrices();
  if ('error' in prices) {
    return (
      <section className="container">
        <div className={styles.loader}>
          <p className={styles.text}>{prices.error}</p>
        </div>
      </section>
    );
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
};

export default Prices;
