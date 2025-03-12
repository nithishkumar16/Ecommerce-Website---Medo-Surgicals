import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Easy Exchange Policy" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle-free exchange policy</p>
          </div>
          <div className="text-center">
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="7 Days Return Policy" />
            <p className="font-semibold">7 Days Return Policy</p>
            <p className="text-gray-400">We provide 7 days free return policy</p>
          </div>
          <div className="text-center">
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Best Customer Support" />
            <p className="font-semibold">Best Customer Support</p>
            <p className="text-gray-400">We provide 24/7 customer support</p>
          </div>
          <div className="text-center">
            <img src={assets.delivery} className="w-12 m-auto mb-5" alt="Fast Delivery" />
            <p className="font-semibold">Fast Delivery</p>
            <p className="text-gray-400">Quick & reliable shipping</p>
          </div>
        </div>
      </div>
  )
}

export default OurPolicy
