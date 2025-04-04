import React from 'react'
import { assets } from '../assets/assets'
import { Search } from 'lucide-react';

const Hero = () => {
  return (
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
