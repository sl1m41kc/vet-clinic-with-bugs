"use client"
import React from "react";
import Masonry from "react-masonry-css";

import { servicesData } from "@/app/data/servicesData";

import ServiceCard from "@/app/components/ServiceCard/ServiceCard";

import classes from "./services.module.css";

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
        columnClassName={classes.column}
      >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            services={service.services}
            hasSVG={service.hasSVG}
            src={service.src}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Services;
