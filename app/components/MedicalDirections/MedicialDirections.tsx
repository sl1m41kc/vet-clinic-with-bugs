"use client"
import React from "react";
import clsx from "clsx";

import useResize from "@/app/hooks/useResize";

import { medicialDirectionsData } from "@/app/data/medicialDirectionsData";

import MedicialDirection from "@/app/components/MedicialDirection/MedicialDirection";
import MedicalDirectionsSwiper from "@/app/components/MedicialDirectionsSwiper/MedicialDirectionsSwiper";

import classes from "./medicialDirections.module.css";

const MedicialDirections = () => {
  const { width } = useResize()

  if (width <= 850) return <div><MedicalDirectionsSwiper/></div>

  return (
    <div className={clsx(classes.directions, "container")}>
      {medicialDirectionsData.map((direction) => (
        <MedicialDirection
          key={direction.title}
          title={direction.title.toUpperCase()}
          description={direction.description}
        />
      ))}
    </div>
  );
};

export default MedicialDirections;
