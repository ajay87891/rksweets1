
'use client'

import PagesNavbar from "@/components/PagesNavBar";
import Image from 'next/image'
import a from '../../public/assets/1.webp'
import b from '../../public/assets/2.webp'
import c from '../../public/assets/3.webp'
import d from '../../public/assets/4.webp'




export default function Page() {
  
  

    
    
 
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">Full menu</h1>
        <div className="w-screen flex flex-col">
            <Image src={a} />
            <Image src={b} />
            <Image src={c} />
            <Image src={d} />


        </div>
        
      </div>
    </>
  );
}