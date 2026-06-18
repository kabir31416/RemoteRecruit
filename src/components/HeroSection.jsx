

const HeroSection = () => {
  return (
    <div className="w-full bg-[#ffffff] antialiased text-white select-none">

      <div className="relative w-full bg-[#1b4393] overflow-hidden min-h-[620px] md:min-h-[680px] flex flex-col justify-between">


        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">

          <div className="absolute top-[-20%] left-[-15%] w-[80vw] h-[80vw] max-w-[1000px] rounded-full bg-gradient-to-br from-[#2452aa] to-transparent opacity-60 blur-2xl" />

          <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-gradient-to-tl from-[#224fa5] to-transparent opacity-50 blur-xl" />
        </div>


        <div className="relative z-10 w-full max-w-[840px] mx-auto text-center px-6 pt-16 pb-36 md:pb-44 flex-grow flex flex-col justify-center items-center">

          <h1 className="text-4xl md:text-[54px] font-bold tracking-tight text-white mb-6 leading-[1.15]">
            RemoteRecruit’s Difference
          </h1>

          <p className="text-[#bfd3f2] text-base md:text-[17px] leading-[1.65] font-normal max-w-[720px] mx-auto">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets
            full-time, part-time, and freelance workers showcase their talents to
            businesses that need them. With no paywalls, no fees, and no barriers, there’s
            nothing but you, your talents, and the next step in your career.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            viewBox="0 0 1440 220"
            className="relative block w-full h-[120px] md:h-[180px] lg:h-[220px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160 C320,240 640,120 1020,180 C1220,210 1360,190 1440,170 L1440,220 L0,220 Z"
            ></path>
          </svg>
        </div>

      </div>

      <div className="w-full h-32 bg-white"></div>

    </div>

  );
};

export default HeroSection;