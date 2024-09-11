import React from 'react';
import AccordionItem from '@/app/components/AccordionItem/AccordionItem';
import { Item } from './Item/Item';
import { fetchPrices } from '@/app/utils/API';
import classes from './prices.module.css';
import type { IGroupPrice } from '@/app/types/IPrice';
import type { IError } from '@/app/types/IError';
import { Error } from '../Error/Error';

const Prices = async () => {
  const prices: IGroupPrice[] | IError = await fetchPrices();
  if ('error' in prices) return <Error text={prices.error} />;

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
