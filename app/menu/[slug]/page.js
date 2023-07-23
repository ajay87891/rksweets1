
'use client'
import { useState,useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import {  client } from "../../../constants/client";
import svg from "../../../public/assets/dot.svg";


export default function Page({ params }) {
  const [category, setCategory] = useState();

  useEffect(() => {
    const query = `*[_type == "dish" && category->slug == '${params.slug}']
    {name,price,"category":category->name}`;

    client.fetch(query).then((data) => setCategory(data));
    
  }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>
      {category?<h1 className="text-primary font-Shrikhand pt-24 lg:pt-32 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">{category[0].category}</h1>:null}
      
      <div className="  flex items-center  flex-col min-h-screen">
      
      {category?.map((cat, index) => {
              return (
                <div key={index} className=" flex justify-center items-center py-2">

                <h3 className="text-sm md:text-2xl lg:text-4xl text-primary w-52 sm:w-72 md:w-72 lg:w-96">{cat.name}</h3>
                <img className="hidden md:block w-72" src={svg.src}/>
                <div className="text-sm md:text-2xl lg:text-4xl text-primary  px-8">{cat.price}<span>&#x20B9;</span></div>
                </div>
              )})}
      </div>
    </>
  );
}
