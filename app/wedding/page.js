"use client";

import PagesNavbar from "@/components/PagesNavBar";
import storeimage from "../../public/assets/storeimage.jpeg"
import Footer from "@/container/footer";
import w1 from "../../public/assets/w1.webp"
import w2 from "../../public/assets/w2.webp"
import w3 from "../../public/assets/w3.webp"
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          Wedding & Gifting
        </h1>
        <div 
           className="w-[90vw] relative min-h-[20rem]">
          <div className="md:absolute top-0 left-0  ">
            <img className="overflow-hidden" src={w2.src} />
          </div>
          <div className="relative z-10">
            <div className=" md:w-[40vw] mt-4 px-4 ">
              
              <h2 className=" text-primary  font-Shrikhand text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-2 text-left">
                Fresh and Fast: The Best Place for Healthy and Delicious Meals
              </h2>
              <p className=" text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-Kalam pb-5">
                If you’re looking for a place to enjoy a healthy and delicious
                meal, look no further than Fresh and Fast. We use only the
                freshest ingredients and prepare them in a fast and convenient
                way.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-2">
          <Link href="/">
            <button
              type="button"
              class="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
            >
              Return
            </button>
          </Link>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
