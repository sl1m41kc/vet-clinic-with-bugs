import clsx from "clsx";

import { AddButton } from "@/app/UI/AddButton/AddButton";
import { DeleteButton } from "@/app/UI/DeleteButton/DeleteButton";

import classes from "./PriceDraggableItem.module.css";
import { DndContext } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { IPrice } from "@/app/types/IPrice";

interface IProps {
  id: string;
  title: string;
  description?: string;
  items?: IPrice[];
  price?: number;
  isInner?: boolean;
  isDragOverlay?: boolean;
}

export const PriceDraggableItem = ({
  id,
  title,
  description,
  price,
  items,
  isInner,
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
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    transition,
  };

  return (
    <div
      className={clsx(classes.service, isInner && classes.inner)}
      style={style}
      ref={setNodeRef}
      {...attributes}
    >
      <div className={classes.listenerContainer} {...listeners} />
      <div className={classes.content}>
        <DeleteButton onClick={() => {}} />

        <div className={classes.inputs}>
          <div className={classes.text}>
            <input
              type="text"
              placeholder={clsx(items ? "Заголовок группы" : "Услуга")}
              className={clsx(classes.input, classes.title)}
              defaultValue={title}
            />
            <input
              type="text"
              placeholder={clsx(
                items ? "Примечание для группы" : "Примечание для цены"
              )}
              className={classes.input}
              defaultValue={description}
            />
          </div>

          {!items && !isDragging && (
            <div className={classes.price}>
              <input
                type="text"
                placeholder="0"
                className={classes.input}
                defaultValue={price}
              />
              <span className={classes.currency}>₽</span>
            </div>
          )}
        </div>

        {items && !isDragOverlay && !isDragging && (
          <DndContext
            id={`DndContextAdminFormPriceGroup${id}`}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext items={items}>
              {items.map((price, index) => (
                <PriceDraggableItem
                  key={clsx(index, price.id, price.title)}
                  {...price}
                  isInner
                />
              ))}
            </SortableContext>
          </DndContext>
        )}

        {!isDragOverlay && !isDragging && (
          <div className={classes.button}>
            <AddButton
              onClick={() => {}}
              text="Добавить услугу"
              animated={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};
