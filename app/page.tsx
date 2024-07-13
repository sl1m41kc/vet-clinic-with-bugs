import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";

import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GridAdvantages />
    </main>
  );
}
