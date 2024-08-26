import Title from "@/app/components/Title/Title";
import { DoctorsList } from "@/app/components/DoctorsList/DoctorsList";

export default function Home() {
  return (
    <>
      <Title marginTop={0} marginTopMobile={0}>
        Наша цель&nbsp;&mdash; обеспечить{" "}
        <span>индивидуальный уход, гарантируя каждому питомцу</span> необходимое
        внимание с&nbsp;учетом его возраста и&nbsp;состояния здоровья.
      </Title>
      <DoctorsList />
    </>
  );
}