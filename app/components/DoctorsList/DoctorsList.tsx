import clsx from "clsx";

import { doctorsData } from "@/app/data/doctorsData";

import DoctorCard from "../DoctorCard/DoctorCard";

import classes from "./doctorsList.module.css";

export const DoctorsList = () => {
  return (
    <section className={clsx("container", classes.list)}>
      {doctorsData.map((doctor, index) => (
        <DoctorCard
          key={clsx(index, doctor.fullName)}
          image={doctor.image}
          fullName={doctor.fullName}
          professions={doctor.professions}
          startWork={doctor.startWork}
          alt={doctor.alt} id={doctor.id} details={[]}        />
      ))}
    </section>
  );
};
