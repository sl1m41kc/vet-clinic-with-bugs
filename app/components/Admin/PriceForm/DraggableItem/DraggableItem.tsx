"use client";
import clsx from "clsx";

import { AddButton } from "@/app/UI/AddButton/AddButton";
import { DeleteButton } from "@/app/UI/DeleteButton/DeleteButton";

import classes from "./DraggableItem.module.css";
import { DndContext } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { Controller, useFieldArray } from "react-hook-form";
import { CSS } from "@dnd-kit/utilities";
import { IPrice } from "@/app/types/IPrice";

interface IProps {
  control: any;
  pathToService: string;
  id: string;
  reset?: any;
  getValues?: any;
  remove: any;
  isDragOverlay?: boolean;
}

export const DraggableItem = ({
  control,
  id,
  reset,
  getValues,
  pathToService,
  remove,
  isDragOverlay,
}: IProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      pathToService,
    }
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isTopLevelService = pathToService.split(".").length === 2;
  const indexInGroup = Number(pathToService.split(".").pop());

  const {
    fields,
    append: appendNestedService,
    remove: removeNestedService,
  } = useFieldArray({
    control,
    name: `${pathToService}.services`,
  });

  const isGroup = fields.length > 0;

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over?.id) {
      const activeIndex = Number(
        String(active.data.current?.pathToService).split(".").pop()
      );
      const overIndex = Number(
        String(over?.data.current?.pathToService).split(".").pop()
      );

      if (activeIndex >= 0 && overIndex >= 0) {
        const newServices = arrayMove(
          getValues().services[indexInGroup].services,
          activeIndex,
          overIndex
        );
        reset({
          ...getValues(),
          services: getValues().services.map((service: IPrice, index: number) =>
            index === indexInGroup
              ? { ...service, services: newServices }
              : service
          ),
        });
      }
    }
  }

  return (
    <div
      className={clsx(classes.service, !isTopLevelService && classes.inner)}
      style={style}
      ref={setNodeRef}
      {...attributes}
    >
      <div className={classes.listenerContainer} {...listeners} />
      <div className={classes.content}>
        <DeleteButton onClick={() => remove(indexInGroup)} />

        <div className={classes.inputs}>
          <div className={classes.text}>
            <Controller
              name={pathToService + ".title"}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Название услуги"
                  {...field}
                  className={classes.input}
                />
              )}
            />
            <Controller
              name={pathToService + ".description"}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Описание услуги"
                  {...field}
                  className={classes.input}
                />
              )}
            />
          </div>

          {!isGroup && !isDragging && (
            <div className={classes.price}>
              <Controller
                name={pathToService + ".price"}
                defaultValue={0}
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    placeholder="Цена"
                    {...field}
                    className={classes.input}
                  />
                )}
              />
              <span className={classes.currency}>₽</span>
            </div>
          )}
        </div>

        {isGroup && !isDragOverlay && !isDragging && (
          <DndContext
            id={"DndContextPriceDraggableItem" + pathToService}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext items={fields}>
              {fields.map((price, index: number) => {
                return (
                  <DraggableItem
                    id={price.id}
                    key={clsx(index, price.id, "nestedPrice")}
                    control={control}
                    pathToService={`${pathToService}.services.${index}`}
                    remove={removeNestedService}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        )}

        {isTopLevelService && !isDragging && (
          <div className={classes.button}>
            <AddButton
              onClick={() => appendNestedService({})}
              text="Добавить услугу"
              animated={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};
