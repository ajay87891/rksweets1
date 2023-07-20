'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CardWithImage from './card';
import { urlFor, client } from "../constants/client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function SliderMenu() {
    const [slides, setSlides] = useState();

  useEffect(() => {
    const query = '*[_type == "homemenu"]';

    client.fetch(query).then((data) => setSlides(data));
  }, []);
  return (
    <>
    <div className='w-[80vw]'>
        {slides?
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div onClick={()=>props.setopenModal('pop-up')}>
                    <CardWithImage
                      imgUrl={urlFor(slide.imageurl)}
                      description={slide.dishdesc}
                      title={slide.dish}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
       
      </Swiper>:null}
      </div>
    </>
  );
}
