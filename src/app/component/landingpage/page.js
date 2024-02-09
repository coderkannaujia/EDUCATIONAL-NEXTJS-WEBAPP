import React from "react";
import { FaStar } from "react-icons/fa";

const Landingpage = () => {
  return (
    <>
      <div className="h-[700px]  bg-amit-yello  relative w-[1400px] ">
        <div className="flex justify-between">
          <div>
            <h1 className="mt-20 ml-28 text-white font-semibold ">
              Successful coaches are visionaries
            </h1>
            <p className="text-5xl font-bold ml-28 mt-6 text-white ">
              Good <span className="text-green-400">Course</span> is
              <br /> good teaching &<br /> nothing else
            </p>

            <div className="flex justify-start gap-6">
              <div>
                <button className=" text-white border-2  w-36 h-12 rounded-md mt-14 ml-28">
                  View Courses
                </button>
              </div>

              <div>
                <h1 className="gap-4 mt-16 text-white ">
                  Get Free Consultation
                </h1>
              </div>
            </div>

            <div className="flex justify-start gap-2">
              <div>
                <button className="text-black bg-white w-96 h-12 p-1 rounded-md mt-28 ml-28">
                  What do you want to learn today?
                  <br />
                </button>
              </div>
              <div>
                <button className="text-black bg-green-500 w-20 h-12 p-1 rounded-md mt-28 ">
                  Search
                </button>
              </div>

              <div>
                <img src="" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="mt-28 text-black ml-14">Ronald Richards</h1>
            <p className="mt-2 text-white ml-14 text-[10px] ">
              In a coaching role, you ask the
              <br /> questions and rely more on your <br />
              staff, who become the experts,
              <br />
              to provide the information.
            </p>

            <div className="flex justify-start gap-2 mt-2">
              <div>
                <h1 className="ml-14">4.3</h1>
              </div>
              <div className="flex mt-2">
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          <div className="flext justify-start relative">
            <div className=" ">
              <img
                src="/image/young1.png"
                className=" mr-32 w-[450px] h-[600px] shadow-sm  "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
