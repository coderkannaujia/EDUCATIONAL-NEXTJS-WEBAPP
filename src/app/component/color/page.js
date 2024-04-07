import React from 'react'
import Image from 'next/image'
import company1 from "/public/image/company1.png";
import company2 from "/public/image/company2.png";
import company3 from "/public/image/company3.png";
import company4 from "/public/image//company4.png";
import company5 from "/public/image/company5.png";

const Color = () => {
  return (
   <>
    <div className='h-full bg-blue-900  p-4 relative w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px]  '>
      <div className='flex justify-between'>
        <div><Image src={company1 } alt='companyimage' className='mt-6 ml-20' /></div>
        <div><Image src={company2 } alt='companyimage' className='mt-4' /></div>
        <div><Image src={company3 } alt='companyimage' className='mt-6'/></div>
        <div><Image src={company4 } alt='companyimage' className='mt-6' /></div>
        <div><Image src={company5 } alt='companyimage' className='mt-6 mr-20' /></div>
      </div>
    </div>
    {/* bg-gradient-to-r  from-red-900  to-pink-800  via-purple-900  */}
    </>
  )
}

export default Color
