'use client'
import React from "react";
import { motion } from "framer-motion";
//import { images } from "../constants";
//import bg from "../public/assets/bgIMG.png";
//import {AppWrap} from "../wrapper";
import Typewriter from "typewriter-effect";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <div
      className="pt-32 bg-cover bg-repeat bg-center relative bg header flex items-center justify-center min-w-screen md:flex-row md:items-start flex-col min-h-screen"
      style={{
        /*backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",*/
      }}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className=" header-info flex-[0.65] flex flex-col justify-start items-start h-full lg:w-full mr-0"
      >
        <div className=" header-badge w-full flex justify-end items-end flex-col space-y-4">
          <div className=" badge-cmp min-w-[230px] flex items-center justify-center  2xl:py-8 2xl:px-16 py-4 px-8 border-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl">
            
            <div className="ml-5">
              <p className=" text-gray-700 text-xl 2xl:text-2xl mb-2  text-left">
                RK Sweets
              </p>
              <span className=" text-gray-700 text-xl 2xl:text-2xl w-full uppercase text-right">
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
      
      
    
    </div>
  );
};

export default Header;
