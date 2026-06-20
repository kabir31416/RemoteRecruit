import HeaderBg from "../assets/headerbg.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-white select-none">
      <div
        className="relative w-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px]
             bg-no-repeat bg-top md:bg-center
             bg-contain md:bg-cover"
        style={{
          backgroundImage: `url(${HeaderBg})`,
        }}
      >
        
        <div className="relative z-10 w-full max-w-[840px] mx-auto text-center px-6 pt-20 pb-30 md:pt-45 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-[54px] font-bold tracking-tight text-white mb-6 leading-[1.15]">
            RemoteRecruit's Difference
          </h1>

          <p className="text-[#bfd3f2] text-base md:text-[17px] leading-[1.65] font-normal max-w-[720px] mx-auto">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;