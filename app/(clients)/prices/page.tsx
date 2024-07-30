import Hero from "@/app/components/Hero/Hero";
import Prices from "@/app/components/Prices/Prices";
import PriceTitle from "@/app/components/PriceTitle/PriceTitle";
import Vaccines from "@/app/components/Vaccines/Vaccines";


export default function Home() {
    return (
      <>
        <Hero/>
        <PriceTitle/>
        <Prices/>
        <Vaccines/>
      </>
    );
  }
  