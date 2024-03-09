import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

function BatchSection() {
  return (
    <div className='  grid grid-cols-2 gap-10  sm:grid-cols-4 justify-between  px-2 sm:px-20 py-4 mb-16'>
        <div className=' flex justify-center items-center gap-1 text-blue-600'>
            <IoCheckmarkCircleSharp className=' h-10 w-10' />
            <div className='flex font-semibold flex-col  '>
                 <span  >100+</span>
                 <p className='text-xs '>Batch Complete</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-1 '>
            <FaClipboardUser className=' text-blue-600 h-8 w-8' />
            <div className='flex font-semibold flex-col  '>
                 <span className='text-blue-600'  >50+</span>
                 <p className='text-xs '>Active Batches</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-1 '>
             <div className=' flex items-center justify-center bg-blue-600 rounded-full h-10 w-10'>
            <FaUserFriends className=' text-white h-8 w-8' />
            </div>
            <div className='flex font-semibold flex-col  '>
                 <span className='text-blue-600'  >10,000+</span>
                 <p className='text-xs '>Student Satisfied </p>
            </div> 
        </div>
        <div className='flex justify-center items-center gap-1 '>
            <div className=' flex items-center justify-center bg-blue-600 rounded-full h-10 w-10'>
            <FaUserFriends className=' text-white h-8 w-8' />
            </div>
           
            <div className='flex font-semibold flex-col  '>
                 <span className='text-blue-600'  >10+</span>
                 <p className='text-xs '>Course Module</p>
            </div>
        </div>
    </div>
  )
}

export default BatchSection