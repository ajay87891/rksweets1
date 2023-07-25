"use client";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import fb from "../public/assets/icons/fb.png";
import fbh from "../public/assets/icons/fbh.png";
import insta from "../public/assets/icons/in.png";
import inh from "../public/assets/icons/inh.png";
// import tw from "../public/assets/icons/tw.png";
// import twh from "../public/assets/icons/twh.png";
// import yt from "../public/assets/icons/yt.png";
// import yth from "../public/assets/icons/yth.png";
import wa from "../public/assets/icons/wa.png";
import wah from "../public/assets/icons/wah.png";

export default function ContactComponent() {
  return (
    <div className="">
      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-gray-50">
          <div className="pt-3 pb-20 lg:py-8">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl  tracking-tight font-Shrikhand text-warm-gray-900 sm:text-5xl lg:text-6xl">
                Get in <span className="text-primary">touch</span>
              </h1>
              <p className="mt-6 text-xl font-Kalam text-warm-gray-500 max-w-3xl">
                Have a question, comment, or compliment? We’d love to hear from
                you 😊
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section className="relative" aria-labelledby="contact-heading">
          <div
            className="absolute w-full h-1/2 bg-warm-gray-50"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-primary"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primary to-purple-700 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Contact information
                  </h3>

                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dd className=" text-purple-50">
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/XTUGi7V49prXAw9bA"
                        className="flex text-base"
                      >
                        <LocationMarkerIcon
                          className="flex-shrink-0 w-6 h-6 text-purple-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          Opp. Federal Mogul Goetze India. Rajpura Road.
                          Bahadurgarh (Patiala)
                        </span>
                      </a>
                    </dd>
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className=" text-purple-50">
                      <a href="tel:+911752381383" className="flex text-base">
                        <PhoneIcon
                          className="flex-shrink-0 w-6 h-6 text-purple-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">0175-2381383</span>
                      </a>
                    </dd>
                    <dd className=" text-purple-50">
                      <a href="tel:+919877211141" className="flex text-base">
                        <PhoneIcon
                          className="flex-shrink-0 w-6 h-6 text-purple-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">9877211141</span>
                      </a>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className=" text-purple-50">
                      <a
                        href="mailto:Rksweets083@gmail.com"
                        className="flex text-base"
                      >
                        <MailIcon
                          className="flex-shrink-0 w-6 h-6 text-purple-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Rksweets083@gmail.com</span>
                      </a>
                    </dd>
                  </dl>
                  <h3 className="text-lg font-medium text-white mt-10">
                    GSTIN
                  </h3>
                  <dl className="mt-2 ">
                    <dt>
                      <span className="sr-only">GST Number</span>
                    </dt>
                    <dd className=" text-purple-50">
                      
                        
                        <span className="ml-3">
                        03AANFR5881K1ZO
                        </span>
                      
                    </dd>
                    </dl>
                  
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 flex flex-col items-center space-y-4 justify-center">
                  <p className="text-lg font-bold text-primary font-Kalam ">
                    Thank you for choosing R.K. Sweets. We hope you enjoyed your
                    meal and our service. Please come back soon and share your
                    experience with others.
                  </p>
                  <div className="flex space-x-8">
                    <a target="_blank" href="https://www.facebook.com/rksweets.bakers?mibextid=LQQJ4d" className="group">
                      <span className="inline group-hover:hidden">
                        <img src={fb.src} />
                      </span>
                      <span className="hidden group-hover:inline">
                        <img src={fbh.src} />
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="https://instagram.com/rk_sweets_bakers?igshid=MmIzYWVlNDQ5Yg=="
                      className="group"
                    >
                      <span className="inline group-hover:hidden">
                        <img src={insta.src} />
                      </span>
                      <span className="hidden group-hover:inline">
                        <img src={inh.src} />
                      </span>
                    </a>
                    {/* <a target="_blank"  href="" className="group">
                      <span className="inline group-hover:hidden">
                        <img src={tw.src} />
                      </span>
                      <span className="hidden group-hover:inline">
                        <img src={twh.src} />
                      </span>
                    </a> */}
                    {/* <a target="_blank"  href="" className="group">
                      <span className="inline group-hover:hidden">
                        <img src={yt.src} />
                      </span>
                      <span className="hidden group-hover:inline">
                        <img src={yth.src} />
                      </span>
                    </a> */}
                    <a
                      target="_blank"
                      href="https://wa.me/+9877211141"
                      className="group "
                    >
                      <span className="inline group-hover:hidden">
                        <img className="w-[39px]" src={wa.src} />
                      </span>
                      <span className="hidden group-hover:inline">
                        <img className="w-[39px]" src={wah.src} />
                      </span>
                    </a>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75680.57363831323!2d76.41348824079563!3d30.361011377701832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fd7f6707d4365%3A0x4219549d526498fa!2sR.k%20Sweets%20and%20Bakers!5e0!3m2!1sen!2sin!4v1690273003192!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    <style jsx>{"border:0;"}</style>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
