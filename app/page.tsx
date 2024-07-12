import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";

import GridAdvantages from "./components/GridAdvantages/GridAdvantages";
import "./globals.css";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Hero />
        <GridAdvantages/>
        <div className="h-screen flex items-center justify-center bg-green-100">
          content
        </div>
      </div>
    </main>
  );
}
