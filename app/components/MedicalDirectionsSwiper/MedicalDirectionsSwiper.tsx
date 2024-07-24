import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { medicialDirectionsData } from "@/app/data/medicialDirectionsData";

import MedicialDirection from "@/app/components/MedicalDirection/MedicialDirection";

import "swiper/css";
import classes from './medicalDirectionsSwiper.module.css'

const MedicialDirectionsSwiper = () => {
  return (
    <div className={classes.swiper}>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },

          480: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },

          670: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {medicialDirectionsData.map((direction) => (
          <SwiperSlide key={direction.title}>
            <MedicialDirection
              title={direction.title.toUpperCase()}
              description={direction.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MedicialDirectionsSwiper;
