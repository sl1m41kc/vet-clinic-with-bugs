import clsx from "clsx";

import PlusSVG from "/public/Svg/close.svg";

import classes from "./addButton.module.css";

interface IProps {
  text: string;
  onClick?: () => void;
  animated?: boolean;
}

export const AddButton = ({ text, onClick, animated }: IProps) => {
  return (
    <button className={clsx(classes.button, animated && classes.animated) } onClick={onClick} >
      <PlusSVG className={classes.svg} />
      {animated ? (
        <div className={classes.inner}>
          <p className={classes.text}>{text}</p>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </button>
  );
};
