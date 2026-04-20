import React from 'react'

function StepsSection() {
  return (
    <div className="w-full bg-[#f8f9fc] py-20 md:py-28 ">
      
      {/* Header Area */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1c29] mb-5 ">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-[24px] p-10 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-6 right-6 w-9 h-9 bg-[#7b2ff7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            01
          </div>
          
          <div className="w-[110px] h-[110px] bg-[#f4efff] rounded-full flex items-center justify-center mx-auto mb-8">
            <img src="user.png" alt="user" />
            
          </div>
          
          <h3 className="text-2xl font-bold text-[#1a1c29] mb-4 text-center">
            Create Account
          </h3>
          <p className="text-gray-500 text-center leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* --- Card 2 --- */}
        <div className="bg-white rounded-[24px] p-10 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-6 right-6 w-9 h-9 bg-[#7b2ff7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            02
          </div>
          
          <div className="w-[110px] h-[110px] bg-[#f4efff] rounded-full flex items-center justify-center mx-auto mb-8">
            <img src="package.png" alt="package" />
          </div>
          
          <h3 className="text-2xl font-bold text-[#1a1c29] mb-4 text-center">
            Choose Products
          </h3>
          <p className="text-gray-500 text-center leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-10 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-6 right-6 w-9 h-9 bg-[#7b2ff7] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            03
          </div>
          
          <div className="w-[110px] h-[110px] bg-[#f4efff] rounded-full flex items-center justify-center mx-auto mb-8">
            <img src="rocket.png" alt="rocket" />
          </div>
          
          <h3 className="text-2xl font-bold text-[#1a1c29] mb-4 text-center">
            Start Creating
          </h3>
          <p className="text-gray-500 text-center leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  )
}
export default StepsSection