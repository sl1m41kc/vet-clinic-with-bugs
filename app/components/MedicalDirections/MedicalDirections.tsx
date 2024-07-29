"use client"
import React from "react";
import clsx from "clsx";

import useResize from "@/app/hooks/useResize";

import { medicialDirectionsData } from "@/app/data/medicialDirectionsData";

import MedicialDirection from "@/app/components/MedicalDirection/MedicialDirection";
import MedicalDirectionsSwiper from "@/app/components/MedicalDirectionsSwiper/MedicalDirectionsSwiper";

import classes from "./medicalDirections.module.css";

const MedicialDirections = () => {
  const { width } = useResize()

  if (width <= 850) return <MedicalDirectionsSwiper/>

  return (
    <section className={clsx(classes.directions, "container")}>
      {medicialDirectionsData.map((direction) => (
        <MedicialDirection
          key={direction.title}
          title={direction.title.toUpperCase()}
          description={direction.description}
        />
      ))}
    </section>
  );
};

export default MedicialDirections;
