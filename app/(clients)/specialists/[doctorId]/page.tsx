import clsx from "clsx";
import Image from "next/image";

import DoctorSVG from "@/public/Svg/doctor.svg";

import { doctorsData } from "@/app/data/doctorsData";

import { DOCTORS_PATH } from "@/app/Сonstants/pathsConsts";

import classes from "./specialist.module.css";

export default function Home({ params: { doctorId } }: any) {
  let currentYear = new Date().getFullYear();

  let experience = currentYear - doctorsData[doctorId].startWork;

  let details = {
    workDescription: doctorsData[doctorId].details.workDescription,
    outWorkDescription: doctorsData[doctorId].details.outWorkDescription,
    doctorAnimalsDescription: doctorsData[doctorId].details.doctorAnimalsDescription,
  }
  return (
    <section className={clsx("container", classes.content)}>
      <div>
        <Image
          src={`${DOCTORS_PATH}${doctorsData[doctorId].image}.png`}
          alt={doctorsData[doctorId].alt}
          width={500}
          height={500}
          className={classes.image}
        />
      </div>
        <div className={classes.info}>
          <div className={classes.specialist}>
            {doctorsData[doctorId].post && (
              <h1 className={classes.post}>{doctorsData[doctorId].post}</h1>
            )}
            <div className={classes.doctor}>
              <h1 className={classes.fullName}>
                {doctorsData[doctorId].fullName}
              </h1>
              <p className={classes.professions}>
                {doctorsData[doctorId].professions}
              </p>
            </div>
            {experience > 2 && (
              <p className={classes.description}>
                В профессии{" "}
                <span className={classes.experience}>{experience}</span> лет
              </p>
            )}
            <DoctorSVG className={classes.svg} />
          </div>
          <div className={classes.details}>
            <div className={classes.detail}>
              <h1 className={classes.title}>Работа</h1>
              <p className={classes.description}>{details.workDescription}</p>
            </div>
            <div className={classes.detail}>
              <h1 className={classes.title}>Вне работы</h1>
              <p className={classes.description}>{details.outWorkDescription}</p>
            </div>
            <div className={classes.detail}>
              <h1 className={classes.title}>Животные доктора</h1>
              <p className={classes.description}>{details.doctorAnimalsDescription}</p>
            </div>
          </div>
        </div>
    </section>
  );
}