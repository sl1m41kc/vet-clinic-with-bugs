'use client';
import clsx from 'clsx';
import { AddButton } from '@/app/UI/AddButton/AddButton';
import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';
import classes from './PriceForm.module.css';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { IGroupPrice } from '@/app/types/IPrice';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  fetchCreatePrice,
  fetchDeletePrice,
  fetchPriceById,
  fetchUpdatePrice,
} from '@/app/utils/API';
import { Modal } from '@/app/components/Modal/Modal';
import { handleDragEnd, handleDragStart } from './handle';
import { Loading } from '@/app/UI/Loading/Loading';
import { Error } from '@/app/components/Error/Error';
import { DraggableService } from './DraggableService/DraggableService';
import { DragOverlayService } from './DragOverlayService/DragOverlayService';

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
  idPrice?: string;
}

export const PriceForm = ({ idPrice, formRef }: IProps) => {
  // Инициализация роутера для перенаправления
  const router = useRouter();

  // Инициализация стейта для перетаскивания
  const [draggingItemIndex, setDraggingItemIndex] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Инициализация формы
  const { control, handleSubmit, reset, getValues } = useForm<IGroupPrice>();

  // Инициализация динамических полей формы (списка services в IGroupPrice)
  const {
    fields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({
    control,
    name: 'services',
  });

  // Инициализация начальных данных формы
  useEffect(() => {
    const getPrice = async () => {
      if (!idPrice) return;
      setIsLoading(true);
      const response = await fetchPriceById(idPrice);
      setIsLoading(false);
      if ('error' in response) return setError(response.error);
      reset(response);
    };
    getPrice();
  }, [idPrice, reset]);

  // Обработчик формы
  const onSubmit = async (data: IGroupPrice) => {
    if (idPrice) {
      const response = await fetchUpdatePrice(idPrice, data);
      console.log(data, response)
      if (response.error) return setError(response.error);
    } else {
      const response = await fetchCreatePrice(data);
      if (response.error) return setError(response.error);
    }
    router.back();
  };

  // Обработчик удаления раздела
  const handleDelete = async (idPrice?: string) => {
    if (idPrice) {
      const response = await fetchDeletePrice(idPrice);
      if (response.error) return setError(response.error);
    }
    setIsModalOpen(false);
    document.body.style.overflow = '';
    reset({ services: [] });
    router.back();
  };

  // Условия
  const isServices = fields.length > 0;

  if (error) return <Error text={error} />;
  if (isLoading) return <Loading />;

  return (
    <section className="container">
      <form
        className={classes.main}
        // Ссылка на компонент, чтобы в page был доступ к форме и ее могли вызвать при нажатии на "сохранить" в другом компоненте
        ref={formRef}
        // Submit обработчик формы
        onSubmit={handleSubmit(onSubmit)}
      >
        <DeleteButton onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className={classes.modal}>
            <h3>Вы уверены что хотите безвозвратно удалить ценовую секцию?</h3>
            <button
              onClick={() => handleDelete(idPrice)}
              className={classes.buttonDelete}
            >
              Удалить
            </button>
          </div>
        </Modal>

        <div className={classes.inputs}>
          <Controller
            name="groupTitle"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="Название раздела"
                className={clsx(classes.input, classes.title)}
              />
            )}
          />
          <Controller
            name="groupDescription"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="Описание раздела"
                className={classes.input}
                value={field.value ?? ''} // Преобразование null в пустую строку
              />
            )}
          />
        </div>

        {isServices && (
          <div className={classes.listServices}>
            <DndContext
              onDragStart={(event: DragStartEvent) =>
                handleDragStart(event, setDraggingItemIndex)
              }
              onDragEnd={(event: DragEndEvent) =>
                handleDragEnd(event, getValues, reset)
              }
              onDragCancel={() => setDraggingItemIndex(undefined)}
              // Настройки перетаскивания:
              // restrictToVerticalAxis - ограничивает перетаскивание только по вертикали
              // restrictToParentElement - ограничивает перетаскивание только внутри контейнера
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            >
              <SortableContext
                // Передаем список динамических полей в контекст
                items={fields}
                // Стратегия сортировки - вертикальная
                strategy={verticalListSortingStrategy}
              >
                {fields.map((service, index) => (
                  <DraggableService
                    id={service.id}
                    key={service.id}
                    control={control}
                    reset={reset}
                    getValues={getValues}
                    pathToService={`services.${index}`}
                    remove={removeService}
                  />
                ))}
              </SortableContext>

              <DragOverlay>
                {typeof draggingItemIndex === 'number' && (
                  <DragOverlayService data={fields[draggingItemIndex]} />
                )}
              </DragOverlay>
            </DndContext>
          </div>
        )}

        <div className={classes.buttonWrapper}>
          <AddButton
            onClick={() =>
              appendService({
                priceOptions: [],
                serviceTitle: '',
                serviceDescription: '',
                servicePrice: 0,
              })
            }
            text="Добавить услугу"
            animated={true}
          />
        </div>

        <Controller
          name="groupNote"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={classes.input}
              placeholder="Примечание для раздела"
              value={field.value ?? ''} // Преобразование null в пустую строку
            />
          )}
        />
      </form>
    </section>
  );
};
