import clsx from 'clsx';
import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';
import classes from './DragOverlayPriceOption.module.css';
import { useSortable } from '@dnd-kit/sortable';
import { IPriceOption } from '@/app/types/IPrice';

interface IProps {
  data: IPriceOption;
  pathToService: string;
}

export const DragOverlayPriceOption = ({ data, pathToService }: IProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: pathToService,
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: `${
      transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ''
    }`,
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={clsx(classes.service, classes.inner)}
    >
      <div className={classes.listenerContainer} />
      <div className={classes.content}>
        <DeleteButton />

        <div className={classes.inputs}>
          <div className={classes.text}>
            <input
              type="text"
              value={data.optionTitle}
              placeholder="Название услуги"
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Описание услуги"
              value={data.optionDescription || ''}
              className={classes.input}
            />
          </div>

          <div className={classes.price}>
            <input
              type="number"
              placeholder="Цена"
              value={data.optionPrice || 0}
              className={classes.input}
            />
            <span className={classes.currency}>₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};
