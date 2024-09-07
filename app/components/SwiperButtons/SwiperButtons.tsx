import React from 'react';
import clsx from 'clsx';

import SwiperArrowSVG from '/public/Svg/swiper_arrow.svg';

import classes from './swiperButtons.module.css';

interface IProps {
  buttons: {
    prev: string;
    next: string;
  };
}

const SwiperButtons = ({ buttons }: IProps) => {
  return (
    <div className="container">
      <div className={classes.buttons}>
        <button className={clsx(classes.button, buttons.prev)}>
          <SwiperArrowSVG className={clsx(classes.svg, classes.prev)} />
        </button>
        <button className={clsx(classes.button, buttons.next)}>
          <SwiperArrowSVG className={classes.svg} />
        </button>
      </div>
    </div>
  );
};

export default SwiperButtons;
