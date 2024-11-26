import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { productDetails, shopproducts, hero } from "@/Data/index";
import Shopmore from "@/Components/Shopmore";
import ShopHero from "@/Components/Shop/ShopHero";
import Shop_hero from "@/Components/Shop_hero";
import Shop_section1 from "@/Components/Shop_section1";
import Related_product from "@/Components/Related_product";

const ProductDetail = ({ params }) => {
  const { productdetail } = params;

  // Locate the `hero` array within the `productDetails` array
  const heroData = productDetails.find((item) => item.hero)?.hero || [];
  const hero1Data = productDetails.find((item) => item.hero1)?.hero1 || [];

  // Find the specific product by `slug`
  const product = heroData.find((prod) => prod.slug === productdetail);
  const product1 = hero1Data.find((prod) => prod.slug === productdetail);



  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="h-screen lg:w-screen sm:w-[1024px] md:w-[1024px] w-[960px]   ">
      <Navbar />
      <Shopmore />
      <ShopHero product={product} product1={product1} />
      <Related_product/>

      <Footer />
    </div>
  );
};

export default ProductDetail;
