import React from "react";
import Image from "next/image";

import Frame2 from "/public/image/Frame2.png";
import phone from "/public/image/phone.png";
import Gmail from "/public/image/Gmail.png";
import map from "/public/image/map.png";
import social1 from "/public/image/social1.png";
import social2 from "/public/image/social2.png";
import social3 from "/public/image/social3.png";
import social4 from "/public/image/social4.png";
import social5 from "/public/image/social5.png";


const Footer = () => {
  return (
   <>
    <div className="h-full bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900 relative  w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px]">
      <div className="flex justify-between">
        <div className="ml-20">
          <Image src={Frame2} alt="fram2"  className="mt-20" />
          <h1 className="mt-10 text-white  ">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br /> aliquip ex ea commodo consequat. Duis aute irure dolor
            <br /> in reprehenderit in voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.{" "}
          </h1>
        </div>

        <div className="mt-24 ">
          <h1 className="font-bold text-lg text-white ">Quick Links</h1>
          <div className="flex justify-start gap-10 mt-16">
            <div>
              <h1 className="text-white">About</h1>
            </div>
            <div>
              <h1 className="text-white">Blog</h1>
            </div>
          </div>

          <div className="flex justify-start gap-8 mt-2  ">
            <div>
              <h1 className="text-white">Course</h1>
            </div>
            <div>
              <h1 className="text-white">Contact</h1>
            </div>
          </div>
        </div>

        <div className="mt-24 ">
          <h1 className="font-bold ml-4 text-white">Contact us</h1>
          <div className="flex justify-start gap-10 mt-16">
            <div>
              <Image src={phone} alt=" phone" a/>
            </div>
            <div >
              <h1 className="text-white">(209) 555-0104</h1>
            </div>
          </div>

          <div className="flex justify-start gap-8 mt-4">
            <div>
              <Image src={Gmail} alt="gmail" />
            </div> 
            <div>
              <h1 className="text-white">michelle.rivera@example.com</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-6 mt-48 mr-6 ">
          <div>
            <Image src={map} alt="map"   />       </div>
          <div>
            <h1 className="text-white">
              2715 Ash Dr. San Jose, South
              <br /> Dakota 83475
            </h1>
          </div>
        </div>



      </div>

       
      <div className="h-1 mt-20 bg-white w-[1200px] xl:w-[1900px] ml-14"></div>

      <div className="flex justify-between mt-8 ml-20">
       <div>
        <h1 className="text-white">Copyright 2023 | All Rights Reserved</h1>
       </div>

       <div className="flex justify-start gap-4 mr-10">
        <div><Image src={social1} alt="social1" /></div>
        <div><Image src={social2} alt="social2" /></div>
        <div><Image src={social3} alt="social3" /></div>
        <div><Image src={social4} alt="social4" /></div>
        <div><Image src={social5}  alt="social5" /></div>
      </div>
       </div>


    </div>
    </>
  );
};

export default Footer;
