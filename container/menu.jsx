"use client";
import { MotionWrap } from "../wrappers";
import CardWithImage from "@/components/card";
import menuBg from "../public/assets/menu_bg.jpg";
import SliderMenu from "@/components/sliderMenu";
import Link from 'next/link'

const Menu = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-center text-primary font-Shrikhand underline text-4xl mt-20">
            Our Menu
          </h2>
          <div className="flex justify-center">
            <p className="w-[80vw] font-Kalam text-xl">
              <span className="font-bold text-primary ">
                The ultimate dining experience.{" "}
              </span>
              From our friendly staff to our cozy atmosphere, we make sure you
              feel at home. Enjoy our mouthwatering dishes and our amazing
              service. Explore our diverse menu and discover new cuisines from
              all over india.😊
            </p>
          </div>
        </div>

        <div
          className="min-h-[70vh] w-screen flex items-center justify-center flex-col"
          style={{
            backgroundImage: `url(${menuBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="border-2 bg-primary/70 border-primary rounded-md mt-2">
            <h2 className="text-white font-Shrikhand text-2xl mx-4 my-2">
              Our Popular Items
            </h2>
          </div>
          <SliderMenu />
          
        </div>
        <Link href="/menu">
        <div className="border-2 bg-primary cursor-pointer border-primary rounded-md mt-2 w-60 select-none">
            <h3 className="text-white font-Shrikhand text-2xl mx-4 my-2">
              Open Full Menu
            </h3>
          </div></Link>
      </div>
    </>
  );
};

export default MotionWrap(Menu, "bg-white", "Menu");
