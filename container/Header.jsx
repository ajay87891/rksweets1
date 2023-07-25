'use client'
import React from "react";
import { motion } from "framer-motion";
//import { images } from "../constants";
import bg from "../public/assets/bg.webp";
//import {AppWrap} from "../wrapper";
import Typewriter from "typewriter-effect";
import Carousel from "@/components/carousel";
import PopUpModal from "@/components/modal";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState();
  
  // const scaleVariants = {
  //   whileInView: {
  //     scale: [0, 1],
  //     opacity: [0, 1],
  //     transition: {
  //       duration: 1,
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  function modalcontrol(data){
    setOpenModal(data);
  };
  
  return (
    <><a id="Home" />
    <div
      className=" pt-24 lg:pt-32 bg-cover bg-repeat bg-center relative  flex items-center justify-start min-w-screen flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className=" header-info flex-[0.65] flex flex-col justify-start items-start h-full lg:w-full mr-0"
      >
        <div className=" header-badge w-full flex justify-center items-center flex-col space-y-4">
          <div className=" badge-cmp min-w-[230px] flex items-center justify-center  2xl:py-8 2xl:px-16 py-4 px-8 bg-primary/90 border-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl backdrop-blur-sm">
            
            <div className="ml-5">
              <p className=" text-white text font-Shrikhand text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl mb-2  text-center">
                R.K. Sweets & Bakers
              </p>
              <span className=" text-white text-base md:text-xl lg:text-2xl 2xl:text-4xl w-full uppercase text-center">
              <Typewriter
                options={{
                  strings: ["Bakery", "Dine-IN", "Banquet"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
              
            </div>
          </div>

          
        </div>
      </motion.div>
      
      

      
      <PopUpModal openModal={openModal} setopenModal={modalcontrol} message="Do You Want To Open Zomato?" btnText="Open Zomato"/>
      <Carousel setopenModal={modalcontrol}/>
      
      
      
    
    </div>
    </>
  );
};

export default Header;
