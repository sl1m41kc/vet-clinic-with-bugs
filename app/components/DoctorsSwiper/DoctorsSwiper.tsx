"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { doctorsData } from "@/app/data/doctorsData";

import DoctorCard from "../DoctorCard/DoctorCard";
import SwiperButtons from "../SwiperButtons/SwiperButtons";
import ArrowButton from "@/app/UI/ArrowButton/ArrowButton";

import "swiper/css";
import classes from "./doctorsSwiper.module.css";

const DoctorsSwiper = () => {
  const topDoctors =
    doctorsData.length > 8 ? doctorsData.slice(0, 8) : doctorsData;
  return (
    <section className={classes.slider}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          prevEl: ".doctorSwiper-btn-prev",
          nextEl: ".doctorSwiper-btn-next",
        }}
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 20,
          },
        }}
      >
        {topDoctors.map((doctor, index) => (
          <SwiperSlide
            key={clsx(index, doctor.fullName)}
            className={classes.swiper_slide}
          >
            <DoctorCard
              id={doctor.id}
              image={doctor.image}
              fullName={doctor.fullName}
              professions={doctor.professions}
              startWork={doctor.startWork}
              alt={doctor.alt}
              details={{ workDescription: '', outWorkDescription: '', doctorAnimalsDescription: '' }}
            />
          </SwiperSlide>
        ))}

        {doctorsData.length > 8 && (
          <SwiperSlide className={classes.swiper_slide}>
            <Link href="/specialists" className={classes.linkCard}>
              <ArrowButton text="Все врачи" isFill={true} />
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
      <SwiperButtons
        buttons={{
          prev: "doctorSwiper-btn-prev",
          next: "doctorSwiper-btn-next",
        }}
      />
    </section>
  );
};

export default DoctorsSwiper;
