import React from "react";

const Wallpaper = () => {
  return (
    <div className="bg-white h-[1400px] p-8">
      <div className="flex justify-between gap-4">
        <div>
          <img
            src="/image/wallpaper.png"
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

          <img src="/image/Polygon 7.png" className=" mt-20  ml-96 " />
        </div>
      </div>

     
      <img src="/image/Rectangle.png" className=" mt-20 ml-14 w-[1150px] h-[560px] absolute "/>
        <img src="/image/Play.png" className="  ml-[540px] mt-72 w-40 h-40 absolute " />
      </div>
     
  );
};

export default Wallpaper;
