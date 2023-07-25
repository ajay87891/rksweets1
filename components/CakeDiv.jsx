"use client";
import CakeCard from "./CakeCard";
import { urlFor, client } from "../constants/client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
              <div key={index}>
                <CakeCard image={cat.imageurl ? urlFor(cat.imageurl) : null} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="overlay absolute top-0 left-0 z-10 w-screen h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-black/50 flex items-end justify-center md:justify-end md:items-center">
        <Link href="/cake">
          <button
            type="button"
            className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none flex flex-wrap items-center justify-center"
          >
            View All <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}
