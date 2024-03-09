import React from 'react'

function VideoSection() {
  return (
    
        <div  className="flex  flex-col sm:flex-row justify-around items-center  gap-10 px-2  sm:px-10 py-4 ">
            {/* Image section */}
          <div className="flex w-full sm:w-[50%]  ">
            <div className="w-full aspect-video h-full border-8 border-green-200 rounded-3xl  flex">
              <iframe
                className="w-full h-full rounded-2xl object-cover  "
                src="https://docs.material-tailwind.com/demo.mp4"
              ></iframe>
            </div>
          </div>
          {/* text content section */}
          <div className="flex flex-col gap-6 w-full  sm:w-[50%] p-6  ">
            <h1 className="text-3xl flex font-semibold ">
              Crafting Your Dream Career Building a Path You Love with us 
            </h1>
            <p className="text-sm text-gray-500 font-semibold">
            At Learning We Are Committed To Providing Best Learning Experience taht Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth , and Success.
            </p>
            <p className="text-sm text-gray-500 font-semibold">
            Our Platform is Designed to Empower Learners Like you To Excel in Today's Dynamic World.
            </p>
            <div className="flex gap-4 items-center  ">
              <button className="bg-yellow-300 text-black font-medium px-10 py-2 rounded-full hover:scale-105 duration-300">
               Get More
              </button>
             
            
            </div>
          </div>
          
        </div>
      
  )
}

export default VideoSection