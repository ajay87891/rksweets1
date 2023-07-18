'use client'
import React,{useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { urlFor, client } from "../constants/client";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import slide_image_1 from '../public/assets/img_1.png';
// import slide_image_2 from '../public/assets/img_2.png';
// import slide_image_3 from '../public/assets/img_3.png';
// import slide_image_4 from '../public/assets/img_4.png';
// import slide_image_5 from '../public/assets/img_5.png';
// import slide_image_6 from '../public/assets/img_6.png';
// import slide_image_7 from '../public/assets/img_7.png';

const Carousel = () =>{
  
    
    const [slides, setSlides] = useState([]);
    useEffect(() => {
      const query = '*[_type == "poster"]';
      
      client.fetch(query).then((data) => setSlides(data));
      
      
      
      
    }, []);
    
  return (
    <div className="container w-[80vw] ">
      
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container "
      >
        {
          slides.map((slide, index)=>(<SwiperSlide> <div className="">
            {console.log(slide.imageurl)}
          <img src={urlFor(slide.imageurl)} alt="slide_image1" className="w-72 h-72 object-cover" />
    </div></SwiperSlide>))
        }
        {/* <SwiperSlide>
            <div className="">
                <img src={slide_image_1.src} alt="slide_image1" className="w-72 h-72 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7.src} alt="slide_image" className="w-72 h-72 object-cover"/>
        </SwiperSlide> */}

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
  );
}
export default Carousel;
