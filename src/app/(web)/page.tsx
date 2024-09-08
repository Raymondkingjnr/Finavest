import Banner from "@/components/Banner/Banner";
import Btc from "@/components/Btc/Btc";
import Testtimonials from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";
import Offer from "@/components/Offer/Offer";
import Packages from "@/components/Packages/Packages";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <Btc />
      <Banner />
      <Offer />
      <Packages />
      <Testtimonials />
    </main>
  );
}
