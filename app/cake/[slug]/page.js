"use client";
import { useState, useEffect } from "react";
import PagesNavbar from "@/components/PagesNavBar";
import { urlFor, client } from "../../../constants/client";
import svg from "../../../public/assets/dot.svg";
import Link from "next/link";
import PopUpModalCake from "@/components/cakemodal";



export default function Page({ params }) {
  const [openModal, setOpenModal] = useState();
  const [category, setCategory] = useState();
  const [selected, setSelected] = useState();
  
  const [heading, setHeading] = useState();
  const [url,setUrl] = useState();
  
  const refresh = ()=>{
    try{
      let shuffle = selected.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
     
    setCategory(shuffle.slice(0, 30));
    }
    catch{
    
    }
    
    
  }
  

  useEffect(() => {
    if (params.slug === "random-cakes") {
     
      const queryy = `*[_type == "cake"]
    {name,imageurl}`;
      client.fetch(queryy).then((data) => {

        setSelected(data)
        // Shuffle array
        const shuffled = data.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
         
        setCategory(shuffled.slice(0, 30));

        setHeading("Random Cakes");
      });
    } else {
      const query = `*[_type == "cake" && category->slug == '${params.slug}']
    {name,imageurl,"category":category->name}`;
      client.fetch(query).then((data) => {
        setCategory(data);
        try {
          setHeading(data[0].category);
        } catch {
          setHeading("Page Not Found");
        }
      });
    }
  }, []);
  function modalcontrol(data){
    setOpenModal(data);
  };
  return (
    <>
      <PagesNavbar></PagesNavbar>
      <h1 className="text-primary font-Shrikhand pt-24 lg:pt-32 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
        {heading}
      </h1>

      <div className="  grid grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  auto-cols-max mx-auto ">
        {category?.map((cat, index) => {
          return (
            <div
              key={index}
              
              className=" mt-4 mx-auto border border-primary rounded-lg shadow cursor-pointer"
            >
              <img
              onClick={()=>{modalcontrol('pop-up');
              setUrl(urlFor(category[index].imageurl))
              }}
                className=" md:w-48 md:h-48 w-36 h-36 lg:w-56 lg:h-56 rounded-lg"
                src={urlFor(cat.imageurl)}
              />
            </div>
          );
        })}
      </div>
      <PopUpModalCake openModal={openModal} url={url} setopenModal={modalcontrol} message="Please click below to Send us image of cake on Whatsapp for Enquiry" btnText="Send On WhatsApp"/>
      
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
      {
        (params.slug === "random-cakes")?<button
        type="button"
        onClick={refresh}
        className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
      >
        Load More
      </button>:null
      }
        <Link href="/cake">
          <button
            type="button"
            className="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
          >
            Return
          </button>
        </Link>
      </div>
    </>
  );
}
