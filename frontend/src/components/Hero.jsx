import React from 'react'
import { assets } from '../assets/assets'
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    // <div className='flex flex-col sm:flex-row border border-gray-400'>
    //   {/* Hero Left Side */}
    //   <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    //         <div className='text-[#414141]'>
    //             <div className='flex items-center gap-2'>
    //                 <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
    //                 <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
    //             </div>
    //             <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
    //             <div className='flex items-center gap-2'>
    //                 <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
    //                 <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
    //             </div>
    //         </div>
    //   </div>
    //   {/* Hero Right Side */}
    //   <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    // </div>
    <div className="relative bg-[#f8f9fa] border border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-[#414141]">

          <h2 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Your Trusted Partner in Medical Supplies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One-Stop Solution for Surgical & Disposable Supplies
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
            />
            <button className="px-6 bg-[#414141] text-white rounded-r-lg hover:bg-gray-800">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero
