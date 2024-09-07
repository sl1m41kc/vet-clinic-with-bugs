import { PageTemplate } from '@/app/components/PageTemplate/PageTemplate';

import DoctorSVG from '@/public/Svg/doctor.svg';

import { doctorsData } from '@/app/data/doctorsData';

import { DOCTORS_PATH } from '@/app/Сonstants/pathsConsts';

import classes from './specialist.module.css';

export default function Home({
  params: { doctorId },
}: {
  params: { doctorId: number };
}) {
  const currentYear = new Date().getFullYear();

  const experience = currentYear - doctorsData[doctorId].startWork;

  const details = {
    workDescription: doctorsData[doctorId].details.workDescription,
    outWorkDescription: doctorsData[doctorId].details.outWorkDescription,
    doctorAnimalsDescription:
      doctorsData[doctorId].details.doctorAnimalsDescription,
  };
  return (
    <PageTemplate image={`${DOCTORS_PATH}${doctorsData[doctorId].image}.png`}>
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
              В профессии{' '}
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
            <p className={classes.description}>
              {details.doctorAnimalsDescription}
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
