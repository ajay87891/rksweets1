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
              <h2 className=" text-primary  font-Shrikhand text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-2 text-left">
                Fresh and Fast: The Best Place for Healthy and Delicious Meals
              </h2>
              <p className=" text-xs sm:text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-Kalam pb-5">
                If you’re looking for a place to enjoy a healthy and delicious
                meal, look no further than Fresh and Fast. We use only the
                freshest ingredients and prepare them in a fast and convenient
                way.
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
                <h3 className="text-primary  font-Shrikhand text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl mb-2 text-left px-2">
                <span className="underline">R.K. Sweets:</span> The Ultimate Destination for Food Lovers
                </h3>{" "}
                <p className="text-xs sm:text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-Kalam px-8">
                Spice It Up is the ultimate destination for Indian food lovers. Whether you like it mild or hot, sweet or sour we have something for you.. You can choose from our wide range of dishes, such as samosas, korma, momos, paneer, lassi, and more, all made with fresh and quality ingredients
                </p>
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
