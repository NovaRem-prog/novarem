import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Advantages from "@/components/home/Advantages";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Advantages />
        <Portfolio />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}