
'use client';
import CakeCard from "./CakeCard";
import { urlFor, client } from "../constants/client";
import { useState, useEffect } from "react";


export default function CakeDiv() {
    const [category, setCategory] = useState();

  useEffect(() => {
    const query = '*[_type == "homecake"]';

    client.fetch(query).then((data) => setCategory(data));
  }, []);
  return (
    
<div className="w-screen relative ">
    <div className="px-4 cards relative ">
        <div className="flex flex-wrap justify-center  space-x-4 ">
        
        {category?.map((cat, index) => {
            return (
              <div key={index} >
                <CakeCard
                  image={cat.imageurl ? urlFor(cat.imageurl) : null}
                />
              </div>
            );
          })}
        
        </div>
    </div>
    <div className="overlay absolute top-0 left-0 z-10 w-screen h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-black/50"></div>



</div>

  )
}