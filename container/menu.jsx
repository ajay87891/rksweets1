'use client'
import {MotionWrap} from "../wrappers";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-center text-primary font-Shrikhand underline text-4xl mt-20">Our Menu</h2>
      <div className="flex justify-center">
        <p className="w-[80vw] font-Kalam text-xl">
          <span className="font-bold text-primary ">The ultimate dining experience. </span>
          From our friendly staff to our cozy atmosphere, we make sure you feel
          at home. Enjoy our mouthwatering dishes and our amazing service.
          Explore our diverse menu and discover new cuisines from all over
          india.😊
        </p>
      </div>
    </div>
  );
};

export default MotionWrap(Menu, 'bg-white','Menu');
