/* eslint-disable @next/next/no-img-element */
import { async } from "@firebase/util";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import {
  FaAppStore,
  FaFacebook,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { db } from "../firebase";

const Footer = () => {
  const [oo, setOo] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const formcheck = (name, email, message) => {
    const test =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && test.test(email)) {
      if (name && message) {
        return true;
      } else false;
    }
  };

  const sub = async () => {
    getDoc(collection(db, "cities")).then((data) => console.log(data.data));
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  const handlesub = async () => {
    if (formcheck(name, email, message)) {
      addDoc(collection(db, "reviews"), {
        name,
        email,
        message,
      });
      console.log(name, email, message);
      setIsOpen(false);
      setEmail("");
      setName("");
      setMessage("");
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white px-6 h-full text-left align-middle shadow-xl transition-all">
                  {" "}
                  <div className="flex flex-col  items-center justify-center w-full  my-10 px-5 py-10">
                    <div className="border h-12 text-lg rounded-full w-full ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id=""
                        className="w-full rounded-full px-4 h-full outline-none "
                      />
                    </div>

                    <div className="border h-10 my-5 w-full  rounded-full">
                      <input
                        className="w-full rounded-full px-4 h-full outline-none "
                        type="text"
                        name="name"
                        id=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-full ">
                      <textarea
                        type="text"
                        name="name"
                        id=""
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-56 border p-5 text-lg rounded-lg outline-none"
                        placeholder="Message"
                      />
                    </div>

                    <div>
                      <div
                        className="w-32 h-12 flex items-center justify-center px-3 py-1 rounded-full bg-green-500 cursor-pointer"
                        onClick={handlesub}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex absolute top-2 right-2 justify-center rounded-full border border-transparent bg-blue-100 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="w-8 h-8 text-black mx-5" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
              Go Waste is the brain child of Lac global limited as a means to
              help keep the environment clean by providing ease access to waste
              disposal visit{" "}
              <a
                href="www.lacgloballimited.com"
                className="text-blue-400 cursor-pointer"
              >
                {" "}
                Lacgloal{" "}
              </a>
              for more info
            </div>
            <div className="flex flex-row gap-x-4">
              <a
                href="https://web.facebook.com/gowasteapp"
                className="p-2 rounded-full bg-blue-700"
              >
                <FaFacebookF size={25} color="white" />
              </a>
              <a
                href="https://www.instagram.com/gowaste_app/"
                className="p-2 rounded-full bg-white"
              >
                <FaInstagram size={25} color="pink" />
              </a>
              <a
                href="https://twitter.com/Gowaste_App"
                className="p-2 rounded-full bg-blue-300"
              >
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
              <a
                href="https://www.lacgloballimited.com/projects/gowasteterms"
                target="_blank"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
              <a
                href="https://www.lacgloballimited.com/projects/wastepolicy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              
            </div>
            <div>
              <a href='mailto:gowaste@lacgloballimited.com'>gowaste@lacgloballimited.com</a>
              <p>number</p>
              <span className="cursor-pointer" onClick={openModal}>
                Write a review
              </span>
              <a href="https://gofood.lacgloballimited.com/impressum">Impressum</a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
