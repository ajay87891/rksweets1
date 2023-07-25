"use client";
import ContactComponent from "@/components/contact";
import { MotionWrap } from "../wrappers";
const Footer = () => {
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 2xl:hidden" />
      <footer className=" ">
        <ContactComponent />
        <div className="mb-5">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2023 RK Sweets™ . All Rights Reserved.
          </span>
          <span className="block text-xs text-gray-500 text-center dark:text-gray-400">
            Designed and Devlpoped By{" "}
            <a href="https://ajaysingh.live/" className="hover:underline">
              Ajay Singh
            </a>{" "}
          </span>
        </div>
      </footer>
    </>
  );
};


export default MotionWrap(Footer, "bg-white", "contact")
