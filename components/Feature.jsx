/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdPriceCheck } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import "animate.css";
import Fade from "react-reveal/Fade";

const Steps = ({ sets }) => {
  return (
    <div id="features">
      <div>
        <div className="text-3xl font-bold flex items-center justify-center">
          Features
        </div>
      </div>
      <Fade bottom cascade>
        <div className="flex md:flex-row flex-col gap-10 md:px-20 px-4 py-20">
          <Fade bottom cascade>
            <div className=" w-full  md:w-2/6 p-5 h-full md:h-72   shadow-md rounded-lg shadow-gray-400">
              <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
                <AiOutlineCar />
              </div>
              <div>
                <p className="text-xl font-bold">{sets[0].title}</p>
                <p>
                  {/* Our drivers are experienced professionals with a commitment to
                  customer satisfaction. They possess exceptional driving skills
                  and are dedicated to providing a stress-free experience for
                  our clients. */}

                  {sets[0].des}
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="w-full  md:w-2/6 space-y- p-5 h-full md:h-72   shadow-md rounded-lg shadow-gray-400">
              <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
                <MdOutlinePayments />
              </div>
              <div>
                <p className="text-3xl font-bold py-5">{sets[1].title}</p>
                <p>
                  {/* Our platform supports a variety of payment options, including
                  cash on pick, mobile Money, and and soon to be debit/credit
                  cards, allowing you to choose the payment method thats right
                  for you */}

                  {sets[1].des}
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade text>
            <div className="w-full  md:w-2/6 p-5 h-full md:h-72   shadow-md rounded-lg shadow-gray-400">
              <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
                <MdPriceCheck />
              </div>
              <div>
                <p className="text-xl font-bold">{sets[2].title}</p>
                <p>
                  {/* a feature that offers customers the ability to save money on
                  their orders. With our commitment to providing affordable
                  services, you can be sure that you are getting the best value
                  for your money */}

                  {sets[2].des}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Steps;
