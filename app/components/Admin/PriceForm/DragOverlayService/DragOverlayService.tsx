import { DeleteButton } from '@/app/UI/DeleteButton/DeleteButton';
import classes from './DragOverlayService.module.css';
import { useSortable } from '@dnd-kit/sortable';
import { IService } from '@/app/types/IPrice';

interface IProps {
  data: IService;
  isTopLevelService?: boolean;
  pathToService?: string;
}

export const DragOverlayService = ({ data }: IProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: data.serviceTitle,
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: `${
      transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ''
    }`,
    transition,
  };

  const isGroup = data.priceOptions && data.priceOptions.length > 0;

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={classes.service}
    >
      <div className={classes.listenerContainer} />
      <div className={classes.content}>
        <DeleteButton />

        <div className={classes.inputs}>
          <div className={classes.text}>
            <input
              type="text"
              value={data.serviceTitle}
              placeholder="Название услуги"
              className={classes.input}
            />
            <input
              type="text"
              placeholder="Описание услуги"
              value={data.serviceDescription || ''}
              className={classes.input}
            />
          </div>

          {!isGroup && (
            <div className={classes.price}>
              <input
                type="number"
                placeholder="Цена"
                value={data.servicePrice || 0}
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
