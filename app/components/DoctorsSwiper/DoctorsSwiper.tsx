"use client";
import React from "react";
import clsx from "clsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { doctorsData } from "@/app/data/doctorsData";

import DoctorCard from "../DoctorCard/DoctorCard";
import SwiperButtons from "../SwiperButtons/SwiperButtons";

import 'swiper/css';
import classes from './doctorsSwiper.module.css'

const DoctorsSwiper = () => {
  return (
    <div className={clsx('slider', classes.slider)}>
      <Swiper
        slidesPerView='auto'
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          prevEl: ".doctorSwiper-btn-prev",
          nextEl: ".doctorSwiper-btn-next",
        }}
        breakpoints={{
          300: {
            spaceBetween: 10
          },
          768: {
            spaceBetween: 20
          }
        }}
      >
        {doctorsData.map((doctor) => (
          <SwiperSlide key={doctor.fullName} className={classes.swiper_slide}>
            <DoctorCard
              image={doctor.image}
              fullName={doctor.fullName}
              professions={doctor.professions}
              startWork={doctor.startWork}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtons buttons={{
        prev: 'doctorSwiper-btn-prev',
        next: 'doctorSwiper-btn-next'
      }}/>
    </div>
  );
};

export default DoctorsSwiper;
