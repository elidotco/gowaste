/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdPriceCheck } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import "animate.css";
import Fade from "react-reveal/Fade";

const Steps = () => {
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
                <p className="text-xl font-bold">Skilled Drivers</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  non nemo voluptas ratione tenetur corrupti maiores atque harum
                  ut. Et nemo, ea eveniet consequuntur non deserunt impedit
                  consectetur doloremque aliquam?
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
                <p className="text-3xl font-bold py-5">Easy Payment</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  non nemo voluptas ratione tenetur corrupti maiores atque harum
                  ut. Et nemo, ea eveniet consequuntur non deserunt impedit
                  consectetur doloremque aliquam?
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
                <p className="text-xl font-bold">Low Prices</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  non nemo voluptas ratione tenetur corrupti maiores atque harum
                  ut. Et nemo, ea eveniet consequuntur non deserunt impedit
                  consectetur doloremque aliquam?
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
