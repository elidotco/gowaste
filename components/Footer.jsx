/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
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
    <div className="relative bottom-0">
      <div className="footer items-center justify-center flex flex-col py-10">
        <p className="text-4xl font-bold text-white">
          What are you waiting for
        </p>
        <p className="text-2xl font-semibold text-white">
          join Millions of happy users
        </p>

        <div className="mt-5 md:flex hidden  gap-10 ml-20">
          <div>
            <img src="/images/app-store-badge 1.png" alt=" appstore" />
          </div>
          <div>
            <img src="/images/google-play-badge 1.png" alt=" appstore" />
          </div>
        </div>
      </div>
      <div className="bg-black flex items-center flex-col px-10 gap-5 py-10 text-white md:justify-between md:flex-row">
        <div className="md:w-2/5 w-full">
          <div>Logo</div>
          <div className="py-5">
            Go Waste is the brain child of Lac global limited as a means to help
            keep the environment clean by providing ease access to waste
            disposal visit{" "}
            <a
              href="wwww.lacgloballimited.com"
              className="text-blue-400 cursor-pointer"
            >
              {" "}
              Lacgloal{" "}
            </a>
            for more info
          </div>
          <div className="flex flex-row gap-x-4">
            <a href="#" className="p-2 rounded-full bg-blue-700">
              <FaFacebookF size={25} color="white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white">
              <FaInstagram size={25} color="pink" />
            </a>
            <a href="#" className="p-2 rounded-full bg-blue-300">
              <FaTwitter size={25} color="light blue" />
            </a>
          </div>
        </div>
        <div className="w-3/5 flex md:flex-row flex-col gap-10 justify-between items-center">
          <div className="flex flex-col gap-2">
            {menu.map((item, index) => (
              <a href={item.path} key={index}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Become A Driver</a>
            <a href="#">Become An Agency</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <p>info@lacgloballimited.com</p>
            <p>number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
