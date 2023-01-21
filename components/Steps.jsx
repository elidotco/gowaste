/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";

const Steps = () => {
  return (
    <div>
      <div>
        <div className="text-3xl font-bold flex items-center justify-center">
          How it Works
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-10 ">
        <div className="flex items-center justify-center w-3/5 flex-col px-20">
          <p className="font-bold text-3xl">Save A Ride</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            dolores nam quae ad magni doloremque impedit illum minus dolor
            quaerat quasi quam quidem, iste atque quod unde, eligendi sequi
            eaque?
          </p>
        </div>

        <div className="w-2/6 relative">
          <div className="w-5/6 h-56 bg-opacity-50 bottom-44 -rotate-12 right-10 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src="/images/temp.png"
              alt="alt"
              className="w-full h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between px-10 ">
        <div className="flex items-center justify-center w-3/5 flex-col px-20">
          <p className="font-bold text-3xl">Save A Ride</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            dolores nam quae ad magni doloremque impedit illum minus dolor
            quaerat quasi quam quidem, iste atque quod unde, eligendi sequi
            eaque?
          </p>
        </div>
        <div className="w-2/6 relative">
          <div className="w-5/6 h-56 bg-opacity-50 bottom-44 rotate-12 right-10 bg-[#D7EAE6] skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <img
            src="/images/temp.png"
            alt="alt"
            className="w-full h-[600px]  right-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
