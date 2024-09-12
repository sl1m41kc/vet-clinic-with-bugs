import { StaticImageData } from 'next/image';

interface IDetails {
  workDescription: string;
  outWorkDescription: string;
  doctorAnimalsDescription: string;
}

export interface IDoctorCard {
  id: number;
  image: {
    src: StaticImageData;
    alt: string;
  };
  fullName: string;
  professions: string;
  post?: string;
  startWork: number;
  details: IDetails;
}
