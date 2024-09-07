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
import { IPriceSection } from '@/app/types/IPrice';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DEFAULT_PRICE_SECTION_DATA } from '@/app/data/priceData';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRICE_API } from '@/app/utils/API';
import { Modal } from '@/app/components/Modal/Modal';
import { DraggableItem } from './DraggableItem/DraggableItem';
import { DragOverlayItem } from './DragOverlayItem/DragOverlayItem';
import { handleDelete, handleDragEnd, handleDragStart } from './handle';

interface IProps {
  formRef: React.RefObject<HTMLFormElement>;
  idPrice?: string;
}

export const PriceForm = ({ idPrice, formRef }: IProps) => {
  // Инициализация роутера для перенаправления
  const router = useRouter();

  // Инициализация стейта для перетаскивания
  const [draggingItemIndex, setDraggingItemIndex] = useState<number>();

  // Инициализация стейта для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Инициализация формы
  const { control, handleSubmit, reset, getValues } = useForm<IPriceSection>();

  // Инициализация начальных данных формы
  useEffect(() => {
    if (!idPrice) return reset(DEFAULT_PRICE_SECTION_DATA);
    PRICE_API.GET_BY_ID(idPrice).then((data) => {
      reset(data);
    });
  }, [idPrice, reset]);

  // Инициализация динамических полей формы (списка services в IPriceService)
  const {
    fields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({
    control,
    name: 'services',
  });

  // Обработчик формы
  const onSubmit = (data: IPriceSection) => {
    if (idPrice) {
      // TODO: Написать запрос на редактирование
    } else {
      PRICE_API.POST(data);
      router.back();
    }
  };

  // Условия
  const isServices = fields.length > 0;

  return (
    <section className="container">
      <form
        className={classes.main}
        // Ссылка на компонент, чтобы в page был доступ к форме и ее могли вызвать при нажатии на "сохранить" в другом компоненте
        ref={formRef}
        // Submit обработчик формы
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Логика кнопки удаления с подтверждением */}
        <DeleteButton onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className={classes.modal}>
            <h3>Вы уверены что хотите безвозвратно удалить ценовую секцию?</h3>
            <button
              onClick={() => handleDelete(router, setIsModalOpen, idPrice)}
              className={classes.buttonDelete}
            >
              Удалить
            </button>
          </div>
        </Modal>

        <div className={classes.inputs}>
          <Controller
            name="title"
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
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                placeholder="Описание раздела"
                className={classes.input}
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
                handleDragEnd(event, getValues, reset, setDraggingItemIndex)
              }
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
                  <DraggableItem
                    id={service.id}
                    key={clsx(index, service.id, service.title + 'item')}
                    control={control}
                    reset={reset}
                    getValues={getValues}
                    pathToService={`services.${index}`}
                    remove={removeService}
                  />
                ))}
              </SortableContext>

              {/* Панель перетаскивания */}
              <DragOverlay>
                {typeof draggingItemIndex === 'number' && (
                  <DragOverlayItem
                    data={fields[draggingItemIndex]}
                    isTopLevelService
                  />
                )}
              </DragOverlay>
            </DndContext>
          </div>
        )}

        <div className={classes.buttonWrapper}>
          <AddButton
            onClick={() => appendService({ id: String(Date.now()), title: '' })}
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
              {...field}
              className={classes.input}
              placeholder="Примечание для раздела"
            />
          )}
        />
      </form>
    </section>
  );
};
