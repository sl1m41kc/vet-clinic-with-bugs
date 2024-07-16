"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { doctorsData } from "@/app/data/doctorsData";

import DoctorCard from "../DoctorCard/DoctorCard";
import SwiperButtons from "../SwiperButtons/SwiperButtons";

const DoctorsSwiper = () => {
  return (
    <div className="slider">
      <Swiper slidesPerView={3.5} spaceBetween={20}>
        {doctorsData.map((doctor) => (
          <SwiperSlide key={doctor.fullName}>
            <DoctorCard
              image={doctor.image}
              fullName={doctor.fullName}
              professions={doctor.professions}
              startWork={doctor.startWork}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtons/>
    </div>
  );
};

export default DoctorsSwiper;
