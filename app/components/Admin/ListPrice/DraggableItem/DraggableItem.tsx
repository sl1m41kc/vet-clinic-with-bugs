'use client';
import { useSortable } from '@dnd-kit/sortable';
import classes from './DraggableItem.module.css';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { EditButton } from '@/app/UI/EditButton/EditButton';
import { IGroupPrice } from '@/app/types/IPrice';

interface IProps {
  price: IGroupPrice;
}

export const DraggableItem = ({ price }: IProps) => {
  const { id, groupTitle, groupDescription } = price;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const style = {
    opacity: isDragging ? 0.3 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={classes.price}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className={classes.listenerContainer} {...listeners} />
      <div className={classes.content}>
        <div className={classes.text}>
          <h1 className={classes.title}>{groupTitle}</h1>
          {groupDescription && <p>{groupDescription}</p>}
        </div>

        <Link
          href={{
            pathname: 'price/form',
            query: { idPrice: id },
          }}
          scroll={false}
        >
          <EditButton />
        </Link>
      </div>
    </div>
  );
};
