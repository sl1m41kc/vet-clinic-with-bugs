interface IDetails {
  workDescription: string;
  outWorkDescription: string;
  doctorAnimalsDescription: string;
}

export interface IDoctorCard {
  id: number;
  image: string;
  fullName: string;
  professions: string;
  post?: string;
  startWork: number;
  alt: string;

  details: IDetails;
}
