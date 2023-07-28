"use client";
import { useState, useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import { urlFor, client } from "../../../constants/client";
import svg from "../../../public/assets/dot.svg";
import Link from "next/link";


export default function Page({ params }) {
  const [category, setCategory] = useState();
  
  const [heading, setHeading] = useState();

  useEffect(() => {
    if (params.slug === "random-cakes") {
     
      const queryy = `*[_type == "cake"]
    {name,imageurl}`;
      client.fetch(queryy).then((data) => {
        ;
        // Shuffle array
        const shuffled = data.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 20);
        setCategory(selected);

        setHeading("Random Cakes");
      });
    } else {
      const query = `*[_type == "cake" && category->slug == '${params.slug}']
    {name,imageurl,"category":category->name}`;
      client.fetch(query).then((data) => {
        setCategory(data);
        try {
          setHeading(data[0].category);
        } catch {
          setHeading("Page Not Found");
        }
      });
    }
  }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>
      <h1 className="text-primary font-Shrikhand pt-24 lg:pt-32 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
        {heading}
      </h1>

      <div className="  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  auto-cols-max mx-auto ">
        {category?.map((cat, index) => {
          return (
            <div
              key={index}
              className=" mt-4 mx-auto border border-primary rounded-lg shadow"
            >
              <img
                className=" w-48 h-48 rounded-lg"
                src={urlFor(cat.imageurl)}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Link href="/cake">
          <button
            type="button"
            className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
          >
            Return
          </button>
        </Link>
      </div>
    </>
  );
}
