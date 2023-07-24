"use Client";
import aboutbg from "../public/assets/aboutbg.png";
const About = () => {
  return (
    <div className="min-h-screen pt-10 bg-primary/5">
        <div className=" flex justify-center">
      <div className="w-[90vw] relative min-h-[20rem] ">
        <div className="md:absolute top-0 left-0  ">
          <img className="w-[90vw]" src={aboutbg.src} />
        </div>
        <div className="relative z-10">
            <div className=" md:w-[40vw] mt-4 px-4 ">
          <h2 className=" text-primary text font-Shrikhand text-xl md:text-2xl lg:text-5xl 2xl:text-7xl mb-2 text-left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nam ipsam quae, sequi possimus quibusdam praesentium dicta asperiores? Possimus, atque nostrum iste itaque odio alias ipsam excepturi accusamus eaque laudantium aperiam obcaecati molestias cumque nemo accusantium corporis neque. Magni necessitatibus eveniet delectus qui facere possimus excepturi, ex consequuntur voluptatem recusandae!</p></div>
        </div>
      </div></div>
    </div>
  );
};
export default About;
