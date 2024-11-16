import React from 'react'

const Contact_hero = () => {
  return (
    <section>
          <div className='relative'>
            <div><img src="/Shophero1.png" alt="" /></div>
            <div className='flex justify-center'><h1 className='absolute  top-[121px] font-medium text-5xl'>Contact</h1></div>
            <div className='flex absolute top-[195px] left-[660px]'>
                <div><h2 className='font-medium text-base'>Home</h2></div>
                 <div><img src="Shop_hero_icon.png" alt="" className='pt-[3px]' /></div>
                 <div><h2 className='font-light text-base'>Contact</h2></div>
            </div>
          </div>


          <div className='pt-[98px]'>
            <div className='flex justify-center'><h1 className='font-semibold text-[36px]'>Get In Touch With Us</h1></div>
            <div className='flex justify-center'> <p className='font-normal text-base text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us </p></div>
            <div className='flex justify-center'> <p className='font-normal text-base text-[#9F9F9F]'> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
          </div>

          <div className='flex gap-[84px] '>
            <div className='flex flex-col gap-[42px] mt-[128px] ml-[245px]'>
                <div className='flex gap-[30px]'>
                    <div><img src="/Contact1.png" alt="" /></div>
                    <div>
                        <div className='font-medium text-2xl'>Address</div>
                        <div><p className='font-normal text-base'>236 5th SE Avenue, New <br />York NY10000, United <br />States</p></div>
                    </div>
                </div>

                <div className='flex gap-[30px]'>
                    <div><img src="/Contact2.png" alt="" /></div>
                    <div>
                        <div className='font-medium text-2xl'>Phone</div>
                        <div><p className='font-normal text-base'>Mobile: +(84) 546-6789 <br />  Hotline: +(84) 456-6789</p></div>
                    </div>
                </div>

                <div className='flex gap-[30px]'>
                    <div><img src="/Contact3.png" alt="" /></div>
                    <div>
                        <div className='font-medium text-2xl'>Working Time</div>
                        <div><p className='font-normal text-base mb-[389px]'>Monday-Friday: 9:00 - <br /> 22:00 <br />   Saturday-Sunday: 9:00 - <br /> 21:00</p></div>
                    </div>
                </div>
            </div>


          <div className='pt-[119px] ml-[125px]'>
                <form className='flex flex-col gap-[36px]'> 
                  <div className='flex flex-col'>
                  <label htmlFor="" className='font-medium text-base mb-[22px]' >Your name </label>
                  <input type="text" name="" id=""  placeholder='Abc' className='border-2 pl-[31px] w-[528px]  pt-[22px] pb-[25px] rounded-[10px]'/>
                  </div>

                  <div className='flex flex-col'>
                  <label htmlFor="" className='font-medium text-base mb-[22px]' >Email address </label>
                  <input type="text" name="" id=""  placeholder='Abc@def.com' className='border-2 pl-[29px] w-[528px]  pt-[26px] pb-[25px] rounded-[10px]'/>
                  </div>

                  <div className='flex flex-col'>
                  <label htmlFor="" className='font-medium text-base mb-[22px]' >Your name </label>
                  <input type="text" name="" id=""  placeholder='This is an optional' className='border-2 pl-[29px] w-[528px]  pt-[26px] pb-[25px] rounded-[10px]'/>
                  </div>

                  <div className='flex flex-col'>
                  <label htmlFor="" className='font-medium text-base mb-[22px]' >Your name </label>
                  <input type="text" name="" id=""  placeholder='Hi! i’d like to ask about' className='border-2 pl-[31px] w-[528px]  pt-[22px] pb-[70px] rounded-[10px]'/>
                  </div>

                  <div><button className='bg-[#B88E2F] text-[#FFFFFF] font-normal text-base px-[89px] py-[13px] rounded-[5px]'>Submit</button></div>
                 
                  

                </form>
            </div>
          </div>

    </section>
   
  )
}

export default Contact_hero