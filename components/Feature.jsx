/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdPriceCheck } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import "animate.css";

const Steps = () => {
  return (
    <div>
      <div>
        <div className="text-3xl font-bold flex items-center justify-center">
          Features
        </div>
      </div>
      <div className="flex flex-row gap-10 px-20 py-20">
        <div className="w-2/6 p-5 h-72  shadow-md rounded-lg shadow-gray-400">
          <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
            <AiOutlineCar />
          </div>
          <div>
            <p className="text-xl font-bold">Skilled Drivers</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
              nemo voluptas ratione tenetur corrupti maiores atque harum ut. Et
              nemo, ea eveniet consequuntur non deserunt impedit consectetur
              doloremque aliquam?
            </p>
          </div>
        </div>
        <div className="w-2/6 animate__animated animate__bounce p-5 h-72  shadow-md rounded-lg shadow-gray-400">
          <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
            <MdOutlinePayments />
          </div>
          <div>
            <p className="text-xl font-bold">Easy Payment</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
              nemo voluptas ratione tenetur corrupti maiores atque harum ut. Et
              nemo, ea eveniet consequuntur non deserunt impedit consectetur
              doloremque aliquam?
            </p>
          </div>
        </div>
        <div className="w-2/6 p-5 h-72  shadow-md rounded-lg shadow-gray-400">
          <div className="w-14 h-14 bg-green-600 rounded-lg items-center flex justify-center text-2xl text-white">
            <MdPriceCheck />
          </div>
          <div>
            <p className="text-xl font-bold">Low Prices</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
              nemo voluptas ratione tenetur corrupti maiores atque harum ut. Et
              nemo, ea eveniet consequuntur non deserunt impedit consectetur
              doloremque aliquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
