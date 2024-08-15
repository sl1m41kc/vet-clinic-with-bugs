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
import { useEffect, useState } from "react";
import { IPrice, IPriceSection } from "@/app/types/IPrice";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PRICE_DATA } from "@/app/data/priceData";
import { PriceDraggableItem } from "../PriceDraggableItem/PriceDraggableItem";

interface IProps {
  idPrice?: number;
}

export const PriceAdminForm = ({ idPrice }: IProps) => {
  const [priceSection, setPriceSection] = useState<IPriceSection>();
  const [activeItem, setActiveItem] = useState<IPrice>();

  useEffect(() => {
    if (idPrice) setPriceSection(PRICE_DATA[idPrice]);
  }, [idPrice]);

  // УДАЛЕНИЕ
  const requestDeletePriceSection = (idPrice: number) => {
    setPriceSection(undefined);
  };
  const handleDeletePriceSection = () => {
    if (idPrice) requestDeletePriceSection(idPrice);
    else setPriceSection(undefined);
  };

  // ДОБАВЛЕНИЕ
  const handleAddServiceToPriceSection = () => {
    if (priceSection) {
      const newPriceSection: IPriceSection = {
        ...priceSection,
        services: [...priceSection.services, { id: String(Date.now()), title: ""}],
      }
      setPriceSection(newPriceSection);
    }
  };
  const handleAddServiceToServiceGroup = () => {
    
  }

  const handleDragEndPriceSection = ({ active, over }: DragEndEvent) => {
    setActiveItem(undefined);
    if (over && active.id !== over.id) {
      setPriceSection((prevPriceSection) => {
        if (prevPriceSection) {
          const prevServices = prevPriceSection.services;
          const activeIndex = prevServices.findIndex(
            (service) => service.id === active.id
          );
          const overIndex = prevServices.findIndex(
            (service) => service.id === over.id
          );
          const newServices = arrayMove(prevServices, activeIndex, overIndex);
          const newPriceSection = {
            ...prevPriceSection,
            services: newServices,
          };
          return newPriceSection;
        }
      });
    }
  };

  const handleDragStartPriceSection = ({ active }: DragStartEvent) => {
    if (priceSection) {
      const activeItemId = priceSection.services.findIndex(
        (service) => service.id === active.id
      );
      const newActiveItem = priceSection.services[activeItemId];
      setActiveItem(newActiveItem);
    }
  };

  return (
    <section className="container">
      <div className={classes.main}>
        <DeleteButton onClick={handleDeletePriceSection} />
        <div className={classes.inputs}>
          <input
            type="text"
            placeholder="Заголовок раздела"
            defaultValue={priceSection?.title}
            className={clsx(classes.input, classes.title)}
          />
          <input
            type="text"
            placeholder="Примечания для раздела"
            defaultValue={priceSection?.description}
            className={classes.input}
          />
        </div>

        {priceSection && (
          <div className={classes.listServices}>
            <DndContext
              id="DndContextPriceAdminForm"
              onDragStart={handleDragStartPriceSection}
              onDragEnd={handleDragEndPriceSection}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            >
              {priceSection.services && (
                <SortableContext
                  items={priceSection.services}
                  strategy={verticalListSortingStrategy}
                >
                  {priceSection &&
                    priceSection.services.map((price, index) => (
                      <PriceDraggableItem
                        key={clsx(index, price.id, price.title)}
                        {...price}
                        items={price.services}
                      />
                    ))}
                </SortableContext>
              )}
              <DragOverlay>
                {activeItem && (
                  <PriceDraggableItem
                    {...activeItem}
                    items={activeItem.services}
                    isDragOverlay
                  />
                )}
              </DragOverlay>
            </DndContext>
          </div>
        )}

        <div className={classes.button}>
          <AddButton
            onClick={handleAddServiceToPriceSection}
            text="Добавить услугу"
            animated={true}
          />
        </div>

        <input
          type="text"
          placeholder="Примечание для раздела"
          defaultValue={priceSection?.note}
          className={classes.input}
        />
      </div>
    </section>
  );
};
