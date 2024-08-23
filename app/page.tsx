"use client";
import Hero from "@/app/components/Hero/Hero";
import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import Advantages from "@/app/components/Advantages/Advantages";
import Title from "@/app/components/Title/Title";
import MedicialDirections from "./components/MedicalDirections/MedicalDirections";
import DoctorsSwiper from "./components/DoctorsSwiper/DoctorsSwiper";
import Services from "./components/Services/Services";
import useResize from "./hooks/useResize";

export default function Home() {
  const { width } = useResize();
  return (
    <>
      <Hero />
      <GridAdvantages />
      <Advantages />
      <Title marginTop={width > 768 ? 150 : 60}/>
      <MedicialDirections />
      <DoctorsSwiper/>
      <Title marginTop={width > 768 ? 150 : 60}/>
      <Services/>
    </>
  );
}