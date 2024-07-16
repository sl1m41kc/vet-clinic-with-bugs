import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import Advatages from "@/app/components/Advantages/Advantages";
import Title from "@/app/components/Title/Title";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GridAdvantages />
      <Advatages/>
      <Title/>
    </main>
  );
}
