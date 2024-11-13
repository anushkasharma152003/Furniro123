import React from 'react'

const Footer = () => {
  return (
  <section className='mt-[50px] border-t-2'>
    <div className='pt-[48px] mx-[100px]  pb-[48px] flex border-b-2 '>
        <div>
            <div><h1 className='font-bold text-[24px]'>funiro.</h1></div>
            <div>
                <p className='font-normal text-base text-[#9F9F9F] mt-[50px]'>400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</p>
            </div>
            </div>
       

        <div><ul className='flex  flex-col gap-[46px] font-medium text-base ml-[136px]'>
            <li className='mb-[15px] text-[#9F9F9F]'>links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul></div>


        <div><ul className='flex  flex-col gap-[46px] font-medium text-base ml-[144px]'>
            <li className='mb-[15px] text-[#9F9F9F]'>Help</li>
           
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
        </ul></div>


        <div><ul className='flex  flex-col gap-[46px] font-medium text-base ml-[72px]'>
            <li className='mb-[15px] text-[#9F9F9F]'>Newsletter</li>
            <li className='text-[#9F9F9F]'>Enter Your Email Address    <span className='text-black'> Subscribe</span> </li>
       
        </ul></div>
    </div>

    <div className='pt-[35px] pb-[38px] pl-[102px]'><p className='font-normal text-base'>2023 furino. All rights reserved</p></div>
  </section>
  )
}

export default Footer