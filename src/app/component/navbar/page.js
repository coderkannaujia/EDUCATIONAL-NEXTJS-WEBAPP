import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-white   p-6 ">
      <div className="flex justify-between ml-16 ">
        <div className="flex justify-start gap-6">
          <div>
            <img src="/image/Frame.png" />
          </div>
          <div>
            <img src="/image/Eduplore.png" className="mt-4" />
          </div>
        </div>

        <div>
          <ul className="flex justify-start gap-4 text-sm font-semibold ">
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

        <div className="flex justify-start gap-6">
          <div>
            <img src="/image/vector2.png" />
          </div>
          <div>
            <img src="/image/vector.png" />
          </div>
          <div>
            <img src="/image/vector1.png" />
          </div>
        </div>

        <div className="flex justify-start gap-6 mr-10 ">
          <div>
            <a href="#" className="mt-4 text-sm font-semibold pt-3 ">
              Login
            </a>
          </div>
          <div>
            <button className="bg-yellow-400 w-24 h-10 rounded-md font-semibold">
              Signup
            </button>
          </div>
        </div>
      </div>


  
     
    </div>
  );
};

export default Navbar;
