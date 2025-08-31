
'use client'

import PagesNavbar from "@/components/PagesNavBar";
import a from '../../public/assets/1.png'
import b from '../../public/assets/2.png'
import c from '../../public/assets/3.png'
import d from '../../public/assets/4.png'
import e from "../../public/assets/5.png"
import f from "../../public/assets/6.png"
import Link from "next/link";




export default function Page() {
  
  

    
    
 
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">Full menu</h1>
        <div className="w-screen wrap flex flex-wrap">
            <img className="md:w-[50vw]" src={a.src} />
            <img className="md:w-[50vw]" src={b.src} />
            <img className="md:w-[50vw]" src={c.src} />
            <img className="md:w-[50vw]" src={d.src} />
            <img className="md:w-[50vw]" src={e.src} />
            <img className="md:w-[50vw]" src={f.src} />


        </div>
        
        <div className="flex flex-col items-center justify-center mt-2">
        <Link href="/menu" ><button class="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none ">Tryout Our Dynamic Menu by clicking here</button></Link>
            <Link href="/" ><button
          type="button"
          class="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
        >
          Open Home Page
        </button></Link></div>
        
      </div>
    </>
  );
}