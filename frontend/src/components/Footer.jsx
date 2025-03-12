import React from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Company Info & Contact */}
        <div>
          <img src={assets.medologo} className='mb-5 w-32' alt="Medo Surgicals Logo" />
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 18/15, 3rd Street, Karani Garden, Saidapet, Chennai, Tamil Nadu, India</li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+919840645771" className="hover:underline">+91 98406 45771</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:medosurgicals@gmail.com" className="hover:underline">medosurgicals@gmail.com</a>
            </li>
            <li><FontAwesomeIcon icon={faClock} className="mr-2" /> Mon-Sat: 9 AM - 6 PM</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>Home</li>
            <li className='hover:text-black cursor-pointer'>About Us</li>
            <li className='hover:text-black cursor-pointer'>Delivery</li>
            <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Our Products Section */}
        <div>
          <p className='text-xl font-medium mb-5'>OUR PRODUCTS</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>Surgical Instruments</li>
            <li className='hover:text-black cursor-pointer'>Disposable Medical Supplies</li>
            <li className='hover:text-black cursor-pointer'>Diagnostic Equipment</li>
            <li className='hover:text-black cursor-pointer'>Hospital Furniture</li>
            <li className='hover:text-black cursor-pointer'>First Aid & Emergency Kits</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© {currentYear} Medo Surgicals - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
