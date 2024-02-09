import React from 'react'

const Color = () => {
  return (
   <>
    <div className='h-[130px] bg-blue-900  p-4 relative'>
      <div className='flex justify-between'>
        <div><img src='/image/company1.png' className='mt-6 ml-20' /></div>
        <div><img src='/image/company2.png' className='mt-4' /></div>
        <div><img src='/image/company3.png' className='mt-6'/></div>
        <div><img src='/image/company4.png' className='mt-6' /></div>
        <div><img src='/image/company5.png' className='mt-6 mr-20' /></div>
      </div>
    </div>
    {/* bg-gradient-to-r  from-red-900  to-pink-800  via-purple-900  */}
    </>
  )
}

export default Color
