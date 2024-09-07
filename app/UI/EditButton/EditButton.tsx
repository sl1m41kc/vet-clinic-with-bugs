import EditSVG from '/public/Svg/edit.svg';

import classes from './EditButton.module.css';

interface IProps {
  onClick?: () => void;
}

export const EditButton = ({ onClick }: IProps) => {
  return (
    <button className={classes.button} onClick={async () => onClick}>
      <EditSVG className={classes.svg} />
    </button>
  );
};
