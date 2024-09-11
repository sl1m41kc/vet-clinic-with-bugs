'use client';
import classes from './DragOverlayItem.module.css';
import { EditButton } from '@/app/UI/EditButton/EditButton';
import { IGroupPrice } from '@/app/types/IPrice';

interface IProps {
  price: IGroupPrice;
}

export const DragOverlayItem = ({ price }: IProps) => {
  const { groupTitle: title, groupDescription: description } = price;

  return (
    <div className={classes.price}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        <p>{description}</p>
      </div>

      <EditButton />
    </div>
  );
};
