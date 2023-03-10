import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { db, firebaseConfig } from "../firebase";
import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

const Testimonails = ({ data }) => {
  console.log(data);
  // const [data, setData] = useState([]);

  return (
    <div>
      <div className="text-3xl font-bold items-center justify-center flex">
        Reviews
      </div>

      <div className="py-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <div className="w-full flex flex-col md:flex-row px-10  items-center justify-center">
                  <div className="w-44 h-44 rounded-full shadow-md shadow-black border" />
                  <div className="p-2 md:w-3/5 w-full ">
                    {item.message}
                    <div>{item.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row px-10  items-center justify-center">
              <div className="w-44 h-44 rounded-full shadow-md shadow-black border" />
              <div className="p-2 md:w-3/5 w-full ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                eligendi fuga repudiandae dolor saepe dolore delectus placeat
                sit reprehenderit. Excepturi ipsum non exercitationem. Id sunt,
                necessitatibus maiores inventore nam quibusdam.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex flex-col md:flex-row px-10  items-center justify-center">
              <div className="w-44 h-44 rounded-full shadow-md shadow-black border" />
              <div className="p-2 md:w-3/5 w-full ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                eligendi fuga repudiandae dolor saepe dolore delectus placeat
                sit reprehenderit. Excepturi ipsum non exercitationem. Id sunt,
                necessitatibus maiores inventore nam quibusdam.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonails;
