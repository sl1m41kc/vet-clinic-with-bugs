import React from "react";
import clsx from "clsx";
import { useSwiper } from "swiper/react";

import SwiperArrowSVG from "/public/swiper_arrow.svg";

import classes from "./swiperButtons.module.css";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="container">
      <div className={classes.buttons}>
        <button className={classes.button} onClick={() => swiper.slidePrev()}>
          <SwiperArrowSVG className={clsx(classes.svg, classes.prev)} />
        </button>
        <button className={classes.button} onClick={() => swiper.slideNext()}>
          <SwiperArrowSVG className={classes.svg} />
        </button>
      </div>
    </div>
  );
};

export default SwiperButtons;
