/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonails = () => {
  return (
    <div id="/">
      <div className="flex items-center text-4xl font-bold justify-center">
        Reviews
      </div>

      <div className="p-10 relative  flex items-center justify-center border">
        <div className="absolute top-2 left-2 rounded-md bg-green-500 h-10 w-16 skew-y-12 rotate-12" />
        <div className="absolute bottom-10 right-5 bg-[#007f66] h-10 w-16 rounded-md skew-y-12 rotate-12" />
        <Splide
          hasTrack={false}
          aria-label="..."
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            autoHeight: true,
            perMove: 1,
            perPage: 1,
          }}
        >
          <SplideTrack>
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
            <SplideSlide>
              <div className="flex items-center justify-center border">
                <img src="images/im/hero.png" alt="image" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex items-center flex-wrap w-full h-full justify-center border p-5">
                <div className="lg:h-56 lg:w-56 w-2/5 h-56 rounded-full shadow-sm border"></div>
                <div className="flex-col flex w-full  md:w-3/5">
                  <div className="md:p-5">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus quia placeat explicabo accusantium qui harum
                      atque suscipit nobis et. Facere optio qui, minus iste
                      nobis labore quod dolores quo ea?
                    </p>
                  </div>
                  <p className="p-5">Amete Test</p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex items-center justify-center border">
                <img src="images/im/hero.png" alt="image" />
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="flex item-center justify-center relative border w-56">
            <div className="splide__arrows ">
              <button className="splide__arrow splide__arrow--prev">
                Prev
              </button>
              <button className="splide__arrow splide__arrow--next">
                Next
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonails;
