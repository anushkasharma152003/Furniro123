import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
<section>
  <div className="h-[100px] flex justify-center items-center">
    <div className="h-[41px] w-[1286px]  flex justify-between ">
      <div className="flex  h-[41px] w-[185px] items-center justify-center">
         <div><img src="/logo1.png" alt="" className="h-[32px] w-[50px]" /></div>
         <div><h1 className="text-[34px] font-bold leading-auto ">Furniro</h1></div>
      </div>
       <div >
        <ul className="flex gap-[75px] items-center justify-center pt-[8px]">
            <li className="text-base font-medium"><Link href="/">Home</Link></li>
            <li className="text-base font-medium"><Link href="/shop">Shop</Link></li>
            <li className="text-base font-medium"> <Link href="/about">About</Link></li>
            <li className="text-base font-medium"> <Link href="/contact">Contact</Link></li>
        </ul>
       </div>
       
       <div>
        <ul className="flex justify-center items-center gap-[45px] pt-[8px]">
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
