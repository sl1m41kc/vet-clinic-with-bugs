"use client"
import React from "react";
import clsx from "clsx";
import Masonry from "react-masonry-css";

import ServiceCard from "@/app/components/ServiceCard/ServiceCard";

import classes from "./services.module.css";
import { servicesData } from "@/app/data/servicesData";

const Services = () => {
  return (
    <div className="container">
      <Masonry
        breakpointCols={{
          default: 3,
          1230: 2,
          768: 1 
        }}
        className={classes.grid}
      >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={clsx(index, service.title)}
            title={service.title}
            services={service.services}
            SVG={service.SVG}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Services;
