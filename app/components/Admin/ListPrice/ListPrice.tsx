'use client';
import classes from './ListPrice.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DraggableItem } from './DraggableItem/DraggableItem';
import { DragOverlayItem } from './DragOverlayItem/DragOverlayItem';
import { handleDragEnd, handleDragStart } from './handle';
import { fetchPrices, fetchSortListPrice } from '@/app/utils/API';
import { IGroupPrice } from '@/app/types/IPrice';
import { Error } from '../../Error/Error';
import { Loading } from '@/app/UI/Loading/Loading';

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
}

interface IFormValues {
  priceList: IGroupPrice[];
}

export const ListPrice = ({ formRef }: IProps) => {
  // Инициализация состояния
  const [isDraggingItem, setIsDraggingItem] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Инициализация формы
  const { getValues, reset, handleSubmit } = useForm<IFormValues>({
    defaultValues: { priceList: [] },
  });

  // Инициализация данных
  useEffect(() => {
    const getPrice = async () => {
      setIsLoading(true);
      const response = await fetchPrices();
      setIsLoading(false);
      if ('error' in response) return setError(response.error);
      reset({ priceList: response });
    };
    getPrice();
  }, []);

  // Обработчик формы
  const onSubmit = async (data: IFormValues) => {
    const idList: string[] = data.priceList.map((item) => item.id);
    const response = await fetchSortListPrice(idList);
    if ('error' in response) return setError(response.error);
    console.log(response)
  };

  // Данные
  const data = getValues().priceList;

  if (error) return <Error text={error} />;
  if (isLoading) return <Loading />;

  return (
    <section className={'container'}>
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
            {data.map((price: IGroupPrice) => (
              <DraggableItem key={price.id} price={price} />
            ))}
          </SortableContext>

          <DragOverlay>
            {isDraggingItem && (
              <DragOverlayItem
                price={
                  data[data.findIndex((price) => price.id === isDraggingItem)]
                }
              />
            )}
          </DragOverlay>
        </DndContext>
      </form>
    </section>
  );
};
