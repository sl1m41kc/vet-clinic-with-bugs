"use client";
import { useSortable } from "@dnd-kit/sortable";
import classes from "./AdminListPriceDragOverlayItem.module.css";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import { EditButton } from "@/app/UI/EditButton/EditButton";
import { IPrice } from "@/app/types/IPrice";

interface IProps {
  price: IPrice;
}

export const AdminListPriceDragOverlayItem = ({ price }: IProps) => {
  const { title, description } = price;

  return (
    <div className={classes.price}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        <p>{description}</p>
      </div>

      <EditButton />
    </div>
  );
};
