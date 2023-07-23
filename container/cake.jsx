"use client";
import { MotionWrap } from "../wrappers";
import CardWithImage from "@/components/card";
import menuBg from "../public/assets/menu_bg.jpg";
import SliderMenu from "@/components/sliderMenu";
import Link from "next/link";
import CakeDiv from "@/components/CakeDiv";

const Cake = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-primary/30">
        <div>
          <h2 className="text-center text-white  font-Shrikhand  text-4xl mt-20">
            <style jsx>{`
              h2 {
                text-shadow:
   -3px -2px 0 #582c4f,  
    2px -2px 0 #582c4f,
    -2px 2px 0 #582c4f,
     2px 2px 0 #582c4f;
              }
            `}</style>
            Our Custom Cakes
          </h2>
          <div className="flex justify-center">
            <p className="w-[80vw] font-Kalam text-xl">
              <span className="font-bold text-primary ">
                We bake your dreams come true 🍰
              </span>
              Whether you need a cake for a birthday, wedding, anniversary,
              graduation, or any other special event, we can make it happen. You
              can choose from our wide range of flavors, fillings, frostings,
              and decorations, or let us know your own ideas and preferences
            </p>
          </div>
        </div>

        <div
          className="min-h-[70vh] w-screen flex items-center justify-center flex-col"
          //   style={{
          //     backgroundImage: `url(${menuBg.src})`,
          //     backgroundSize: "cover",
          //     backgroundRepeat: "repeat",
          //     backgroundPosition: "center",
          //   }}
        >
          <div className="border-2 bg-primary/70 border-primary rounded-md mt-2">
            <h2 className="text-white font-Shrikhand text-2xl mx-4 my-2">
              Our Popular Cakes
            </h2>
          </div>
          <CakeDiv/>


          {/* <SliderMenu /> */}
        </div>
        {/* <Link href="/menu">
          <button className="border-2 bg-primary cursor-pointer border-primary rounded-md mt-2 w-60 select-none">
            <h3 className="text-white font-Shrikhand text-2xl mx-4 my-2">
              Open Full Menu
            </h3>
          </button>
        </Link> */}
      </div>
    </>
  );
};

export default MotionWrap(Cake, "bg-white", "Cake");
