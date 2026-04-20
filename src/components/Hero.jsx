import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";


 function Hero() {
  return (
    <div className="bg-white font-sans text-slate-800 selection:bg-[#7b2ff7] selection:text-white" data-theme="light">
      
      {/* Navigation Bar */}
      <header className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
          
          <div className="flex items-center gap-1 cursor-pointer">
            <img src="/logo.png" alt="Logo" className="text-3xl font-extrabold text-[#7b2ff7]" />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-[#7b2ff7] ">Products</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#7b2ff7] ">Features</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#7b2ff7] ">Pricing</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#7b2ff7] ">Testimonials</a>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-[#7b2ff7] ">FAQ</a>
          </nav>

          <div className="flex items-center gap-8">
            <button className="text-gray-600 hover:text-black transition-colors" aria-label="Cart">
              <FaShoppingCart />

            </button>
            
            <a href="#" className="hidden sm:block text-sm font-semibold text-gray-800 hover:text-[#7b2ff7] ">
              Login
            </a>
            
            <button className="bg-[#7b2ff7] hover:bg-[#6a25d6] text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md">
              Get Started
            </button>
          </div>
          
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col items-start max-w-[650px] space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f3ecff] rounded-full border border-[#e6d8ff]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7b2ff7] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7b2ff7]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#7b2ff7]">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-[#1a1c29] leading-[1.05] ">
            Supercharge Your<br />Digital Workflow
          </h1>

          <div className="space-y-4 pt-2">
            <p className="text-lg sm:text-[19px] text-gray-500 leading-[1.6] max-w-[540px]">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <p className="text-[15px] text-gray-400 font-medium">Explore Products</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <button className="bg-[#7b2ff7] hover:bg-[#6a25d6] text-white px-8 py-4 rounded-full text-[15px] font-semibold transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
              Explore Products
            </button>
            <button className="flex items-center gap-2.5 bg-white border border-[#e0d4f5] text-[#7b2ff7] px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-[#f8f5ff] hover:border-[#7b2ff7] ">
              <CiPlay1 />Watch Demo
            </button>
          </div>

        </div>

        {/* Right Column: Hero Graphic */}
        <div className="flex-1 w-full flex justify-end">
          {/* Image Container with specific rounded corners and subtle shadow */}
          <div className="relative w-full max-w-[600px] aspect-[4/4.2] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
            {/* Using a high-quality abstract tech image from Unsplash as a placeholder 
              to match the vibe of the original graphic.
            */}
            <img 
              src="/banner.png" 
              alt="Digital Workflow Interface" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlays to simulate the bright, faded effect from the original image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
            
            {/* Decorative generic UI elements overlay (Optional, to mimic the lines/nodes) */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          </div>
        </div>

      </main>
    </div>
  )
}
export default Hero