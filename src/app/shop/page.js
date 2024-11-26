import React from "react";
import Navbar from "../../Components/Navbar";
import Shop_hero from "../../Components/Shop_hero";
import Shop_section1 from "../../Components/Shop_section1";
import Whyme from "../../Components/Whyme";
import Footer from "../../Components/Footer";

const Shop = () => {
  return (
    <div className="h-screen lg:w-screen sm:w-[1024px] md:w-[1024px] w-[960px]     ">
      <Navbar />
      <Shop_hero />
      <Shop_section1 />
      <Whyme />
      <Footer />
    </div>
  );
};

export default Shop;
