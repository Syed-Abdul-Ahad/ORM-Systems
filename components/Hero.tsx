import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full min-h-[420px] relative flex items-center justify-center overflow-hidden" style={{ minHeight: 420 }}>
      {/* Background Image */}
      <Image
        src="/Hero.png"
        alt="Data Center Hero"
        fill
        className="object-cover object-right md:object-center z-0"
        priority
      />
     
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col md:items-start md:pl-[55%] px-4 md:px-6 py-16 md:py-32">
        {/* Eyebrow */}
        <div
          className="text-white font-forma text-[16px] font-normal not-italic mb-2 text-left w-full max-w-2xl"
          style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}
        >
          Data Center Transformation
        </div>
        {/* Heading */}
        <h1
          className="text-white font-forma text-[40px] md:text-[64px] font-normal not-italic leading-[48px] md:leading-[74px] mb-4 text-left w-full max-w-2xl break-words"
          style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}
        >
          Revolutionizing Your <br className="hidden md:block" />
          Data Center <br className="hidden md:block" />
          Infrastructure
        </h1>
        {/* Paragraph */}
        <p
          className="text-white font-forma text-[18px] font-normal not-italic leading-[30px] mb-8 text-left w-full max-w-2xl"
          style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 400 }}
        >
          Transform outdated systems into scalable, future-ready infrastructures with advanced solutions to boost efficiency, reliability, and security.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 self-start">
          <button
            className="bg-white text-black font-forma text-[18px] font-medium not-italic px-6 py-3 shadow hover:bg-gray-100 transition-colors"
            style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500 }}
          >
            Talk to an expert
          </button>
          <button
            className="bg-transparent text-white font-forma text-[18px] font-medium not-italic px-2 md:px-6 py-3 hover:bg-white/10 transition-colors"
            style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500 }}
          >
            Get an instant quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;