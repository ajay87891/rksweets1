"use client";

import PagesNavbar from "@/components/PagesNavBar";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          About Us
        </h1>

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
    </>
  );
}
