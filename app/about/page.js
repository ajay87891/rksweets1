"use client";

import PagesNavbar from "@/components/PagesNavBar";
import storeimage from "../../public/assets/storeimage.jpeg"

import Link from "next/link";

export default function Page() {
  return (
    <>
      <PagesNavbar></PagesNavbar>

      <div className=" pt-24 lg:pt-32 ">
        <h1 className="text-primary font-Shrikhand text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
        <p className="w-[70vw] font-Lora text-xl">
          We are writing to share some exciting history, about our business and
          the remarkable journey we have embarked upon since our establishment
          in 1983. As a valued firm, we believe it's important to keep you
          updated on our progress and the new opportunities that lie ahead.
          <br />
          With immense pride, we can confidently say that our commitment to
          providing the finest quality services has remained unwavering
          throughout the years.
          <br />
          Over the past four decades, we have built a strong reputation for
          excellence and customer satisfaction, becoming a trusted name in the
          industry. Our journey has been one of continuous growth and
          innovation, fueled by our passion for delivering unparalleled
          experiences to our patrons.
          <br />
          Today, we are thrilled to announce that we have expanded our
          operations, creating a new empire that offers an even wider range of
          services to meet our customers' evolving needs.
          <br /></p> <img className="w-80" src={storeimage.src}/> </div> <p className="px-10 text-justify font-Lora text-xl">
          In addition to our renowned restaurant, we have ventured into the
          realm of sweets, offering a delectable assortment of traditional and
          contemporary treats to satisfy every palate.
          <br />
          Our confectionery delights have already gained popularity, and we are
          excited to continue delighting our customers with our unique flavors
          and artistic creations.
          <br />
          Furthermore, we have realized the dream of opening a splendid banquet
          hall that serves as an exquisite venue for various celebrations and
          events.
          <br />
          Whether it's a wedding, corporate gathering, or any other special
          occasion, our banquet hall provides an elegant ambiance, impeccable
          service, and top-notch amenities to create unforgettable memories for
          our guests.
          <br />
          Moreover, with a team of skilled bakers and pastry chefs, we are
          producing an array of freshly baked goods, ranging from artisan bread
          to mouthwatering pastries. Our bakery is a testament to our commitment
          to culinary excellence and our desire to cater to all aspects of our
          customers' desires.
          <br />
          We truly believe that our new ventures will not only enhance our
          customers' experience but also create new avenues for growth and
          prosperity. Our aim is to continue raising the bar in the industry,
          setting new standards for quality, innovation, and customer service.
          <br />
          As a valued business, we would be honored to have your support and
          guidance as we embark on this exciting phase of our journey. We would
          be delighted to arrange a meeting at your convenience to discuss
          potential collaborations or any ideas you may have regarding our new
          endeavors.
          <br />
          Thank you for your continued trust and partnership. We look forward to
          sharing more updates with you soon and to the possibility of working
          together to create remarkable experiences for our customers.
        </p>

        <div className="flex flex-col items-center justify-center mt-2">
          <Link href="/">
            <button
              type="button"
              class="text-white bg-primary hover:bg-violet-950 focus:ring-4 focus:ring-primary/70 font-medium font-Kalam rounded-lg text-xl  px-5 py-2.5 mr-2 mb-2   focus:outline-none "
            >
              Return
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
