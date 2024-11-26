import React from "react";
import Shop_card from "./Shop_card";
import { shopproducts } from "../Data";
import Link from "next/link";

const Shop_section1 = () => {
  return (
    <div className="px-[102px] pt-[23px] lg:w-screen sm:w-[1024px] md:w-[1204px] w-[960px]   ">
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-[30px]  pt-[40px]">
        {shopproducts.map((product) => (
          <Link href={`/shop/${product?.slug}`} key={product.id}>
            <Shop_card key={product.id} product={product} />
          </Link>
        ))}
      </div>

      <div>
        <ul className="flex gap-[38px] justify-center pt-[70px] pb-[85px]">
          <li className="w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl">
            1
          </li>
          <li className="w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl">
            2
          </li>
          <li className="w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl">
            3
          </li>
          <li className="w-[98px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl">
            Next
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop_section1;
