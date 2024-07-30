import Hero from "@/app/components/Hero/hero";
import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import Advantages from "@/app/components/Advantages/Advantages";
import Title from "@/app/components/Title/Title";
import MedicialDirections from "./components/MedicalDirections/MedicalDirections";
import DoctorsSwiper from "./components/DoctorsSwiper/DoctorsSwiper";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <GridAdvantages />
      <Advantages />
      <Title />
      <MedicialDirections />
      <DoctorsSwiper/>
      <Title/>
      <Services/>
    </>
  );
}