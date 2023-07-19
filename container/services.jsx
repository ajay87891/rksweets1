'use client'
import {MotionWrap} from "../wrappers";

const Services = () => {
    return(

        <div className="min-h-screen">
      <h2 className="text-center text-primary font-Shrikhand underline text-4xl mt-20">Our Services</h2>
      <div className="flex justify-center">
        <p className="w-[80vw] font-Kalam text-xl">
          <span className="font-bold text-primary ">More than just food. </span>
           We offer catering, delivery, takeout, and online ordering. We Provide Best Arrangements for Marriages & Parties, Banquet Hall.
        </p>
      </div>
    </div>
    );

};

export default MotionWrap(Services, 'bg-white','Services');
