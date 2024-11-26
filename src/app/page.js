import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="h-screen lg:w-screen sm:w-[1024px] md:w-[1024px] w-[960px]   ">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
