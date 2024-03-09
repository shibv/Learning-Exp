import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import FooterLogo from "../assets/logo.svg";
import ContactUs from "./main/ContactUs";

const Footer = () => {
  return (
    <div className="w-full flex relative gap-6 flex-col ">
      <ContactUs />
      <div className="bg-gray-100 sm:mt-10 ">
        <section className="max-w-[1200px] mx-auto">
          <div className=" grid md:grid-cols-3 py-5">
            <div className=" py-8 px-4 ">
              <h1 className="sm:text-3xl text-gray-500 text-xl font-semibold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={FooterLogo} alt="Logo" className="max-w-[50px]" />
                Learning Exp.
              </h1>
              {/* Social Handle */}
              <div className="flex items-center gap-3 text-gray-500 mt-6">
                <a href="#" className="border-2 p-2 rounded-full border-gray-400">
                  <FaPinterestP className="text-xs" />
                </a>
                <a href="#" className="border-2 p-2 rounded-full border-gray-400">
                  <FaFacebookF className="text-xs" />
                </a>
                <a href="#" className="border-2 p-2 rounded-full border-gray-400">
                  <FaTwitter className="text-xs" />
                </a>
                <a href="#" className="border-2 p-2 rounded-full border-gray-400">
                  <RiLinkedinFill className="text-xs" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-sm text-xl font-semibold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className={`flex text-gray-500 flex-col text-sm font-semibold gap-3`}>
                    <li className="cursor-pointer ">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Login</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-sm text-sm font-semibold sm:text-left text-justify mb-3">
                    Support
                  </h1>
                  <ul className="flex text-gray-500 text-sm font-semibold flex-col gap-3">
                    <li className="cursor-pointer">FAQ</li>
                    <li className="cursor-pointer">How it</li>
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Reporting</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h1 className="sm:text-sm text-sm font-semibold sm:text-left text-justify mb-3">
                    Contact us
                  </h1>
                  {/* <ul className="list-disc list-inside"> */}
                  <ul className="flex text-gray-500 text-sm font-semibold flex-col gap-3">
                    <li className="cursor-pointer">+91 973488272</li>
                    <li className="cursor-pointer">test@gmail.com</li>
                    <li className="cursor-pointer">Pune City </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500  items-center px-6 sm:px-20 mb-6 ">
            <div className="text-center ">
              @copyright 2024 All rights reserved || Made with ❤️ by Shiv
              Shankar
            </div>
            <div className="text-center ">Terms of use | Privacy policy </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
