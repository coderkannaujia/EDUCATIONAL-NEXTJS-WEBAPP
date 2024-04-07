import React from "react";
import Image from "next/image";
import vector2 from "/public/image/vector2.png";
import Line15 from "/public/image/Line15.png";
import Icon1 from "/public/image/Icon1.png";
import Icon2 from "/public/image/Icon2.png";
import Icon3 from "/public/image/Icon3.png";




Icon1

const Course = () => {
  return (
    <div className="h-full bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900  p-10 w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px]">
      <h1 className="text-center text-xl xl:text-3xl font-bold text-white ">
        Why <span className="text-red-600">learn</span> with our courses?
      </h1>
      <p className="mt-6 text-center xl:text-xl text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod temporidunt ut labore veniam...
      </p>

      <div className="flex justify-between mt-20   ">

       <div className="flex xl:flex xl:flex-center">

        <div className="ml-20">
          <Image src={Icon1} alt="icon1" className="ml-28" />
          <h1 className="mt-8 text-center text-white  ">01. Learn</h1>
          <p className="mt-4 text-center text-white  ">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            dolorili adipiscing elit. Felis donec
            <br />
            massa aliqua.
          </p>
          
        </div>

         <div className="ml-10">
         <Image src={Line15} alt="line15" /> 
         </div>
          </div>


          <div className="flex xl:flex xl:flex-center">
        <div className="ml-20">
          <Image src={Icon2} alt="icon2" className="ml-28" />
          <h1 className="mt-8 text-center text-white  ">01. Learn</h1>
          <p className="mt-4 text-center text-white  ">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            dolorili adipiscing elit. Felis donec
            <br />
            massa aliqua.
          </p>
          
        </div>

         <div className="ml-10">
         <Image src={Line15} alt="line15"  /> 
         </div>

          </div>


          <div className="flex xl:flex xl:flex-center">
        <div className="ml-20">
          <Image src={Icon3} alt="icon3" className="ml-28" />
          <h1 className="mt-8 text-center text-white  ">01. Learn</h1>
          <p className="mt-4 text-center text-white  ">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            dolorili adipiscing elit. Felis donec
            <br />
            massa aliqua.
          </p>
          
        </div>

         <div className="ml-10">
         <Image src={Line15} alt="line15"  /> 
         </div>

          </div>
       
       
      </div>
    </div>
  );
};

export default Course;
