import React from 'react';

const arrowSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none" className="inline ml-1 align-middle">
    <g clipPath="url(#clip0_62_38)">
      <path d="M0.204359 9.83182L4.52577 5.50152L0.204359 1.17123C0.139691 1.10837 0.0882872 1.0332 0.053185 0.950132C0.0180827 0.867065 0 0.777798 0 0.687619C0 0.59744 0.0180827 0.508186 0.053185 0.42512C0.0882872 0.342054 0.139691 0.266864 0.204359 0.204012C0.267823 0.140425 0.3432 0.0899804 0.426184 0.0555603C0.509167 0.0211402 0.598126 0.00341797 0.687965 0.00341797C0.777804 0.00341797 0.866763 0.0211402 0.949747 0.0555603C1.03273 0.0899804 1.10811 0.140425 1.17157 0.204012L5.9899 5.01347C6.11887 5.14316 6.19127 5.31862 6.19127 5.50152C6.19127 5.68442 6.11887 5.85987 5.9899 5.98956L1.17157 10.8256C1.10872 10.8903 1.03354 10.9417 0.950478 10.9768C0.867412 11.0119 0.778144 11.03 0.687965 11.03C0.597787 11.03 0.508532 11.0119 0.425466 10.9768C0.3424 10.9417 0.26721 10.8903 0.204359 10.8256C0.140771 10.7622 0.0903266 10.6868 0.0559065 10.6038C0.0214864 10.5208 0.00376411 10.4319 0.00376411 10.342C0.00376411 10.2522 0.0214864 10.1633 0.0559065 10.0803C0.0903266 9.99729 0.140771 9.9219 0.204359 9.85844V9.83182Z" fill="#0070D2"/>
    </g>
    <defs>
      <clipPath id="clip0_62_38">
        <rect width="6.18486" height="11.0032" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const Solutions = () => {
  return (
    <section className="w-full py-12 px-2 md:px-8 max-w-[1280px] mx-auto">
      <div className="p-6 md:p-10">
        <h2
          className="text-black font-forma text-[32px] md:text-[42px] font-normal not-italic leading-normal text-center mb-10"
          style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}
        >
          CUTTING-EDGE SOLUTIONS FOR INDUSTRY LEADERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <img src="/Solution1.jpg" alt="Sustainability" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-black font-forma text-[25px] font-normal not-italic leading-normal mb-2" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Innovating for Sustainability
              </h3>
              <p className="text-black font-forma text-[16px] font-normal not-italic leading-[24.846px] mb-4" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Delivering seamless connectivity, enhanced security, and high performance.
              </p>
              <a href="#" className="text-[#0070D2] font-forma text-[15.972px] font-medium not-italic leading-normal hover:underline transition-colors flex items-center group" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500 }}>
                Read More {arrowSvg}
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col md:mt-2 lg:mt-4">
            <img src="/Solution2.jpg" alt="Community" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-black font-forma text-[25px] font-normal not-italic leading-normal mb-2" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Powering Inclusive Communities<br />Powering Inclusive
              </h3>
              <p className="text-black font-forma text-[16px] font-normal not-italic leading-[24.846px] mb-4" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Delivering seamless connectivity, enhanced security, and high performance for robust and scalable networks. Delivering seamless connectivity, enhanced security, and high performance.
              </p>
              <a href="#" className="text-[#0070D2] font-forma text-[15.972px] font-medium not-italic leading-normal hover:underline transition-colors flex items-center group" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500 }}>
                Explore More {arrowSvg}
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col">
            <img src="/Solution3.jpg" alt="Leadership" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-black font-forma text-[25px] font-normal not-italic leading-normal mb-2" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Leading with Purpose
              </h3>
              <p className="text-black font-forma text-[16px] font-normal not-italic leading-[24.846px] mb-4" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}>
                Delivering seamless connectivity, enhanced security, and high performance for robust and scalable networks.
              </p>
              <a href="#" className="text-[#0070D2] font-forma text-[15.972px] font-medium not-italic leading-normal hover:underline transition-colors flex items-center group" style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500 }}>
                Explore More {arrowSvg}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;