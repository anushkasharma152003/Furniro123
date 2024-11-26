import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
<section className="  lg:w-screen sm:w-[1024px] md:w-[1124px]  w-[960px]   " >
  <div className="h-[100px]  flex  justify-center items-center sm:w-[1024px]  md:w-[1024px] lg:w-screen w-[840px] ">
    <div className="lg:h-[41px] lg:w-[1286px] md:h-[41px]  sm:h-[41px] sm:w-[800px] h-[41px] w-[770px]  flex justify-between  ">
      <div className="flex  h-[41px] w-[185px] items-center justify-center">
         <div><img src="/logo1.png" alt="" className="lg:h-[32px] lg:w-[50px] sm:h-[22px] sm:w-[30px] h-[12px] w-[20px]" /></div>
         <div><h1 className="lg:text-[34px] sm:text-[24px] text-[16px] font-bold leading-auto ">Furniro</h1></div>
      </div>
       <div >
        <ul className="flex lg:gap-[75px] md:gap-[40px] sm:gap-[35px] gap-[25px]  items-center justify-center pt-[8px]">
            <li className="text-base font-medium"><Link href="/">Home</Link></li>
            <li className="text-base font-medium"><Link href="/shop">Shop</Link></li>
            <li className="text-base font-medium"><Link href="/about">Blog</Link></li>
            <li className="text-base font-medium"><Link href="/contact">Contact</Link></li>
        </ul>
       </div>
       
       <div>
        <ul className="flex justify-center items-center lg:gap-[45px] sm:gap-[20px] md:gap-[30px] gap-[15px] pt-[8px]">
          <li><i><img src="/icon4.png" alt="" className="w-[28px] h-[28px]"/></i></li>
          <li><i><img src="/icon3.png" alt="" className="w-[28px] h-[28px]"/></i></li>
          <li><i><img src="/icon2.png" alt="" className="w-[28px] h-[28px]"/></i></li>
          <li><i><img src="/icon1.png" alt="" className="w-[28px] h-[28px]"/></i></li>
        </ul>
       </div>
    </div>
  </div>
</section>
  );
};

export default Navbar;
