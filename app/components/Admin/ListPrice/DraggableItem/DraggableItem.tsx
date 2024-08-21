"use client";
import { useSortable } from "@dnd-kit/sortable";
import classes from "./DraggableItem.module.css";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import { EditButton } from "@/app/UI/EditButton/EditButton";
import { IPrice } from "@/app/types/IPrice";
import { PRICE_DATA } from "@/app/data/priceData";

interface IProps {
  price: IPrice;
}

export const DraggableItem = ({ price }: IProps) => {
  const { id, title, description } = price;
  const index = PRICE_DATA.findIndex((price) => price.id === id);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={classes.price}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className={classes.listenerContainer} {...listeners} />
      <div className={classes.content}>
        <div className={classes.text}>
          <h1 className={classes.title}>{title}</h1>
          <p>{description}</p>
        </div>

        <Link
          href={{
            pathname: "price/form",
            query: { idPrice: index },
          }}
          scroll={false}
        >
          <EditButton />
        </Link>
      </div>
    </div>
  );
};
