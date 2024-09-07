import {
  Control,
  UseFormReset,
  UseFormGetValues,
  UseFieldArrayRemove,
  FieldValues,
  useFieldArray,
  Controller,
  FieldPath,
  ArrayPath,
  Path,
} from 'react-hook-form';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable';
import { IPrice } from '@/app/types/IPrice';
import clsx from 'clsx';
import classes from './DraggableItem.module.css';
import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';
import { MoveButton } from '@/app/UI/MoveButton/MoveButton';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import { AddButton } from '@/app/UI/AddButton/AddButton';

interface IProps<T extends FieldValues> {
  control: Control<T>; // Тип Control из react-hook-form
  pathToService: FieldPath<T>; // Путь к сервису, тип FieldPath<T>
  id: string; // Идентификатор, строка
  reset?: UseFormReset<T>; // Функция сброса формы из react-hook-form
  getValues?: UseFormGetValues<T>; // Функция получения значений формы из react-hook-form
  remove: UseFieldArrayRemove; // Функция удаления элемента из массива
  isDragOverlay?: boolean; // Флаг, указывающий, является ли элемент поверхностным при перетаскивании
}

export const DraggableItem = <T extends FieldValues>({
  control,
  id,
  reset,
  getValues,
  pathToService,
  remove,
  isDragOverlay,
}: IProps<T>) => {
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
    },
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isTopLevelService = pathToService.split('.').length === 2;
  const indexInGroup = Number(pathToService.split('.').pop());

  const {
    fields,
    append: appendNestedService,
    remove: removeNestedService,
  } = useFieldArray({
    control,
    name: `${pathToService}.services` as ArrayPath<T>,
  });

  const isGroup = fields.length > 0;

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = Number(
        String(active.data.current?.pathToService).split('.').pop()
      );
      const overIndex = Number(
        String(over?.data.current?.pathToService).split('.').pop()
      );

      if (activeIndex >= 0 && overIndex >= 0 && getValues) {
        const newServices = arrayMove(
          getValues().services[indexInGroup].services,
          activeIndex,
          overIndex
        );
        if (reset) {
          reset({
            ...getValues(),
            services: getValues().services.map(
              (service: IPrice, index: number) =>
                index === indexInGroup
                  ? { ...service, services: newServices }
                  : service
            ),
          });
        }
      }
    }
  };

  return (
    <div
      className={clsx(classes.service, !isTopLevelService && classes.inner)}
      style={style}
      ref={setNodeRef}
      {...attributes}
    >
      <div className={classes.content}>
        <div className={classes.actions}>
          <DeleteButton onClick={() => remove(indexInGroup)} />
          <MoveButton listeners={listeners} />
        </div>

        <div className={classes.inputs}>
          <div className={classes.text}>
            <Controller
              name={`${pathToService}.title` as Path<T>}
              control={control}
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
              name={`${pathToService}.description` as Path<T>}
              control={control}
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
                name={`${pathToService}.price` as Path<T>}
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
            id={'DndContextPriceDraggableItem' + pathToService}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext items={fields.map((field) => field.id)}>
              {fields.map((price, index: number) => (
                <DraggableItem
                  id={price.id}
                  key={clsx(index, price.id, 'nestedPrice')}
                  control={control}
                  pathToService={
                    `${pathToService}.services.${index}` as Path<T>
                  }
                  remove={removeNestedService}
                />
              ))}
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
