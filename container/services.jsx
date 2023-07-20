'use client'
import {MotionWrap} from "../wrappers";
import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../constants/client";


const Services = () => {
  
    const [services, setservices] = useState(undefined);
    useEffect(() => {
      const query = '*[_type == "services"]'
      client.fetch(query).then((data)=>{setservices(data)
      console.log(data)})
      console.log(services);
    }, []);
    return(

        <div className="min-h-screen">
      <h2 className="text-center text-primary font-Shrikhand underline text-4xl mt-20">Our Services</h2>
      <div className="flex justify-center">
        <p className="w-[80vw] font-Kalam text-xl">
          <span className="font-bold text-primary ">More than just food. </span>
           We offer catering, delivery, takeout, and online ordering. We Provide Best Arrangements for Marriages & Parties, Banquet Hall.
        </p>
      </div>
      {services?
      <div className='flex justify-center items-start flex-wrap mt-8'>{
        services.map((service, index)=>(
          <motion.div 
            whileInView={{x:[-200,0],opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:"tween"}}
            className="w-48 flex justify-start items-start flex-col m-8 "
            key={service.title + index}
          >
            <img src={urlFor(service.imageurl)} alt={service.title} className="w-full h-44 rounded-md object-cover"/>
            <h2 className=" text-xl font-bold mt-5" >{service.title}</h2>
            <p className=" p-text mt-5" >{service.description}</p>




          </motion.div>
        ))



      }</div>:null}
    </div>
    );

};

export default MotionWrap(Services, 'bg-white','Services');
