import React from "react";

const Course = () => {
  return (
    <div className="h-[500px] bg-gradient-to-r  from-blue-900  to-pink-800  via-purple-900  p-10">
      <h1 className="text-center text-xl font-bold text-white ">
        Why <span className="text-red-600">learn</span> with our courses?
      </h1>
      <p className="mt-6 text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod temporidunt ut labore veniam...
      </p>

      <div className="flex justify-between mt-20">

       <div className="flex">
        <div className="ml-20">
          <img src="/image/Icon1.png " className="ml-28" />
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
         <img src="/image/Line 15.png"  /> 
         </div>

          </div>


          <div className="flex">
        <div className="ml-20">
          <img src="/image/Icon2.png " className="ml-28" />
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
         <img src="/image/Line 15.png"  /> 
         </div>

          </div>


          <div className="flex">
        <div className="ml-20">
          <img src="/image/Icon3.png " className="ml-28" />
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
         <img src="/image/Line 15.png"  /> 
         </div>

          </div>
       
       
      </div>
    </div>
  );
};

export default Course;
