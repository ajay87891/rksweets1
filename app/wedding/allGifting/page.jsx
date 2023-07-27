"use client";

import PagesNavbar from "@/components/PagesNavBar";
import { useEffect,useState } from "react";
import { urlFor, client } from "../../../constants/client";
// import storeimage from "../../public/assets/storeimage.jpeg";
// import Footer from "@/container/footer";
// import w1 from "../../public/assets/w1.webp";
// import w2 from "../../public/assets/w2.webp";
// import w3 from "../../public/assets/w3.webp";
import Link from "next/link";
// import WeddingDiv from "@/components/weadingpage/wedinggrid";
// import { motion } from "framer-motion";
// import GiftDiv from "@/components/weadingpage/giftingdrid";

export default function Page() {
    const [category, setCategory] = useState();

    useEffect(() => {
      const query = '*[_type == "gift"]';
  
      client.fetch(query).then((data) => setCategory(data));
    }, []);
  return (
    <>
      <PagesNavbar></PagesNavbar>



    
  
    <div className="w-screen px-4  pt-24 lg:pt-32 ">
    <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          All Gift Boxes
        </h1>
      <div className="grid  grid-cols-2  sm:grid-cols-3 xl:grid-cols-4 space-y-6 auto-cols-max mx-auto">
        {category?.map((cat, index) => {
          return (
            <div key={index} className="w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 overflow-hidden flex items-center justify-center">
              <img  src={urlFor(cat.imageurl)} className=" w-40 md:w-56 lg:w-80 object-cover" />
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mt-2">
          <Link href="/wedding">
            <button
              type="button"
              class="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
            >
              Return
            </button>
          </Link>
        </div>
</>
  )}