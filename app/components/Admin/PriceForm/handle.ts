import { IPriceSection } from '@/app/types/IPrice';
import { PRICE_API } from '@/app/utils/API';
import { Active, DragEndEvent, DragStartEvent, Over } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Dispatch, SetStateAction } from 'react';
import { UseFormGetValues, UseFormReset } from 'react-hook-form';

// Обработчик удаления раздела
export const handleDelete = (
  router: AppRouterInstance,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  idPrice?: string
) => {
  if (idPrice) PRICE_API.DELETE(idPrice);
  setIsModalOpen(false);
  document.body.style.overflow = '';
  router.back();
};

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
  getValues: UseFormGetValues<IPriceSection>,
  reset: UseFormReset<IPriceSection>,
  setDraggingItemIndex: Dispatch<React.SetStateAction<number | undefined>>
) => {
  const { active, over } = event;
  setDraggingItemIndex(undefined);

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
