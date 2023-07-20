"use client";
import { MotionWrap } from "../wrappers";
import CardWithImage from "@/components/card";
import menuBg from '../public/assets/menu_bg.jpg'
import SliderMenu from "@/components/sliderMenu";

const Menu = () => {
  return (
    <>
    <div className="flex flex-col">
      <div>
      <h2 className="text-center text-primary font-Shrikhand underline text-4xl mt-20">
        Our Menu
      </h2>
      <div className="flex justify-center">
        <p className="w-[80vw] font-Kalam text-xl">
          <span className="font-bold text-primary ">
            The ultimate dining experience.{" "}
          </span>
          From our friendly staff to our cozy atmosphere, we make sure you feel
          at home. Enjoy our mouthwatering dishes and our amazing service.
          Explore our diverse menu and discover new cuisines from all over
          india.😊
        </p>
      </div>
     
     
    </div>
    
    <div
        className="min-h-[70vh] w-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${menuBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
         <SliderMenu/>
      </div>
      </div>
    </>
  );
};

export default MotionWrap(Menu, "bg-white", "Menu");
