import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";
import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import Advatages from "./components/Advantages/Advantages";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GridAdvantages />
      <Advatages/>
    </main>
  );
}
