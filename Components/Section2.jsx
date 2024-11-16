
import React from 'react'
import Card from './Card'
import {products} from '../Data' 


const Section2 = () => {
  return (
    <section className='px-[102px]'>
        <div>
            <div className='flex justify-center pt-[56px]'>
                <h1 className='font-bold text-5xl'>Our Products</h1>
            </div>
            <div className='grid  grid-cols-4 gap-[32px] pt-[40px]'>
                {products.map(product => (
                  <Card key={product.id} product={product} />
                ))}
            </div>
            <div className='flex justify-center  pt-[44px]'>
                <button className='border-[#B88E2F] border-[1px] text-[#B88E2F] py-[12px] pr-[82px] pl-[74px] text-base font-semibold mb-[69px]'>Show More</button>
            </div>
           
        </div>
    </section>
  )
}

export default Section2

