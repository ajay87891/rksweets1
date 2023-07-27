"use client";

import { urlFor, client } from "../../constants/client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../styles/carousel.css"


export default function WeddingDiv() {
  const [category, setCategory] = useState();

  useEffect(() => {
    const query = '*[_type == "wedding"]';

    client.fetch(query).then((data) => setCategory(data));
  }, []);
  return (
    <>
    <div className="w-screen hidden md:block ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-6 auto-cols-max mx-auto">
        {category?.map((cat, index) => {
          return (
            <div key={index} className="w-80 h-80 overflow-hidden flex items-center justify-center">
              <img  src={urlFor(cat.imageurl)} className="w-80 object-cover" />
            </div>
          );
        })}
      </div>
    </div>
    <div className="container md:hidden w-[80]">
    {category ? (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {category?.map((cat, index) => {
              return (
                <SwiperSlide key={index}>
                  <div key={index} className="w-72 h-72 object-cover rounded-xl   ">
              <img  src={urlFor(cat.imageurl)} className="w-72 " />
            </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
        </div>
    </>
  );
}
