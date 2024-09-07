import clsx from 'clsx';

import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';

import classes from './DragOverlayItem.module.css';
import { IPrice } from '@/app/types/IPrice';
import { useSortable } from '@dnd-kit/sortable';

interface IProps {
  data: IPrice;
  isTopLevelService?: boolean;
  pathToService?: string;
}

export const DragOverlayItem = ({
  data,
  isTopLevelService,
  pathToService,
}: IProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: data.id,
    data: { pathToService },
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: `${
      transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ''
    }`,
    transition,
  };

  const isGroup = data.services && data.services.length > 0;

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={clsx(classes.service, !isTopLevelService && classes.inner)}
    >
      <div className={classes.listenerContainer} />
      <div className={classes.content}>
        <DeleteButton />

        <div className={classes.inputs}>
          <div className={classes.text}>
            <input
              type="text"
              value={data.title}
              placeholder="Название услуги"
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Описание услуги"
              value={data.description}
              className={classes.input}
            />
          </div>

          {!isGroup && (
            <div className={classes.price}>
              <input
                type="number"
                placeholder="Цена"
                value={data.price}
                className={classes.input}
              />
              <span className={classes.currency}>₽</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
