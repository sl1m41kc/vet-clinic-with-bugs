import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import Advantages from "@/app/components/Advantages/Advantages";
import Title from "@/app/components/Title/Title";
import MedicialDirections from "./components/MedicalDirections/MedicalDirections";
import DoctorsSwiper from "./components/DoctorsSwiper/DoctorsSwiper";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GridAdvantages />
      <Advantages />
      <Title />
      <MedicialDirections />
      <DoctorsSwiper/>
      <Title/>
    </main>
  );
}
