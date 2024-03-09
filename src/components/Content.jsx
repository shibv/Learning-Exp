import React from "react";

function Content({ heading, para }) {
  return (
    <div className="flex  items-center justify-center mb-10">
      <div className="flex flex-col gap-4 w-full px-6 sm:w-[50%] text-center">
        <h1 className="text-3xl  font-semibold ">{heading}</h1>

        <p className="text-sm text-gray-500 font-semibold">{para}</p>
      </div>
    </div>
  );
}

export default Content;
