
import React from 'react'

const Card = ({ product }) => {
  return (
    <section className='relative hover:brightness-50'> 
        <div className='bg-[#F4F5F7] inline-block '>
            <div><img src={product.image} alt={product.name} /></div>
            <div className='ml-[16px] mt-[16px]'>
                <div className='mb-[8px]'><h1 className='font-semibold text-2xl'>{product.name}</h1></div>
                <div className='mb-[8px]'><p className='font-medium text-base text-[#898989]'>{product.description}</p></div>
                <div className='mb-[30px]'><h2 className='font-semibold text-xl'>{product.price}</h2></div>
            </div>

        </div>
        {product.discount1  ?
        <span className='rounded-full bg-[#E97171] absolute top-0 right-0 p-[12px] text-white  m-[24px]'><p>{product.discount1}</p> </span>:
       ''}

       {product.discount2  ?
        <span className='rounded-full bg-[#2EC1AC] absolute top-0 right-0 p-[12px] text-white  m-[24px]'><p>{product.discount2}</p> </span>:""}
    </section>
  )
}

export default Card
