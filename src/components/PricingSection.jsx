import React from 'react';

export default function App() {
  return (
    <div className=" w-full bg-white py-24 flex items-center justify-center">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1c29] mb-5 ">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[24px] p-8 md:p-10 text-left">
            <h3 className="text-2xl font-bold text-black mb-1">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
            
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-bold text-[#1a1c29]">$0</span>
              <span className="text-gray-500 font-medium mb-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Basic templates
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Community support
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> 1 project per month
              </li>
            </ul>

            <button className="w-full bg-[#7b2ff7] hover:bg-[#6a25d6] text-white font-semibold rounded-full py-3.5 transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Card 2*/}
          <div className="bg-[#7b2ff7] rounded-[24px] p-8 md:p-10 text-left relative transform md:-translate-y-4 shadow-xl shadow-purple-500/20">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffefcc] text-[#c47910] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm ">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Pro</h3>
            <p className="text-purple-200 text-sm mb-6">Best for professionals</p>
            
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-purple-200 font-medium mb-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Access to all premium tools
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Unlimited templates
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Priority support
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Cloud sync
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <CheckIcon color="#ffffff" /> Advanced analytics
              </li>
            </ul>

            <button className="w-full bg-white hover:bg-gray-50 text-[#7b2ff7] font-semibold rounded-full py-3.5 shadow-sm">
              Start Pro Trial
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-[24px] p-8 md:p-10 text-left">
            <h3 className="text-2xl font-bold text-[#1a1c29] mb-1">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
            
            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl font-bold text-[#1a1c29]">$99</span>
              <span className="text-gray-500 font-medium mb-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Team collaboration
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Custom integrations
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Dedicated support
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckIcon color="#10b981" /> Custom branding
              </li>
            </ul>

            <button className="w-full bg-[#7b2ff7] hover:bg-[#6a25d6] text-white font-semibold rounded-full py-3.5 transition-colors">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function CheckIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}