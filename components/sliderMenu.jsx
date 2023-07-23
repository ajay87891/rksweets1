"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardWithImage from "./card";
import { urlFor, client } from "../constants/client";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function SliderMenu() {
  const [slides, setSlides] = useState();

  useEffect(() => {
    const query = '*[_type == "homemenu"]';

    client.fetch(query).then((data) => setSlides(data));
  }, []);
  return (
    <>
      <motion.div
        className="w-screen"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        {slides ? (
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
            {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* <div onClick={()=>props.setopenModal('pop-up')}> */}
                  <Link href="/menu"><CardWithImage
                    imgUrl={urlFor(slide.imageurl)}
                    description={slide.dishdesc}
                    title={slide.dish}
                  /></Link>
                  {/* </div> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </motion.div>
    </>
  );
}
