"use client";

import PagesNavbar from "@/components/PagesNavBar";
import storeimage from "../../public/assets/storeimage.jpeg";
import Footer from "@/container/footer";
import w1 from "../../public/assets/w1.webp";
import w2 from "../../public/assets/w2.webp";
import w3 from "../../public/assets/w3.webp";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          Wedding & Gifting
        </h1>
        <div className="w-screen relative ">
          <div className="md:absolute top-0 left-0  ">
            <img className="w-screen h-80 object-cover " src={w2.src} />
          </div>
          <div className="relative z-10 ">
            <div className=" md:w-screen mt-4 h-80  bg-white/25 flex items-center justify-center">
              <h2 className=" text-primary px-8  font-Shrikhand text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-2 text-center">
                Royal Invitations by R.K. Sweets - Premium collection of
                invitations and giftboxes for weddings and family celebrations.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-screen h-80 flex items-center justify-center">
          <div className="w-[90vw] md:w-[60vw] space-y-8">
            <h1 className="text-priamry text-center text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, nisi?
            </h1>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolorum facilis porro ipsum molestiae, labore fugiat,
              mollitia voluptas quidem voluptatem quia ipsa enim assumenda, ex
              molestias quisquam. Mollitia, eveniet dignissimos!
            </p>
          </div>
        </div>
        <div className="w-screen relative ">
          <div className="md:absolute top-0 left-0  ">
            <img className="w-screen h-80 object-cover " src={w3.src} />
          </div>
          <div className="relative z-10 ">
            <div className=" md:w-screen mt-4 h-80  bg-white/25 flex flex-col items-start justify-center">
              <h2 className=" text-primary px-8  font-Shrikhand text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-2 text-center">
                Every Giftbox - A piece of Art!
              </h2>
              <p className="md:w-[60vw] text-left px-3">
                Our sweets are as aesthetic as they are appetizing, Why
                compromise on giftboxes? Sindhi Sweets can offer you a wholesome
                solution with exquisite giftboxes, suave hampers, and
                handcrafted packaging. Like always, we are committed to testing
                our limits and provide impeccable service.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen h-80 flex items-center justify-center">
          <div className="w-[90vw] md:w-[60vw] space-y-8">
            <h1 className="text-priamry text-center text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, nisi?
            </h1>

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolorum facilis porro ipsum molestiae, labore fugiat,
              mollitia voluptas quidem voluptatem quia ipsa enim assumenda, ex
              molestias quisquam. Mollitia, eveniet dignissimos!
            </p>
          </div>
        </div>
        <div className="w-screen flex flex-wrap">
          <div className="md:w-[50vw] h-96">
            <div className=" h-96 flex items-center justify-center">
              <div className=" md:w-[50vw] space-y-8">
                <h1 className="text-priamry text-center text-2xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita, nisi?
                </h1>

                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolorum facilis porro ipsum molestiae, labore
                  fugiat, mollitia voluptas quidem voluptatem quia ipsa enim
                  assumenda, ex molestias quisquam. Mollitia, eveniet
                  dignissimos!
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[50vw] h-96">
            {" "}
            <img src={w1.src} className="w-screen h-96 object-cover" />
          </div>
        </div>
        <div className="mt-8 w-screen px-12 min-h-screen">
          <h2>Our Showcase</h2>

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
