'use client'
import { useState,useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import { urlFor, client } from "../../constants/client";
import Link from "next/link";

export default function Menu() {
  const [category, setCategory] = useState();

  useEffect(() => {
    const query = '*[_type == "menucategory"]';

    client.fetch(query).then((data) => setCategory(data));
  }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 bg-cover bg-repeat bg-center relative  flex items-center justify-start min-w-screen flex-col min-h-screen">
      {category?.map((cat, index) => {
              return (
                <div key={index}>

                
                <Link href={`/menu/${cat.slug}`} ><button className="border-primary">{cat.name}</button></Link>
                </div>

              )})}
      </div>
    </>
  );
}
