import React from "react";
import avt from '../assets/avt.jpg'
import { IoStarSharp } from "react-icons/io5";


function FeedBackCard() {
  return (
    <div className="w-full flex justify-center items-end mb-20 ">
      <div className="flex w-[80%] bg-gray-200 flex-col sm:flex-row rounded-xl shadow-md   mb-10">
         <div className=" w-full sm:w-[40%] rounded-xl ">
             <img src={avt} className="object-fit rounded-xl " alt="" />
         </div>
         <div className=" w-full sm:w-[60%] flex flex-col gap-2 p-6 sm:p-10 sm:pr-32">
             <div className="flex gap-2 text-green-600 ">
                  <IoStarSharp className="h-8 w-8"  />
                  <IoStarSharp className="h-8 w-8"   />
                  <IoStarSharp className="h-8 w-8"   />
                  <IoStarSharp className="h-8 w-8"   />
                  <IoStarSharp className="h-8 w-8"   />
             </div>
            <span className=" text-gray-500">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque,
            </span>
            <div className="flex flex-col">
            <span className="text-black font-semibold">Riad Islam </span>
            <p className="text-black font-semibold text-xs" >Product Manager <span className="text-blue-500">@learning.com</span></p>

            </div>
            
         </div>
      </div>
    </div>
  );
}

export default FeedBackCard;
