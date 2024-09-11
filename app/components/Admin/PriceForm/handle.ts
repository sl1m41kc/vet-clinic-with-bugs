import { IGroupPrice } from '@/app/types/IPrice';
import { Active, DragEndEvent, DragStartEvent, Over } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Dispatch } from 'react';
import { UseFormGetValues, UseFormReset } from 'react-hook-form';

// Вспомогательная функция
const extractIndex = (item: Active | Over) =>
  Number(String(item?.data.current?.pathToService).split('.').pop());

// Обработчики перетаскивания
export const handleDragStart = (
  event: DragStartEvent,
  setDraggingItemIndex: Dispatch<React.SetStateAction<number | undefined>>
) => {
  const { active } = event;
  const draggingItemIndex = extractIndex(active);
  setDraggingItemIndex(draggingItemIndex);
};

export const handleDragEnd = (
  event: DragEndEvent,
  getValues: UseFormGetValues<IGroupPrice>,
  reset: UseFormReset<IGroupPrice>
) => {
  const { active, over } = event;

  if (over && active.id !== over?.id) {
    const activeIndex = extractIndex(active);
    const overIndex = extractIndex(over);

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
