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

      <div className=" mt-24 lg:mt-32 flex justify-center   max-w-screen  min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2    xl:grid-cols-3  auto-cols-max mx-auto">
          {category?.map((cat, index) => {
            return (
              <div key={index} className="">
                
                <CardCategory
                  slug={cat.slug}
                  title={cat.name}
                  image={cat.imageurl?urlFor(cat.imageurl):null}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
