import React from "react";
import Navbar from "../../Components/Navbar";
import About_hero from "../../Components/About_hero";
import Whyme from "../../Components/Whyme";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div className="h-screen lg:w-screen sm:w-[1024px] md:w-[1024px] w-[960px]   ">
      <Navbar />
      <About_hero />
      <Whyme />
      <Footer />
    </div>
  );
};

export default About;
