import React from 'react';

export default function CTA() {
  return (
    <div className=" w-full bg-gradient-to-r from-[#6031f7] to-[#9b22ff] py-20 md:py-28 flex items-center justify-center px-6">
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 ">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/90 text-lg md:text-[19px] mb-10 max-w-2xl leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
          
          <button className="w-full sm:w-auto bg-white text-[#7b2ff7] text-base font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-purple-900/20">
            Explore Products
          </button>
          
          {/* Outlined Transparent Button */}
          <button className="w-full sm:w-auto bg-transparent border border-white text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 ">
            View Pricing
          </button>
          
        </div>

        <p className="text-white/70 text-sm md:text-[15px]">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>

      </div>
    </div>
  );
}