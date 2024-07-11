import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Hero />
        <div className="h-screen flex items-center justify-center bg-green-100">
          content
        </div>
        <div className="h-screen flex items-center justify-center bg-green-100">
          content
        </div>
      </div>
    </main>
  );
}
