import Header from "./components/header/header";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <div className="h-screen flex items-center justify-center bg-green-100">content</div>
      <div className="h-screen flex items-center justify-center bg-green-100">content</div>
    </main>
  );
}