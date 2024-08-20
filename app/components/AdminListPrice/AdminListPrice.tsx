"use client";
import clsx from "clsx";
import classes from "./adminListPrice.module.css";
import { PRICE_DATA } from "@/app/data/priceData";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { AdminListPriceDraggableItem } from "../AdminListPriceDraggableItem/AdminListPriceDraggableItem";
import { AdminListPriceDragOverlayItem } from "../AdminListPriceDragOverlayItem/AdminListPriceDragOverlayItem";

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export const AdminListPrice = ({ formRef }: IProps) => {
  const [isDraggingItem, setIsDraggingItem] = useState<number>();

  const { getValues, reset, handleSubmit } = useForm({
    defaultValues: {
      priceSections: PRICE_DATA,
    },
  });

  const handleDragStart = ({ active }: DragStartEvent) => {
    console.log(active.data.current?.indexSection);
    setIsDraggingItem(active.data.current?.indexSection);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setIsDraggingItem(undefined);

    if (active.id !== over?.id) {
      const activeIndex = Number(
        String(active.data.current?.indexSection).split(".").pop()
      );
      const overIndex = Number(
        String(over?.data.current?.indexSection).split(".").pop()
      );
      reset({
        priceSections: arrayMove(
          getValues().priceSections,
          activeIndex,
          overIndex
        ),
      });
    }
  };

  const onSubmit = (data: any) => {
    console.log(data.priceSections);
  };

  return (
    <section className={"container"}>
      <form className={classes.wrapper} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <DndContext
        id="dndContextAdminL"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={getValues().priceSections}
          strategy={verticalListSortingStrategy}
        >
          {getValues().priceSections.map((price, index) => (
            <AdminListPriceDraggableItem
              key={clsx(index, price.title)}
              price={price}
            />
          ))}
        </SortableContext>

        <DragOverlay>
          {typeof isDraggingItem === "number" && (
            <AdminListPriceDragOverlayItem price={getValues().priceSections[isDraggingItem]} />
          )}
        </DragOverlay>
      </DndContext>
      </form>
    </section>
  );
};
