import React from 'react'

const Shop_hero = () => {
  return (
    <section>
        <div className='relative'>
            <div><img src="/Shophero1.png" alt="" /></div>
            <div className='flex justify-center'><h1 className='absolute  top-[121px] font-medium text-5xl'>SHOP</h1></div>
            <div className='flex absolute top-[195px] left-[660px]'>
                <div><h2 className='font-medium text-base'>Home</h2></div>
                <div><img src="Shop_hero_icon.png" alt="" className='pt-[3px]' /></div>
                <div><h2 className='font-light text-base'>Shop</h2></div>
            </div>
        </div>

        <div className='bg-[#F9F1E7] -mt-2'>
            <div className='p-[50px] flex justify-between'>
                <div className='flex'>
                    <div className='pl-[98px] '><img src="Shop_hero_icon2.png" alt="" /></div>
                    <div className='pl-[12px]'><h1 className='font-normal text-xl'>Filter</h1></div>
                    <div className='pl-[29px]'><img src="Shop_hero_icon3.png" alt=""  className='w-[28px] h-[28px]'/></div>
                    <div className='pl-[24px] mt-1'><img src="Shop_hero_icon4.png" alt="" className='w-[24px] h-[24px]' /></div>
                    <div className='ml-[30px] h-[39px] w-[3px] bg-[#9F9F9F]'></div>
                    <div><p className='text-base font-normal ml-[34px] pt-2'>Showing 1-16 of 32  results</p></div>
                </div>

                <div className='flex pr-[100px] mt-[5px] ' >
                   <h1 className='font-normal text-xl'>Show</h1>
                   <button className='w-[55px] h-[55px] bg-white ml-[17px] -mt-[13px] text-[#9F9F9F] font-normal text-xl'>16</button>
                   <h1 className='ml-[29px] font-normal text-xl'>Short buy</h1>
                   <button className='w-[188px] h-[55px] bg-white ml-[17px]  -mt-[13px]  text-[#9F9F9F] font-normal text-xl'>Default</button>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Shop_hero