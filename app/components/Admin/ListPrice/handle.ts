import { IPriceSection } from '@/app/types/IPrice';
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
  getValues: UseFormGetValues<{ priceSections: IPriceSection[] }>,
  reset: UseFormReset<{ priceSections: IPriceSection[] }>,
  setIsDraggingItem: Dispatch<SetStateAction<string | undefined>>
) => {
  setIsDraggingItem(undefined);
  const data = getValues().priceSections;

  if (active.id !== over?.id) {
    const activeIndex = data.findIndex(
      (section: IPriceSection) => section.id === active.id
    );
    const overIndex = data.findIndex(
      (section: IPriceSection) => section.id === over?.id
    );
    reset({
      priceSections: arrayMove(data, activeIndex, overIndex),
    });
  }
};
