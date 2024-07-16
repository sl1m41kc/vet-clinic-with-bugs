"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { advantagesData } from "@/app/data/advantagesData";

import AdvantagesCard from "@/app/components/AdvantagesCard/AdvantagesCard";

import "swiper/swiper-bundle.css";

const AdvantagesSwiper = () => {
  return (
    <div className="slider">
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },

          600: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
      >
        {advantagesData.map((card) => (
          <SwiperSlide key={card.title}>
            <AdvantagesCard
              title={card.title}
              description={card.description}
              changeColor={card.changeColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvantagesSwiper;
