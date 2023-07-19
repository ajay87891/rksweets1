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

export default function Carousel(props)  {
  
  const [slides, setSlides] = useState();

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
              delay: 1500,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container "
          >
            {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div onClick={()=>props.setopenModal('pop-up')}>
                    <img
                      src={urlFor(slide.imageurl)}
                      alt="slide_image"
                      className="w-72 h-72 object-cover rounded-xl"
                    />
                  </div>
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

