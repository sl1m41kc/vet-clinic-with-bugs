import { IGroupPrice } from '@/app/types/IPrice';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Dispatch, SetStateAction } from 'react';
import { UseFormGetValues, UseFormReset } from 'react-hook-form';

// Обработчики перетаскивания
export const handleDragStart = (
  { active }: DragStartEvent,
  setIsDraggingItem: Dispatch<SetStateAction<string | undefined>>
) => {
  setIsDraggingItem(String(active.id));
};

export const handleDragEnd = (
  { active, over }: DragEndEvent,
  getValues: UseFormGetValues<{ priceList: IGroupPrice[] }>,
  reset: UseFormReset<{ priceList: IGroupPrice[] }>,
  setIsDraggingItem: Dispatch<SetStateAction<string | undefined>>
) => {
  setIsDraggingItem(undefined);
  const data = getValues().priceList;

  if (active.id !== over?.id) {
    const activeIndex = data.findIndex(
      (section: IGroupPrice) => section.id === active.id
    );
    const overIndex = data.findIndex(
      (section: IGroupPrice) => section.id === over?.id
    );
    reset({
      priceList: arrayMove(data, activeIndex, overIndex),
    });
  }
};
