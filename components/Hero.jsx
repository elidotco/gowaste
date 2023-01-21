/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="absolute -top-[700px] -z-40  -skew-y-[15deg] rotate-180 translate-y-60   bg-[#DEEEEB] w-full h-[900px]">
        {/* <img src={line} alt="line" className="w-full" /> */}
      </div>
      <div className="hero flex   flex-col py-32 px-20 " id="home">
        <span className="text-5xl animate__animated animate__backInLeft font-bold pl-20 px-20">
          Book A Truck For your Waste Collection
        </span>
        <span className="text-3xl animate__animated animate__backInLeft font-light text-green-500 px-40 pl-20 ">
          Book A Truck For your Waste Collection
        </span>

        <div className=" absolute bottom-0 right-20 -z-10 ">
          <img
            src="/images/temp.png"
            alt="alt"
            className="w-full h-[600px]  right-20"
          />
        </div>
        <div className="mt-5 md:flex hidden  gap-10 ml-20">
          <div>
            <img src="/images/app-store-badge 1.png" alt=" appstore" />
          </div>
          <div>
            <img src="/images/google-play-badge 1.png" alt=" appstore" />
          </div>
        </div>
      </div>
      <div className=" -rotate-1 ml-20 mb-20">
        <div className="h-7 w-14 bg-[#007F66] relative rounded translate-x-px -top-10 skew-y-12"></div>
        <div className="h-7 w-14 bg-green-500 relative rounded -bottom-10-right-5 skew-y-12"></div>
      </div>
    </div>
  );
};

export default Hero;
