import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
      <div className="px-4 md:px-8 pb-8 max-w-7xl mx-auto">
        <div className="relative w-full mb-10">
          <Image src="/Portfolio.png" alt="Portfolio Background" width={1200} height={140} className="h-[65px] md:h-[140px] object-cover rounded-2xl w-full" />
          <p className=" font-bold text-2xl md:text-5xl text-black tracking-[-1.06px] mt-[-30px] md:mt-[-60px]">
          My Awesome Portfolio
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Row 1 */}
          <Image src="/Portfolio1.png" alt="Portfolio 1" width={400} height={400} className="rounded-2xl object-cover w-full h-50 md:h-140" />
          <Image src="/Portfolio2.png" alt="Portfolio 2" width={800} height={400} className="rounded-2xl object-cover w-full h-50 md:h-140 md:col-span-2" />
          {/* Row 2 */}
          <Image src="/Portfolio3.png" alt="Portfolio 3" width={800} height={360} className="rounded-2xl object-cover w-full h-50 md:h-90 md:col-span-2" />
          <Image src="/Portfolio4.png" alt="Portfolio 4" width={400} height={360} className="rounded-2xl object-cover w-full h-50 md:h-90" />
          {/* Row 3 */}
          <Image src="/Portfolio5.png" alt="Portfolio 5" width={400} height={360} className="rounded-2xl object-cover w-full h-50 md:h-90" />
          <Image src="/Portfolio6.png" alt="Portfolio 6" width={400} height={360} className="rounded-2xl object-cover w-full h-50 md:h-90" />
          <Image src="/Portfolio7.png" alt="Portfolio 7" width={400} height={360} className="rounded-2xl object-cover w-full h-50 md:h-90" />
        </div>
      </div>
  )
}

export default Portfolio