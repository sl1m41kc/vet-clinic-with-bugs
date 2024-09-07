import DeleteSVG from '/public/Svg/delete.svg';

import classes from './deleteButton.module.css';

interface IProps {
  onClick?: () => void;
}

export const DeleteButton = ({ onClick }: IProps) => {
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <DeleteSVG className={classes.svg} />
    </button>
  );
};
