import React from "react";
import Link from "next/link";
import Image from "next/image";
import Frame from "/public/image/Frame.png";
import Eduplore from "/public/image/Eduplore.png";
import vector from "/public/image/vector.png";
import vector1 from "/public/image/vector1.png";
import vector2 from "/public/image/vector2.png";

const Navbar = () => {
  return (
    <div className="h-full bg-red-600 p-6 w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px]">
      <div className="flex gap-60 flex-row  md:flex md:justify-between md:ml-16 ">
        <div className="flex justify-start ml-10 gap-10">
          <Image src={Frame} alt="frame" className="" />

          <Image src={Eduplore} alt="eduplore" className="" />
        </div>

        <div>
          <ul className="flex justify-start text-xl gap-4 md:tex-sm font-semibold ">
            <li>
              <Link href="/component/landingpage">Home</Link>
            </li>
            <li>
              <Link href="/component/featurecourse">Course</Link>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Page</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-start gap-4">
          <Image src={vector2} className="w-10 h-10" />

          <Image src={vector} className="w-10 h-10" />

          <Image src={vector1} className="w-10 h-10" />
        </div>

        <div className="flex justify-start gap-6  ">
          <div>
            <a
              href="#"
              className=" text-xl  md:mt-4 md:text-sm font-semibold md:pt-3 "
            >
              Login
            </a>
          </div>

          <button className="  bg-yellow-400 w-24 h-10 rounded-md font-semibold">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
