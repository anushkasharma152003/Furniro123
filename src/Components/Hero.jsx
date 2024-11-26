import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
 <section className=''>
    <div className=' object-cover lg:w-screen sm:w-[1024px] md:w-[1124px]  w-[960px] relative '>
        <img src="/bg1.png" className=' sm:h-[716px] lg:w-screen sm:w-[1024px] md:w-[1424px]  w-[960px]  relative ' alt="" />
    </div>
    <div className='bg-[#FFF3E3] md:w-[643px] md:h-[443px]  h-[330px]  w-[400px] absolute lg:top-[253px]  lg:left-[741px] 2xl:left-[800px]   left-[500px] sm:left-[600px] md:left-[480px] right-[45px] sm:top-[200px]  top-[150px]  pt-[62px] pr-[43px] pl-[39px] md:pb-[37px] '>
        <div className=' '>
            <div className='h-[24px]'><h2 className='md:text-base text-[12px] md:font-medium font-normal tracking-[3px]'>New Arrival</h2></div>
            <div className='md:w-[559px] md:h-[127px] '><h1 className='md:text-[52px]  text-[30px] font-bold md:leading-[65px] text-[#B88E2F]'>Discover Our <br /> New collection</h1></div>
            <div className='pt-[17px]'><p className='md:text-[18px] text-[12px] font-medium md:leading-[24px] leading-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni aliquid modi neque magnam quae.</p></div>
            <div className='md:pt-[56px] md:pb-[37px] pt-[30px] '><Link href="/shop"><button className='md:w-[222px] md:h-[74px] w-[100px] h-[45px] font-bold text-[16px] text-center bg-[#B88E2F]  text-white'>VIEW MORE</button></Link></div>
        </div>
        .
    </div>
 </section>
  )
}

export default Hero