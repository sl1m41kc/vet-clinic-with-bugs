import { Suspense } from "react";
import Hero from "@/app/components/Hero/Hero";
import Prices from "@/app/components/Prices/Prices";
import PriceTitle from "@/app/components/PriceTitle/PriceTitle";
import Vaccines from "@/app/components/Vaccines/Vaccines";
import Loading from "@/app/UI/Loading/Loading";

export default function Home() {
  return (
    <>
      <Hero />
      <PriceTitle />
      <Suspense fallback={<Loading/>}>
        <Prices />
      </Suspense>
      <Vaccines />
    </>
  );
}
