import React from 'react'

const About_card = ({product}) => {
  return (
  <section>
      <div>
         <div className='w-[817px]'><img src={product.image} alt="" /></div>
         <div className='pt-[17px] flex gap-[35px]'>
           <div className='flex'>
              <div><img src="About_icon1.png" alt="" /></div>
              <div className='font-normal text-base pl-[7px] text-[#9F9F9F]'>Admin</div>
           </div>

           <div className='flex'>
              <div><img src="About_icon2.png" alt="" /></div>
              <div className='font-normal text-base pl-[7px] text-[#9F9F9F]'>14 Oct 2022</div>
           </div>

           <div className='flex'>
              <div><img src="About_icon3.png" alt="" /></div>
              <div className='font-normal text-base pl-[7px] text-[#9F9F9F]'>Wood</div>
           </div> 
         </div>

         <div><h1 className='font-medium text-[30px] my-[12px]'>{product.heading}</h1></div>
          <div className=' w-[817px] '><p className='text-[16px] font-normal text-[#9F9F9F]' >{product.desc}</p></div>
         
         <div><h2 className='font-normal text-base mt-[30px]'>Read more</h2></div>
         <div className='ml-[8px] w-[70px] h-[3px] bg-black mt-[6px] ' ></div>
      </div>
  </section>
  )
}

export default About_card