"use client";
import { useState, useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import { client } from "../../../constants/client";
import svg from "../../../public/assets/dot.svg";
import Link from "next/link";

export default function Page({ params }) {
  const [category, setCategory] = useState();

  useEffect(() => {
    const query = `*[_type == "dish" && category->slug == '${params.slug}' ] | order(_createdAt asc)
    {name,price,"category":category->name}`;

    client.fetch(query).then((data) => setCategory(data));
  }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>
      {category ? (
        <h1 className="text-primary font-Shrikhand pt-24 lg:pt-32 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          {category[0].category}
        </h1>
      ) : null}

      <div className="  flex items-center  flex-col min-h-screen">
        {category?.map((cat, index) => {
          return (
            <div key={index} className=" flex justify-center items-center py-2">
              <h3 className="text-sm md:text-2xl lg:text-4xl text-primary w-52 sm:w-72 md:w-72 lg:w-[40rem]">
                {cat.name}
              </h3>
              <img className="hidden md:block w-72" src={svg.src} />
              <div className="text-sm md:text-2xl lg:text-4xl text-primary min-w-[10rem] px-8">
                {cat.price}
                <span>&#x20B9;</span>
              </div>
            </div>
          );
        })}
       
        <a target="_blank" href="https://link.zomato.com/xqzv/rshare?id=17236117864b9edd" ><button
          type="button"
          className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
        >
          Open Zomato to order Online
        </button></a>
        <Link href="/menu" ><button
          type="button"
          className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
        >
          Return
        </button></Link>
      </div>
    </>
  );
}
