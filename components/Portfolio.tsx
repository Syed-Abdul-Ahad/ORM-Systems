import React from 'react'

const Portfolio = () => {
  return (
      <div className="px-4 md:px-8 pb-8 max-w-[1280px] mx-auto">
        <div className="relative w-full mb-10">
          <img src="/Portfolio.png" alt="Portfolio Background" className="h-[65px] md:h-[140px] object-cover rounded-2xl" />
          <p className=" font-bold text-2xl md:text-5xl text-black tracking-[-1.06px] mt-[-30px] md:mt-[-60px]">
          My Awesome Portfolio
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Row 1 */}
          <img src="/Portfolio1.png" alt="Portfolio 1" className="rounded-2xl object-cover w-full h-50 md:h-140" />
          <img src="/Portfolio2.png" alt="Portfolio 2" className="rounded-2xl object-cover w-full h-50 md:h-140 md:col-span-2" />
          {/* Row 2 */}
          <img src="/Portfolio3.png" alt="Portfolio 3" className="rounded-2xl object-cover w-full h-50 md:h-90 md:col-span-2" />
          <img src="/Portfolio4.png" alt="Portfolio 4" className="rounded-2xl object-cover w-full h-50 md:h-90" />
          {/* Row 3 */}
          <img src="/Portfolio5.png" alt="Portfolio 5" className="rounded-2xl object-cover w-full h-50 md:h-90" />
          <img src="/Portfolio6.png" alt="Portfolio 6" className="rounded-2xl object-cover w-full h-50 md:h-90" />
          <img src="/Portfolio7.png" alt="Portfolio 7" className="rounded-2xl object-cover w-full h-50 md:h-90" />
        </div>
      </div>
  )
}

export default Portfolio