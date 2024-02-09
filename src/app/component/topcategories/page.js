import React from 'react'

const Topcategories = () => {
  return (
    <div className='h-[500px] bg-sky-100 p-12'>
      <h1 className='text-center text-2xl font-bold'>Top <span className='text-green-600'>Categories</span> </h1>
      <h1 className='text-center mt-4 '>12,000+ unique online course list designs</h1>


      <div className='grid grid-cols-6 mt-12'>
          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box1.png' className='ml-14 mt-4 '  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Digtal<br/> Marketing</h1>
           <p className=' mt-6 text-center'>25 Courses</p>
          </div>

          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box2.png' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'> Web<br />
           Development</h1>
           <p className=' mt-6 text-center'>25 Courses</p>
          </div>

          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box3.png' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Art & <br />
           Humanities</h1>
           <p className=' mt-6 text-center'>35 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box4.png' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Personal<br/>
           Development</h1>
           <p className=' mt-6 text-center'>40 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box5.png' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>IT and <br/>
              Software</h1>
           <p className=' mt-6 text-center'>75 Courses</p>
          </div>


          <div className='h-[250px] w-[200px] bg-white rounded-lg mt-6'>
           <img src='/image/box6.png' className='ml-14 mt-4'  />
           <h1 className='text-lg font-semibold mt-6  text-center'>Graphic <br/>
           Design</h1>
           <p className=' mt-6 text-center'>05 Courses</p>
          </div>
      </div>

      
    </div>
  )
}

export default Topcategories
