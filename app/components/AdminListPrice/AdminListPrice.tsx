"use client";
import clsx from "clsx";
import Link from "next/link";

import { EditButton } from "@/app/UI/EditButton/EditButton";

import classes from "./adminListPrice.module.css";
import { PRICE_DATA } from "@/app/data/priceData";

export const AdminListPrice = () => {
  return (
    <section className={clsx("container", classes.wrapper)}>
      {PRICE_DATA.map((price, index) => (
        <div className={classes.price} key={clsx(index, price.title)}>
          <div className={classes.text}>
            <h1 className={classes.title}>{price.title}</h1>
            <p>{price.description}</p>
          </div>

          <Link
            href={{
              pathname: "price/form",
              query: { idPrice: index },
            }}
            scroll={false}
          >
            <EditButton onClick={() => {}} />
          </Link>
        </div>
      ))}
    </section>
  );
};
