import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="w-full bg-[#121623] text-white py-16 px-6 md:px-12 ">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Column 1*/}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <img src="logo.png" alt="logo" className='pb-2' />
            <p className="text-[#9ca3af] text-[17px] leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl text-white mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Features</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Pricing</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Templates</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3*/}
          <div className="lg:col-span-2">
            <h3 className="text-xl text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9ca3af] hover:text-white  text-[17px]">About</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white  text-[17px]">Blog</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white  text-[17px]">Careers</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white  text-[17px]">Press</a></li>
            </ul>
          </div>

          {/* Column 4*/}
          <div className="lg:col-span-2">
            <h3 className="text-xl text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Documentation</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Help Center</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Community</a></li>
              <li><a href="#" className="text-[#9ca3af] hover:text-white text-[17px]">Contact</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl text-white mb-6">Social Links</h3>
            <div className="flex gap-4">
              
              {/* Instagram Icon Button */}
              <a href="#" className="p-4 bg-white rounded-full flex items-center justify-center text-[#121623] hover:bg-gray-200">
                <CiFacebook />

              </a>
              
              {/* Facebook Icon Button */}
              <a href="#" className="p-4 bg-white rounded-full flex items-center justify-center text-[#121623] hover:bg-gray-200">
                <FaInstagram />
              </a>
              
              {/* X (Twitter) Icon Button */}
              <a href="#" className=" p-4 bg-white rounded-full flex items-center justify-center text-[#121623] hover:bg-gray-200">
                <FaXTwitter />

              </a>

            </div>
          </div>

        </div>

        <div className="w-full border-t border-[#2a3040] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[#7e859b] text-[15px]">
          <p>© 2026 Digitools &bull; All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}