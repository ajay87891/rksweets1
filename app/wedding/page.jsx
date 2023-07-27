"use client";

import PagesNavbar from "@/components/PagesNavBar";
import storeimage from "../../public/assets/storeimage.jpeg";
import Footer from "@/container/footer";
import w1 from "../../public/assets/w1.webp";
import w2 from "../../public/assets/w2.webp";
import w3 from "../../public/assets/w3.webp";
import Link from "next/link";
import WeddingDiv from "@/components/weadingpage/wedinggrid";
import { motion } from "framer-motion";
import GiftDiv from "@/components/weadingpage/giftingdrid";

export default function Page() {
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          Wedding & Gifting
        </h1>
        <motion.div
          whileInView={{ scale: [1.2, 1] }}
          transition={{ duration: 1, type: "tween" }}
          className="w-screen relative "
        >
          <div className="md:absolute top-0 left-0  ">
            <img className="w-screen h-80 object-cover " src={w2.src} />
          </div>
          <div className="relative z-10 hidden md:block ">
            <div className=" md:w-screen mt-4 h-80   bg-white/25 flex items-center justify-center"></div>
          </div>
        </motion.div>
        <div className="w-screen flex items-center justify-center">
          <div className="w-[90vw] md:w-[60vw] space-y-8">
            <h2 className=" text-primary px-8   font-Shrikhand text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-2 text-center ">
              Royal Invitations by R.K. Sweets - Premium collection of
              invitations and giftboxes for weddings and family celebrations.
            </h2>

            <p className="text-center font-Kalam  text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl ">
              <span className="font-semibold">Your wedding, your way.</span>{" "}
              Customize your wedding box with personalized gifts, decor, and
              accessories that match your style and budget. Whether you’re
              looking for a rustic, modern, or classic theme, we have the
              wedding box for you
            </p>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h2 className="text-primary  font-Shrikhand text-xl md:text-3xl lg:text-5xl 2xl:text-6xl text-center px-4">
            Our Wedding Boxes
          </h2>
          <WeddingDiv></WeddingDiv>
          <div className=" flex justify-center mt-4">
            <Link href="/wedding/allWedding">
              <button
                type="button"
                className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none flex flex-wrap items-center justify-center"
              >
                View All{" "}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ y: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1, type: "tween" }}
          className="w-screen relative "
        >
          <div className="md:absolute top-0 left-0  ">
            <img
              className="w-screen md:h-80 h-[100%] object-cover "
              src={w3.src}
            />
          </div>
          <div className="relative z-10 ">
            <div className=" md:w-screen mt-4 h-80  bg-white/25 flex flex-col items-start justify-center">
              <h2 className=" text-primary px-8  font-Shrikhand text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2 text-center">
                Every Giftbox - A piece of Art!
              </h2>
              <p className="md:w-[60vw] text-left px-3 font-Kalam font-bold lg:text-2xl">
                Our sweets are as aesthetic as they are appetizing, Why
                compromise on giftboxes? R.K. Sweets can offer you a wholesome
                solution with exquisite giftboxes, suave hampers, and
                handcrafted packaging. Like always, we are committed to testing
                our limits and provide impeccable service.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1, type: "tween" }}
          className="w-screen flex flex-wrap mt-16"
        >
          <div className="md:w-[50vw] h-56 md:h-96">
            <div className=" h-56 md:h-96 flex items-start md:items-center justify-center">
              <div className=" md:w-[50vw] space-y-8">
                <h1 className="text-primary font-Lugrasimo text-center text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold">
                Unwrap Joy: Discover the Perfect Gift Box Today!
                </h1>

                <p className="text-center font-Kalam">
                  At R.K. Sweets, we believe in the magic of giving.
                  Each box is carefully crafted to deliver heartfelt connections
                  and create lasting memories. From birthdays to weddings,
                  anniversaries to holidays, our gift boxes hold the power to
                  surprise and delight your loved ones.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[50vw] h-96">
            {" "}
            <img src={w1.src} className="w-screen h-96 object-cover" />
          </div>
        </motion.div>
        <div>
          <h2 className="text-primary mt-12 font-Shrikhand text-xl md:text-3xl lg:text-5xl 2xl:text-6xl text-center">
            Our Gifting Boxes
          </h2>
          <GiftDiv></GiftDiv>
          <div className=" flex justify-center mt-4">
            <Link href="/wedding/allGifting">
              <button
                type="button"
                className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none flex flex-wrap items-center justify-center"
              >
                View All{" "}
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
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
