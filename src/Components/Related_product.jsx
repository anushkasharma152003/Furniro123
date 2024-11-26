import React from 'react'
import { relatedproducts } from '@/Data'
import Link from 'next/link'
import Shop_card from './Shop_card'

const Related_product = () => {
  return (


    <div className="px-[50px] pt-[23px] lg:w-screen sm:w-[1024px] md:w-[1124px]  w-[960px]   ">
   <div className='pt-[50px] flex justify-center'><h1 className='text-[36px] font-medium'>Related Products</h1></div>
    <div className="grid  grid-cols-4 gap-[20px] pt-[40px]">
      {relatedproducts.map((product) => (
        <Link href={`/shop/${product?.slug}`} key={product.id}>
          <Shop_card key={product.id} product={product} />
        </Link>
      ))}

     
    </div>

    <div className='flex justify-center'><button className='border-[#B88E2F] border-[1px] px-[74px] py-[12px] text-[#B88E2F] text-base font-semibold mt-[44px] my-[104px]'>Show More</button></div>

    
  </div>
  )
}

export default Related_product