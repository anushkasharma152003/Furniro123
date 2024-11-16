import React from 'react'
import Shop_card from './Shop_card'
import {shopproducts} from '../Data'


const Shop_section1 = () => {
  return (
    <div className='px-[102px] pt-[23px]'>
          <div className='grid  grid-cols-4 pt-[40px]'>
                {shopproducts.map(product => (
                  <Shop_card key={product.id} product={product} />
                ))}
            </div>
            <div className='grid  grid-cols-4 pt-[40px]'>
                {shopproducts.map(product => (
                  <Shop_card key={product.id} product={product} />
                ))}
            </div>
            <div className='grid  grid-cols-4 pt-[40px]'>
                {shopproducts.map(product => (
                  <Shop_card key={product.id} product={product} />
                ))}
            </div>
            <div className='grid  grid-cols-4 pt-[40px]'>
                {shopproducts.map(product => (
                  <Shop_card key={product.id} product={product} />
                ))}
            </div>

            <div>
            <ul className='flex gap-[38px] justify-center pt-[70px] pb-[85px]'>
                
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>1</li>
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>2</li>
                <li className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>3</li>
                <li className='w-[98px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-[10px] font-normal text-xl'>Next</li>
            </ul>
            </div>
       
    </div>
  )
}

export default Shop_section1