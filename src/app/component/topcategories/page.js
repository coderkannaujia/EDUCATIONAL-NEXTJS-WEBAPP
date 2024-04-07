import React from 'react'
import Image from 'next/image'
import box1 from "/public/image/box1.png";
import box2 from "/public/image/box2.png";
import box3 from "/public/image/box3.png";
import box4 from "/public/image/box4.png";
import box5 from "/public/image/box5.png";
import box6 from "/public/image/box6.png";

const Topcategories = () => {
  return (
    <div className='h-full w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px] bg-sky-100 p-12'>
      <h1 className='text-center text-2xl font-bold xl:text-5xl'>Top <span className='text-green-600'>Categories</span> </h1>
      <h1 className='text-center mt-4 xl:text-2xl '>12,000+ unique online course list designs</h1>


      <div className='grid grid-cols-6 mt-12 xl:flex xl:justify-center xl:gap-24 '>
          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box1} alt='boximage' className='ml-14 mt-4 '  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Digtal<br/> Marketing</h1>
           <p className=' mt-6 text-center'>25 Courses</p>
          </div>

          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box2} alt='boximage' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'> Web<br />
           Development</h1>
           <p className=' mt-6 text-center'>25 Courses</p>
          </div>

          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box3} alt='boximage' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Art & <br />
           Humanities</h1>
           <p className=' mt-6 text-center'>35 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box4} alt='boximage' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Personal<br/>
           Development</h1>
           <p className=' mt-6 text-center'>40 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box5} alt='boximage' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>IT and <br/>
              Software</h1>
           <p className=' mt-6 text-center'>75 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <Image src={box6} alt='boximage' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Graphic <br/>
           Design</h1>
           <p className=' mt-6 text-center'>05 Courses</p>
          </div>
      </div>

      
    </div>
  )
}

export default Topcategories
