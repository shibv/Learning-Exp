import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function FeedBackSection() {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-10 px-2  sm:px-16 mb-10'>
         <div className='flex flex-col  gap-4 w-full sm:w-[80%]'>
         <h1 className="text-3xl flex font-semibold ">
              Our Student Feedback 
            </h1>
            <p className="text-sm text-gray-500 font-semibold">
            At Learning We Are Committed To Providing Best Learning Experience taht Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth , and Success.
            </p>
         </div>
         <div className='flex justify-center items-center w-full sm:w-[20%] ' >
            <div className='flex h-[40%] gap-1 items-center rounded-[5px] hover:scale-105 duration-300 cursor-pointer bg-slate-100 px-4 '>
            <span className='text-gray-500 font-semibold '>Read More</span>
            <FaLongArrowAltRight className='text-black' />
            </div>
            
         </div>
    </div>
  )
}

export default FeedBackSection