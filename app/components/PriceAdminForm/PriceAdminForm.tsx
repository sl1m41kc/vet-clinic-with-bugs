"use client";
import clsx from "clsx";

import { AddButton } from "@/app/UI/AddButton/AddButton";
import { DeleteButton } from "@/app/UI/DeleteButton/DeleteButton";

import classes from "./priceAdminForm.module.css";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { IPriceSection } from "@/app/types/IPrice";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DEFAULT_PRICE_DATA, PRICE_DATA } from "@/app/data/priceData";
import { PriceDraggableItem } from "../PriceDraggableItem/PriceDraggableItem";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { PriceDragOverlayItem } from "../PriceDragOverlayItem/PriceDragOverlayItem";

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
  idPrice?: number;
}

export const PriceAdminForm = ({ idPrice, formRef }: IProps) => {
  const [draggingItemIndex, setDraggingItemIndex] = useState<number>();

  const { control, handleSubmit, reset, getValues } = useForm<IPriceSection>({
    defaultValues: idPrice ? PRICE_DATA[idPrice] : DEFAULT_PRICE_DATA,
  });

  const {
    fields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({
    control,
    name: "services",
  });

  const isServices = fields.length > 0;

  const onSubmit = (data: IPriceSection) => {
    console.log(data);
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    const draggingItemIndex = Number(
      String(active.data.current?.pathToService).split(".").pop()
    );
    setDraggingItemIndex(draggingItemIndex);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setDraggingItemIndex(undefined);

    if (active.id !== over?.id) {
      const activeIndex = Number(
        String(active.data.current?.pathToService).split(".").pop()
      );
      const overIndex = Number(
        String(over?.data.current?.pathToService).split(".").pop()
      );

      if (activeIndex >= 0 && overIndex >= 0) {
        const newServices = arrayMove(
          getValues().services,
          activeIndex,
          overIndex
        );
        reset({
          ...getValues(),
          services: newServices,
        });
      }
    }
  };

  return (
    <section className="container">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={classes.main}>
        <DeleteButton onClick={() => reset(DEFAULT_PRICE_DATA)} />

        <div className={classes.inputs}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="Название раздела"
                {...field}
                className={classes.input}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="Описание раздела"
                {...field}
                className={classes.input}
              />
            )}
          />
        </div>

        {isServices && (
          <div className={classes.listServices}>
            <DndContext
              id="DndContextPriceAdminForm"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            >
              <SortableContext
                items={fields}
                strategy={verticalListSortingStrategy}
              >
                {draggingItemIndex === undefined && (
                  fields.map((service, index) => (
                    <PriceDraggableItem
                      id={service.id}
                      key={clsx(index, service.id, service.title + "item")}
                      control={control}
                      reset={reset}
                      getValues={getValues}
                      pathToService={`services.${index}`}
                      remove={removeService}
                    />
                  ))
                )}
                {draggingItemIndex !== undefined && (
                  fields.map((service, index) => (
                    <PriceDragOverlayItem 
                      key={clsx(index, service.id, service.title + "item")}
                      data={service}
                      pathToService={`services.${index}`}
                      isTopLevelService
                    />
                  ))
                )}
              </SortableContext>

              <DragOverlay>
                {typeof draggingItemIndex === "number" && (
                  <PriceDragOverlayItem
                    data={fields[draggingItemIndex]}
                    isTopLevelService
                  />
                )}
              </DragOverlay>
            </DndContext>
          </div>
        )}

        <div className={classes.button}>
          <AddButton
            onClick={() => appendService({ id: String(Date.now()), title: "" })}
            text="Добавить услугу"
            animated={true}
          />
        </div>

        <Controller
          name="note"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <input
              type="text"
              placeholder="Примечание для раздела"
              {...field}
              className={classes.input}
            />
          )}
        />
      </form>
    </section>
  );
};
