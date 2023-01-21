/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";

const Steps = () => {
  return (
    <div>
      <div>
        <div className="text-4xl pb-10 font-bold flex items-center justify-center">
          How it Works
        </div>
      </div>
      <div className="flex md:flex-row  flex-col items-center justify-between px-5 ">
        <Fade left cascade>
          <div className="flex items-center bg-white shadow-md rounded-lg md:bg-transparent md:shadow-none p-2 justify-center w-full md:w-3/5 flex-col md:px-20">
            <p className="font-bold text-green-500 text-2xl">Save A Ride</p>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              dolores nam quae ad magni doloremque impedit illum minus dolor
              quaerat quasi quam quidem, iste atque quod unde, eligendi sequi
              eaque?
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-0 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src="/images/temp.png"
              alt="alt"
              className="w- h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col items-center justify-between md:px-10 ">
        <Fade left cascade>
          <div className="md:flex items-center md:justify-center w-full md:w-3/5 flex-col px-4 md:px-20">
            <p className="font-bold text-3xl">Save A Ride</p>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              dolores nam quae ad magni doloremque impedit illum minus dolor
              quaerat quasi quam quidem, iste atque quod unde, eligendi sequi
              eaque?
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-10 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src="/images/temp.png"
              alt="alt"
              className="w-full h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>
      <div className="flex md:flex-row  flex-col items-center justify-between px-5 ">
        <Fade left cascade>
          <div className="flex items-center bg-white shadow-md rounded-lg md:bg-transparent md:shadow-none p-2 justify-center w-full md:w-3/5 flex-col md:px-20">
            <p className="font-bold text-green-500 text-2xl">Save A Ride</p>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              dolores nam quae ad magni doloremque impedit illum minus dolor
              quaerat quasi quam quidem, iste atque quod unde, eligendi sequi
              eaque?
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-0 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src="/images/temp.png"
              alt="alt"
              className="w- h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Steps;
