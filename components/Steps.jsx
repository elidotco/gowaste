/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";

const Steps = ({ steps }) => {
  return (
    <div id="how-it-works">
      <div>
        <div className="text-4xl pb-10 font-bold flex items-center justify-center">
          How it Works
        </div>
      </div>
      <div className="flex md:flex-row  flex-col items-center justify-between px-5 ">
        <Fade left cascade>
          <div className="flex items-center bg-white shadow-md rounded-lg md:bg-transparent md:shadow-none p-2 justify-center w-full md:w-3/5 flex-col md:px-20">
            <p className="font-bold text-green-500 text-2xl">Book a Pickup</p>
            <p className="text-2xl">
              {/* We provide a series of options for you to choose from such bin
              size type of waste been plastic, medical or mixed and the number
              of bins. From your chices you are given an estimated price 
              
              */}

              {steps[0].des}
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-0 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src={steps[0].image.url}
              alt="alt"
              className="w- h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col items-center justify-between md:px-10 ">
        <Fade left cascade>
          <div className="md:flex items-center md:justify-center w-full md:w-3/5 flex-col px-4 md:px-20">
            <p className="font-bold text-3xl text-green-500">Confirm Booking</p>
            <p className="text-2xl">
              {/* After listing the type of waste , bin size and number, confirm
              your booking so that avialable driver can pick it up */}
              {steps[1].des}
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-10 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src={steps[1].image.url}
              alt="alt"
              className="w-5/6 h-[600px]  right-20"
            />
          </Fade>
        </div>
      </div>
      <div className="flex md:flex-row  flex-col items-center justify-between px-5 ">
        <Fade left cascade>
          <div className="flex items-center bg-white shadow-md rounded-lg md:bg-transparent md:shadow-none p-2 justify-center w-full md:w-3/5 flex-col md:px-20">
            <p className="font-bold text-green-500 text-2xl">
              Manage Your bookings
            </p>
            <p className="text-2xl">
              {/* You can manage your bookings such as reschudling, and
              cancellations also you can change name, password and phone number */}
              {steps[2].des}
            </p>
          </div>
        </Fade>

        <div className="w-full md:w-2/6 relative">
          <div className="md:w-5/6 w-full h-56 bg-opacity-50 bottom-44 -rotate-12 right-0 bg-[#D7EAE6] -skew-y-12 absolute rounded-xl -z-40 mt-20" />
          <Fade right>
            <img
              src={steps[2].image.url}
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
