import ContactComponent from "@/components/contact";

const Footer = () => {
  return (
    <>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className=" ">
        <ContactComponent />
        <div className="mb-5">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2023 RK Sweets™ . All Rights Reserved.
          </span>
          <span class="block text-xs text-gray-500 text-center dark:text-gray-400">
            Designed and Devlpoped By{" "}
            <a href="https://ajaysingh.live/" class="hover:underline">
              Ajay Singh
            </a>{" "}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
