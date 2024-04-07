import React from "react";
import Image from "next/image";
import Ellipse13 from "/public/image/Ellipse13.png";
import Mask1 from "/public/image/Mask1.png";
import Mask2 from "/public/image/Mask2.png";
import Mask3 from "/public/image/Mask3.png";
import Mask4 from "/public/image/Mask4.png";
import Mask5 from "/public/image/Mask5.png";
import Mask6 from "/public/image/Mask6.png";
import cart from "/public/image/cart.png";


const Featurecourse = () => {
  return (
    <div className="h-full bg-sky-50 p-10 w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px] ">
      <div className="flex justify-start gap-72 xl:flex xl:justify-start xl:gap-96 ">
        <div>
          <Image src={Ellipse13} alt="ellipse" className="mr-10" />
        </div>
        <div className="">
          <h1 className="text-center text-2xl xl:text-5xl font-abc font-bold">
            Feature <span className="text-red-500">Course</span>
          </h1>
          <p className="text-center xl:text-3xl  font-semibold mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seds
            <br /> do eiusmod temporidunt ut labore veniam...
          </p>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-3 ml-10 gap-2  ">
        <div className="h-96 w-80  bg-white rounded-xl ml-12  shadow-2xl xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400  ">
          <Image src={Mask1} alt="mask1" className="w-full bg-cover "  />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-4 xl:text-2xl ">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-4 xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center  font-semibold font-abc ">
            Motion Graphics: Create a Nice
            <br />
            Typography Animation
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6 xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>

        <div className="h-96 w-80 bg-white rounded-xl ml-8 shadow-2xl xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400  ">
          <Image src={Mask2} alt="mask2" />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-2 xl:text-2xl">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-2 xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center font-semibold font-abc  ">
            The Complete Financial Analyst
            <br />
            Training & Investing
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6 xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>

        <div className="h-96 w-80 bg-white rounded-xl mr-12 shadow-2xl xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400 ">
          <Image src={Mask3} alt="mask3" />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-4 xl:text-2xl">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-4 xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center font-abc font-semibold  ">
            Education Software and PHP and JS
            <br /> System Script
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6 xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image  src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>
      </div>


      <div className="mt-20 grid grid-cols-3 ml-10  gap-2  ">
        <div className="h-96 w-80 bg-white rounded-xl ml-12 shadow-2xl xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400 ">
          <Image   src={Mask4} alt="mask4" />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-4 xl:text-2xl">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-4 xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center  font-semibold font-abc ">
            Marketing 2023: Complete Guide To
            <br />
            Instagram Growth
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6 xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>

        <div className="h-96 w-80 bg-white rounded-xl ml-8 shadow-2xl xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400  ">
          <Image src={Mask5} alt="mask5" />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-4 xl:text-2xl">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-4  xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center font-semibold font-abc ">
            Advance PHP knowledge with JS to
            <br />
            make smart web
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6  xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>

        <div className="h-96 w-80 bg-white rounded-xl mr-12 shadow-2xl  xl:h-[500px] xl:w-[500px] xl:p-2 even:shadow-rose-400 odd:shadow-rose-400 ">
          <Image src={Mask6} alt="mask6" />
          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-4 xl:text-2xl">5,957 Student</h1>
            </div>
            <div>
              <h1 className="mr-4 mt-4 xl:text-2xl">01h 49m</h1>
            </div>
          </div>

          <p className="text-lg mt-6 ml-2 text-center font-abc font-semibold  ">
            Learn 3D Modelling and Design
            <br />
            for Beginners
          </p>

          <div className="flex justify-between">
            <div>
              <h1 className="ml-4 mt-6  xl:text-2xl">$33.99 </h1>
            </div>
            <div>
              <Image src={cart} alt="cart" className="mr-4 mt-6" />
            </div>
          </div>
        </div>
      </div>

      <button className="w-36 h-14 mt-20  bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900  text-white ml-[600px] p-1 rounded-lg xl:text-center xl:ml-[900px] ">
        Explore
      </button>
    </div>
  );
};

export default Featurecourse;
