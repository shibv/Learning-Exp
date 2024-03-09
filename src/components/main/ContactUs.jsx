import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center items-center sm:absolute top-[-3rem] left-0 right-0 p-4">
      <div className="flex w-full sm:w-[60%] bg-blue-800 flex-col px-10 py-6 sm:flex-row rounded-md shadow-md  gap-4 mb-10">
        <div className=" w-full  sm:w-[50%] flex flex-col gap-2">
          <span className="text-xl text-white "> Contact Us! </span>
          <p className="text-xs  text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div class="relative w-full sm:w-[50%] flex justify-center items-center">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Email here..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2 sm:bottom-4 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
