import { useState } from "react";

import SaveSVG from "/public/Svg/savings.svg";
import CheckSVG from "/public/Svg/check.svg";

import classes from "./saveButton.module.css";

interface IProps {
  onClick: () => void;
}

export const SaveButton = ({ onClick }: IProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <button
      className={classes.button}
      onClick={async () => {
        setChecked(true);
        setTimeout(() => setChecked(false), 2000);
        onClick();
      }}
    >
      {checked ? (
        <CheckSVG className={classes.svg} />
      ) : (
        <SaveSVG className={classes.svg} />
      )}
      <p>Сохранить</p>
    </button>
  );
};
