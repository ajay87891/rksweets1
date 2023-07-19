"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor, client } from "../constants/client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const Carousel = () => {
  const [slides, setSlides] = useState();
  const [swiper, setSwiper] = useState(null);
  
  useEffect(() => {
    const query = '*[_type == "poster"]';

    client.fetch(query).then((data) => setSlides(data));
    
    
  }, []);


  return (
    <>
      {slides ? (
        <div className="container w-[80vw] ">
          <Swiper
            
            
            effect={"coverflow"}
            onSwiper={setSwiper}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container "
          >
            {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={urlFor(slide.imageurl)}
                    alt="slide_image"
                    className="w-72 h-72 object-cover"
                  />
                </SwiperSlide>
              );
            })}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      ) : null}
    </>
  );
};
export default Carousel;
