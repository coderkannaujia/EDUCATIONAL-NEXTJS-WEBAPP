import React from "react";
import Image from "next/image";
import Ellipse14 from "/public/image/Ellipse14.png";
import amit1 from "/public/image/amit1.jpg";
import star from "/public/image/Star.png";
import star1 from "/public/image/Star1.png";
import men2 from "/public/image/men2.png";
import men3 from "/public/image/men3.png";


// import vector2 from "/public/image/vector2.png";
// import vector2 from "/public/image/vector2.png";

const Testimonials = () => {
  return (
    <div className="h-full w-[1450px] md:w-[1490px] lg:w-[1530px] xl:w-[2020px] bg-sky-50 pb-20 pt-10 ">
      <div className="flex justify-start gap-96 xl:gap-[670px] ">
        <div>
          <Image src={Ellipse14} alt="ellipse14" className="mt-20 ml-20  " />
        </div>
        <div>
          <h1 className="text-2xl xl:text-5xl text-center font-bold  mt-20">
            Testimonials
          </h1>
          <p className="text-center mt-4 xl:text-xl font-semibold ">
            What our student say about us
          </p>
        </div>
      </div>

      <div className=" h-full grid grid-cols-3 gap-2 xl:flex xl:justify-center xl:gap-40 ">
        <div className="h-[300px] w-[360px] xl:h-[400px] xl:w-[600px] xl:ml-24 p-6 shadow-2xl mt-16 ml-6 rounded-3xl">
          <div className="flex justify-start gap-6  mt-6 ">
            <div>
              <Image
                src={amit1} alt="amitimage"
                className="w-12 h-12 rounded-full ml-6 "
              />
            </div>
            <div>
              <h1 className="mt-2 font-bold text-md">Ronald Richards</h1>
            </div>
          </div>
          <p className="mt-6 text-center text-sm xl:text-xl xl:mt-10">
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id  est
            laborum.Duis aute irure dolor in reprehenderit  in voluptate
            velit esse cillum dolore eu fugiat nulla.
            
          </p>

          <div className="flex justify-start ml-6 mt-14 xl:ml-16">
            <div>
              <Image src= {star} alt="star" />
            </div>
            <div>
              <Image src= {star} alt="star" />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
            <div>
              <Image src={star1} alt="star" />
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[400px] xl:h-[400px] xl:w-[600px] p-6  mt-16 ml-3 shadow-2xl rounded-3xl">
          <div className="flex justify-start gap-6 mt-6 ">
            <div>
              <Image src={men2} alt="men2"
                className="w-12 h-12 rounded-full ml-6 "
              />
            </div>
            <div>
              <h1 className="mt-2 font-bold text-md">Ronald Richards</h1>
            </div>
          </div>
          <p className="mt-6 text-center  text-sm xl:text-xl xl:mt-10">
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id  est
            laborum.Duis aute irure dolor in reprehenderit  in voluptate
            velit esse cillum dolore eu fugiat nulla.
            
          </p>

          <div className="flex justify-start ml-6 mt-14">
            <div>
              <Image src={star} alt="starimage" />
            </div>
            <div>
              <Image src={star} alt="starimage" />
            </div>
            <div>
              <Image src={star} alt="starimage" />
            </div>
            <div>
              <Image src={star} alt="starimage" />
            </div>
            <div>
              <Image src={star} alt="starimage" />
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[400px] xl:h-[400px] xl:w-[600px] p-6 shadow-2xl mt-16 mr-32 rounded-3xl">
          <div className="flex justify-start gap-6 mt-6 ">
            <div>
              <Image
                src={men3} alt="men3"
                className="w-12 h-12 rounded-full ml-6 "
              />
            </div>
            <div>
              <h1 className="mt-2 font-bold text-md">Ronald Richards</h1>
            </div>
          </div>
          <p className="mt-6 text-center text-sm xl:text-xl xl:mt-10">
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est
            laborum.Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla.
           
          </p>

          <div className="flex justify-start ml-6 mt-14">
            <div>
              <Image src={star} alt="star"   />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
            <div>
              <Image src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
