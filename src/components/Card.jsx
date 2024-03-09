import React from 'react'


function card({img, heading, para}) {
  return (
    <div className='flex cursor-pointer bg-gray-100 flex-col shadow-md py-4 gap-2 hover:scale-105 duration-300 hover:bg-yellow-100  items-center text-center justify-center rounded-2xl '>
        <img src={img} className='w-3/6 h-3/2' alt="" />
        <h1 className='text-xl font-semibold'>{heading}</h1>
        <p className='w-[80%] text-sm text-gray-500'>{para} </p>
    </div>
  )
}

export default card