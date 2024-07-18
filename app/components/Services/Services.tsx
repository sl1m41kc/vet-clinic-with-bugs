import React from "react";

import { servicesData } from "@/app/data/servicesData";

import ServiceCard from "@/app/components/ServiceCard/ServiceCard";

import classes from "./service.module.css";

const Services = () => {
  return (
    <div className="container">
      <div className={classes.content}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            services={service.services}
            hasSVG={service.hasSVG}
            src={service.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
