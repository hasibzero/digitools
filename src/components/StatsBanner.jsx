import React from 'react';
 function StatsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#6b31ff] to-[#a625ff] py-16 ">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-4">
        
        {/* Stat Block 1 */}
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-3 ">50K+</h2>
          <p className="text-white/80 text-xl font-medium">Active Users</p>
        </div>

        {/*Divider*/}
        <div className="hidden md:block w-px h-20 bg-white/30"></div>

        {/* Stat Block 2 */}
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-3 ">200+</h2>
          <p className="text-white/80 text-xl font-medium">Premium Tools</p>
        </div>

        {/*Divider */}
        <div className="hidden md:block w-px h-20 bg-white/30"></div>

        {/* Stat Block 3 */}
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-3 ">4.9</h2>
          <p className="text-white/80 text-xl font-medium">Rating</p>
        </div>

      </div>
      
    </div>
  );
}

export default StatsBanner