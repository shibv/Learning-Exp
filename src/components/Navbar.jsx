import React from 'react'
import logo from '../assets/logo.svg'

const navItems =  [
    {
        id: 1,
        item  :"Home",
        href :"#home"
    },
    {
        id: 2,
        item  :"Services Us",
        href :"#services"
    },
    {
        id: 3,
        item  :"Why Us",
        href :"#whyus"
    },
    {
        id: 4,
        item  :"Our Goals",
        href :"#goals"
    },

]

function Navbar() {
  return (
    
       
             <div className="flex justify-between items-center px-6 sm:px-20 py-4">
              <div>
                <a className='flex items-center gap-2 text-xl sm:text-xl font-semibold' href="#">
                   <img className='w-10' src={logo} alt="Food Zone" />
                   Learning Exp.
                </a>
              </div>
              <div className='flex items-center gap-6'>

                <ul className='hidden sm:flex gap-6 '>
                 {
                  navItems.map(item => <li key={item.id}  className=' text-gray-500 no-underline hover:underline hover:text-yellow-300 duration-300 font-medium cursor-pointer'> <a href={item.href}>{item.item}</a> </li> )
                 }
                </ul>
                <button className='bg-yellow-300  text-black px-8 py-2 rounded-full hover:scale-105 duration-300 flex font-medium text-sm items-center gap-2'>
                  Contact Us
                 
                </button>
              </div>
             </div>
        
    
  )
}

export default Navbar