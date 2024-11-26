import React from 'react'

const Recent_card = ({product}) => {
  return (
   <section className='  pr-[65px] '>
       
       <div className='flex  '>
            <div><img src={product.image} className='' alt="" /></div>
            <div className='flex flex-col'>
                <h1 className='font-normal  text-[14px] pl-[12px] pb-[5px] w-[160px]'>{product.heading}</h1>
                <p className='font-normal text-[12px] pl-[12px] text-[#9F9F9F]'>{product.date}</p>

            </div>
       </div>
   </section>
  )
}

export default Recent_card