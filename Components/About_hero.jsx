import React from 'react'
import Recent_card from './Recent_card'
import { categories, Recentcards } from '../Data'
import About_card from './About_card'

const About_hero = () => {
  return (
    <section>
         <div className='relative'>
            <div><img src="/Shophero1.png" alt="" /></div>
            <div className='flex justify-center'><h1 className='absolute  top-[121px] font-medium text-5xl'>About</h1></div>
            <div className='flex absolute top-[195px] left-[660px]'>
                <div><h2 className='font-medium text-base'>Home</h2></div>
                <div><img src="Shop_hero_icon.png" alt="" className='pt-[3px]' /></div>
                <div><h2 className='font-light text-base'>About</h2></div>
            </div>
        </div>


        <div className='pt-[106px] pl-[97px] pr-[100px]'>
            <div className='  flex'>
                <div className='flex flex-col gap-[54px]'>
                {categories.map(product => (
                       <About_card key={product.id} product={product} />
                       ))}
               
                </div>

                <div className='ml-[177px] '>
                    <button className='py-[17px] pl-[287px] pr-[17px] -ml-[106px] border-[1px] border-gray-600 rounded-[10px]'><img src="/icon3.png" alt="" className='h-[24px] w-[24px]' /></button>
                     <div className='-ml-[65px]'>
                        <h1 className='mb-[41px] font-medium text-2xl mt-[43px]'>Categories</h1>

                        <div className='flex gap-[185px]'>
                            <div className='flex flex-col gap-[41px]'>
                              <h2 className=' text-[#9F9F9F] text-base font-normal'>Crafts</h2>
                              <h2 className=' text-[#9F9F9F] text-base font-normal'>Design</h2>
                              <h2 className=' text-[#9F9F9F] text-base font-normal'>Handmade</h2>
                              <h2 className=' text-[#9F9F9F] text-base font-normal'>Interior</h2>
                              <h2 className=' text-[#9F9F9F] text-base font-normal'>Wood</h2>    
                            </div>
                            <div className='flex flex-col gap-[41px]'>
                                <h2 className=' text-[#9F9F9F] text-base font-normal' >2</h2>
                                <h2 className=' text-[#9F9F9F] text-base font-normal'>8</h2>
                                <h2  className=' text-[#9F9F9F] text-base font-normal'>7</h2>
                                <h2 className=' text-[#9F9F9F] text-base font-normal'>1</h2>
                                <h2 className=' text-[#9F9F9F] text-base font-normal'>6</h2>
                                
                            </div>
                        </div>
                       
                     </div>

                     <div className='mt-[117px] flex flex-col gap-[39px] -ml-[65px]'>
                     <h1 className='font-medium text-2xl pb-[26px] pt-[16px]'>Recent Posts</h1>
                       {Recentcards.map(product => (
                       <Recent_card key={product.id} product={product} />
                       ))}
                     </div>

                     
                </div>
            </div>
        </div>

          <div>
          <div>
            <ul className='flex gap-[38px] justify-center pt-[70px] pb-[85px]'>
                
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>1</li>
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>2</li>
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>3</li>
                <li className='w-[98px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>Next</li>
            </ul>
            </div>
          </div>
       
      
    </section>
  )
}

export default About_hero