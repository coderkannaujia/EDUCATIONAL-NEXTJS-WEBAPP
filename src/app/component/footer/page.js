import React from "react";

const Footer = () => {
  return (
   <>
    <div className="h-[500px] bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900 relative ">
      <div className="flex justify-between">
        <div className="ml-20">
          <img src="/image/Frame2.png" className="mt-20" />
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
              <img src="/image/phone.png"  />
            </div>
            <div >
              <h1 className="text-white">(209) 555-0104</h1>
            </div>
          </div>

          <div className="flex justify-start gap-8 mt-4">
            <div>
              <img src="/image/Gmail.png" />
            </div>
            <div>
              <h1 className="text-white">michelle.rivera@example.com</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-6 mt-48 mr-6 ">
          <div>
            <img src="/image/map.png" />
          </div>
          <div>
            <h1 className="text-white">
              2715 Ash Dr. San Jose, South
              <br /> Dakota 83475
            </h1>
          </div>
        </div>



      </div>

       
      <div className="h-1 mt-20 bg-white w-[1200px] ml-14"></div>

      <div className="flex justify-between mt-8 ml-20">
       <div>
        <h1 className="text-white">Copyright 2023 | All Rights Reserved</h1>
       </div>

       <div className="flex justify-start gap-4 mr-10">
        <div><img src="/image/social1.png" /></div>
        <div><img src="/image/social2.png" /></div>
        <div><img src="/image/social3.png" /></div>
        <div><img src="/image/social4.png" /></div>
        <div><img src="/image/social5.png" /></div>
      </div>
       </div>


    </div>
    </>
  );
};

export default Footer;
