import Hero from "@/app/components/Hero/Hero";
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
      <Title marginTop={150} marginTopMobile={60}>
        Наша цель&nbsp;&mdash; обеспечить{" "}
        <span>индивидуальный уход, гарантируя каждому питомцу</span> необходимое
        внимание с&nbsp;учетом его возраста и&nbsp;состояния здоровья.
      </Title>
      <MedicialDirections />
      <DoctorsSwiper />
      <Title marginTop={150} marginTopMobile={60}>
        Наша цель&nbsp;&mdash; обеспечить{" "}
        <span>индивидуальный уход, гарантируя каждому питомцу</span> необходимое
        внимание с&nbsp;учетом его возраста и&nbsp;состояния здоровья.
      </Title>
      <Services />
    </>
  );
}
