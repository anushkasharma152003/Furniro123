import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";

export default function Home() {
  return (
    <main className="h-screen ">
      <Navbar />
      <Hero />
      <Section1/>
      <Section2/>
    </main>
  );
}
