import { Suspense } from "react";
import Hero from "@/app/components/Hero/Hero";
import Prices from "@/app/components/Prices/Prices";
import PriceTitle from "@/app/components/PriceTitle/PriceTitle";
import Vaccines from "@/app/components/Vaccines/Vaccines";
import { PriceLoading } from "@/app/UI/PriceLoading/PriceLoading";

export default function Home() {
  return (
    <>
      <Hero />
      <PriceTitle>
        Ветеринарная клиника &laquo;Ветлекарь&raquo; предоставляет широкий
        спектр услуг. В&nbsp;данном разделе вы можете ознакомиться с&nbsp;нашими
        расценками и&nbsp;узнать стоимость консультаций у&nbsp;наших
        специалистов.
      </PriceTitle>
      <Suspense fallback={<PriceLoading />}>
        <Prices />
      </Suspense>
      <Vaccines />
    </>
  );
}
