import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/#home",
    },
    {
      name: "Features",
      path: "/#features",
    },
    {
      name: "How it works",
      path: "/#how-it-works",
    },
    {
      name: "Contact Us",
      path: "/#contact",
    },
  ];
  return (
    <div className="">
      <div className=" h-full  flex justify-between items-center flex-row py-5 relative shadow-lg shadow-black md:shadow-none">
        <div className="px-5">LOGO</div>
        <nav className="">
          <ul className="md:flex flex-row gap-x-7 hidden px-7 bg-transparent ">
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-black mx-5" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-black mx-5" />
          )}
        </span>

        <div
          className={
            isOpen
              ? "align-center w-full  rounded-md   top-20 align-middle fixed z-50  bg-white"
              : "hidden"
          }
        >
          <div className="flex items-center flex-col justify-center py-5">
            <ul className="">
              {menu.map((item, index) => (
                <li className="py-6" key={index}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="icons flex flex-col gap-5 my-5 ">
              <a
                href="#"
                className="flex flex-row items-center border rounded-md border-green-500 px-1 py-1 mb-10 text-green-600 text-2xl gap-1"
              >
                <FaGooglePlay />
                <span className="text-xl font-semibold">Google Play</span>
              </a>
              <a
                href="#"
                className="flex flex-row items-center font-bold border rounded-md border-green-500 px-1 py-1 text-green-600 text-2xl gap-1"
              >
                <FaAppStore />
                <span className="text-xl font-semibold">AppStore</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
