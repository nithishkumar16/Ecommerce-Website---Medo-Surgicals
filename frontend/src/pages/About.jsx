import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>

      {/* Header Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Our Story */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px] rounded-lg shadow-md'
          src={assets.about}
          alt="Medical Supplies"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Founded in 2015 in Chennai, our journey began as a small business dedicated to providing high-quality surgical products. With a focus on trust and reliability, we supply essential medical supplies to customers, dealers, and hospitals across the region.
          </p>
          <p>
            Today, we serve hundreds of hospitals and healthcare institutions, maintaining the same commitment to quality, affordability, and service that has defined us from the beginning.
            We take pride in our personalized service, ethical business approach, and dedication to ensuring that every product we provide contributes to better healthcare.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to empower healthcare professionals with the best medical supplies by ensuring quality, affordability, and on-time delivery.
            We believe in making healthcare accessible and reliable for all.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Excellence</b>
          <p className='text-gray-600'>
            We maintain the highest standards in product quality and compliance with healthcare regulations.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Reliable Service</b>
          <p className='text-gray-600'>
            We ensure timely delivery and maintain consistent stock levels for our clients.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Focus</b>
          <p className='text-gray-600'>
            Our team is dedicated to providing personalized support and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className='text-xl py-4'>
        <Title text1={'OUR'} text2={'CERTIFICATIONS'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <img
            src="https://images.unsplash.com/photo-1583912271918-0d170129a7f1?auto=format&fit=crop&w=800&q=80"
            className="w-20 h-20 rounded-lg shadow-md"
            alt="ISO 9001"
          />
          <b>ISO 9001:2015</b>
          <p className='text-gray-600'>Certified Quality Management System for top-notch manufacturing.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80"
            className="w-20 h-20 rounded-lg shadow-md"
            alt="ISO 13485"
          />
          <b>ISO 13485:2016</b>
          <p className='text-gray-600'>Compliance with Medical Devices Quality Management Standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80"
            className="w-20 h-20 rounded-lg shadow-md"
            alt="WHO-GMP"
          />
          <b>WHO-GMP</b>
          <p className='text-gray-600'>Ensuring Good Manufacturing Practices for safe and reliable medical products.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
