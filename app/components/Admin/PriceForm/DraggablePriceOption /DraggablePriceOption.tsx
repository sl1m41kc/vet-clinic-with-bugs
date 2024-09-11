import {
  Control,
  UseFieldArrayRemove,
  FieldValues,
  Controller,
  FieldPath,
  Path,
} from 'react-hook-form';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import clsx from 'clsx';
import classes from './DraggablePriceOption.module.css';
import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';
import { MoveButton } from '@/app/UI/MoveButton/MoveButton';

interface IProps<T extends FieldValues> {
  id: string;
  control: Control<T>; // Тип Control из react-hook-form
  pathToService: FieldPath<T>; // Путь к сервису, тип FieldPath<T>
  remove: UseFieldArrayRemove; // Функция удаления элемента из массива
}

export const DraggablePriceOption = <T extends FieldValues>({
  id,
  control,
  pathToService,
  remove,
}: IProps<T>) => {
  const indexInGroup = Number(pathToService.split('.').pop());
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

  const isTopLevelService = false;
  const isGroup = false;

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
              name={`${pathToService}.optionTitle` as Path<T>}
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
              name={`${pathToService}.optionDescription` as Path<T>}
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
                name={`${pathToService}.optionPrice` as Path<T>}
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    placeholder="Цена"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : '')} // Парсинг значения как числа
                    className={classes.input}
                  />
                )}
              />
              <span className={classes.currency}>₽</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
