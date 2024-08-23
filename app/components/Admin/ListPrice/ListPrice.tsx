"use client";
import clsx from "clsx";
import classes from "./ListPrice.module.css";
import { DEFAULT_PRICE_DATA, PRICE_DATA } from "@/app/data/priceData";
import { useEffect, useState } from "react";
import { useForm, UseFormGetValues } from "react-hook-form";
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
import { DraggableItem } from "./DraggableItem/DraggableItem";
import { DragOverlayItem } from "./DragOverlayItem/DragOverlayItem";
import { handleDragEnd, handleDragStart } from "./handle";
import { PRICE_API } from "@/app/utils/API";
import { IPriceSection } from "@/app/types/IPrice";

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
}

export const ListPrice = ({ formRef }: IProps) => {
  // Инициализация состояния
  const [isDraggingItem, setIsDraggingItem] = useState<string>();

  // Инициализация формы
  const { getValues, reset, handleSubmit } = useForm({
    defaultValues: { priceSections: DEFAULT_PRICE_DATA },
  });

  // Инициализация данных
  useEffect(() => {
    PRICE_API.GET().then((data) => {
      reset({ priceSections: data });
    });
  });

  // Обработчик формы
  const onSubmit = (data: { priceSections: IPriceSection[] }) => {
    PRICE_API.PUT(data.priceSections);
  };

  // Данные
  const data = getValues().priceSections;

  return (
    <section className={"container"}>
      <form
        className={classes.wrapper}
        // Ссылка на компонент, чтобы в page был доступ к форме и ее могли вызвать при нажатии на "сохранить" в другом компоненте
        ref={formRef}
        // Обработчик формы
        onSubmit={handleSubmit(onSubmit)}
      >
        <DndContext
          onDragStart={(event: DragStartEvent) =>
            handleDragStart(event, setIsDraggingItem)
          }
          onDragEnd={(event: DragEndEvent) =>
            handleDragEnd(event, getValues, reset, setIsDraggingItem)
          }
        >
          <SortableContext
            // Передаем список динамических полей в контекст
            items={data}
            // Стратегия сортировки - по вертикали
            strategy={verticalListSortingStrategy}
          >
            {data.map((price: IPriceSection, index: number) => (
              <DraggableItem key={clsx(index, price.id)} price={price} />
            ))}
          </SortableContext>

          <DragOverlay>
            {isDraggingItem && (
              <DragOverlayItem price={data[data.findIndex((price) => price.id === isDraggingItem)]} />
            )}
          </DragOverlay>
        </DndContext>
      </form>
    </section>
  );
};
