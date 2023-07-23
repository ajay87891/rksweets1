"use client";

import Link from "next/link";
import Card from "react-animated-3d-card";

export default function CardCategory(props) {
  return (
    <div className="mt-4 mx-auto px-4">
      <Link href={`/${props.url}/${props.slug}`}>
        <Card
          style={{
            backgroundColor: "transparent",

            cursor: "pointer",
          }}
        >
          <div className="wrapper relative">
            <div className="absolute top-0 left-0 -z-10"><img src={props.image}></img></div>
            <button
              className={`w-80 h-32 relative z-10 ${
                props.image ? "bg-black/20" : "bg-primary"
              }  flex items-center justify-center`}
            >
              
              <div className="text-white text-xl md:text-2xl  lg:text-3xl 2xl:text-5xl ">{props.title}</div>
            </button>
          </div>
        </Card>
      </Link>
    </div>
  );
}
