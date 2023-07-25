"use Client";
import aboutbg from "../public/assets/aboutbg.png";
import about1 from "../public/assets/about1.jpeg";
import about2 from "../public/assets/about2.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-10 bg-primary/5">
      <div className=" flex justify-center">
        <div className="w-[90vw] relative min-h-[20rem]">
          <div className="md:absolute top-0 left-0  ">
            <img className="w-[90vw]" src={aboutbg.src} />
          </div>
          <div className="relative z-10">
            <div className=" md:w-[40vw] mt-4 px-4 ">
              <h2 className=" text-primary text font-Shrikhand text-xl md:text-2xl lg:text-5xl 2xl:text-7xl mb-2 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adip Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Aspernatur, eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:mt-24 lg:mt-36 xl:mt-52 2xl:mt-80 ">
        <div className="w-screen min-h-[20rem] bg-white mb-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50vw] flex justify-center items-center py-12 ">
              <img src={about1.src} className="md:w-[40vw] w-[80vw]" />
            </div>
            <div className="md:w-[50vw]  flex flex-col py-12 items-center justify-center ">
              <div className="md:w-[35vw]">
                
                <h3 className="text-4xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  sunt.
                </h3>{" "}
                <p className="px-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nulla sunt ullam! Temporibus officia deleniti quae assumenda provident, ullam fugiat voluptatem unde magni, dolore natus quidem id consequuntur nemo nostrum.</p>
              </div>
              <div className=" ">
                <img src={about2.src} className=" md:w-[30vw] pt-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
