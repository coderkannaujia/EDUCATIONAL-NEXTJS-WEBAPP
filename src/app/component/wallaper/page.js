import React from "react";
import Image from "next/image";
import wallpaper from "/public/image/wallpaper.png";
import Polygon7 from "/public/image/Polygon7.png";
import Rectangle from "/public/image/Rectangle.png";


const Wallpaper = () => {
  return (
    <div className="bg-white h-full w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px] p-8 relative">

      <div className="flex justify-between gap-4">

        <div>
          <Image
            src={wallpaper} alt="wallpaper"
            className="w-[480px] h-[480px] ml-28 mt-20 "
          />
        </div>

        <div>
          <h1 className="mt-36 text-3xl font-bold mr-16">
            The number one factor in <br />
            <span className="text-green-500 font-abc">
              relevance drives out resistance.
            </span>
          </h1>
          <p className="mt-6 mr-16 font-semibold">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
            <br /> dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat
            <br /> non proident, sunt in culpa qui officia deserunt mollit anim{" "}
            <br /> id est laborum.
          </p>
          <button className="h-12 text-white w-36 bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900 mt-10 rounded-md  ">
            Learn Now
          </button>
          <Image src={Polygon7} alt="polygon7" className=" mt-20  ml-96" />
        </div>

         </div>

      <div className="xl:flex xl:justify-center">
          <Image src={Rectangle} alt="rectangle" className="  ml-14 w-[1150px] h-[600px]  "/>
          {/* <Image src="/image/Play.png" className="  ml-[540px] mt-72 w-40 h-40 absolute " /> */}
          </div>
 
      </div>
     
  );
};

export default Wallpaper;
