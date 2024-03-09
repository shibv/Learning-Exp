import React from "react";
import Navbar from "../Navbar";
import bgImg from "../../assets/bcg.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

function Main() {
  return (
    <div
      style={bgImage}
      className="w-full text-white flex flex-col gap-6 h-screen rounded-br-3xl mb-6 "
    >
      <Navbar />
      <div className="container sm:pb-0">
        <div className="flex flex-col sm:flex-row justify-around  gap-10 px-2 sm:px-10 py-4 ">
          {/* text content section */}
          <div className="flex flex-col gap-6 w-full  sm:w-[50%] p-6  ">
            <h1 className="text-3xl flex font-semibold ">
              We Create Learning Experience with Excellent Technology.
            </h1>
            <p className="text-sm font-semibold">
              Unlimited Acess to 100+ World Class, Courses Hands-on Projects ,
              And Job-Ready Certified Programs-All includes in your Subscription
            </p>
            <div className="flex gap-4 items-center  ">
              <button className="bg-yellow-300 text-black font-medium px-8 py-2 rounded-full hover:scale-105 duration-300">
                Book Demo Class
              </button>
              <span className="text-sm">Explore More</span>
              <FaLongArrowAltRight />
            </div>
          </div>
          {/* Image section */}
          <div className="flex w-full  sm:w-[50%]  ">
            <div className="w-full h-full border-8 border-green-200 rounded-3xl  flex">
              <iframe
                className="w-full h-full aspect-video  rounded-2xl object-cover "
                src="https://docs.material-tailwind.com/demo.mp4"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
