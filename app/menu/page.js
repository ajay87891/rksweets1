"use client";
import { useState, useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import { urlFor, client } from "../../constants/client";

import CardCategory from "@/components/MenuPageComponets/card";

export default function Menu() {
  const [category, setCategory] = useState();

  useEffect(() => {
    const query = '*[_type == "menucategory"]';

    client.fetch(query).then((data) => setCategory(data));
  }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>
      <div className="mt-24 lg:mt-32 flex justify-center items-center flex-col">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl">
          Menu
        </h1>
        <p className="font-Kalam text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">Please Select from categories below</p>
      </div>
      <div className="  flex justify-center   max-w-screen  min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  auto-cols-max mx-auto">
          {category?.map((cat, index) => {
            return (
              <div key={index} className="">
                <CardCategory
                  slug={cat.slug}
                  title={cat.name}
                  image={cat.imageurl ? urlFor(cat.imageurl) : null}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
