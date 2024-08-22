import Title from "@/app/components/Title/Title";
import { DoctorsList } from "@/app/components/DoctorsList/DoctorsList";

export default function Home() {
    return (
      <>
        <Title marginTop={0}/>
        <DoctorsList/>
      </>
    );
  }