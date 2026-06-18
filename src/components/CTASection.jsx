import Card3 from "../assets/cardimg3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const CTASection = () => {
    return (
        <section className="bg-gradient-to-r from-[#BFDBFE] to-[#DDD6FE] relative overflow-hidden">
            <div className="py-10 mx-auto grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-8 items-center">

                
                <div className="lg:col-span-4 flex flex-col items-start text-left relative">

                    
                    <div className="absolute top-6 left-4 sm:left-10 md:left-20 lg:left-24 w-10 h-10 bg-gradient-to-br from-[#FFED43] to-[#F29939] rounded-full shadow-md z-0" />

                    
                    <div
                        className="
          relative z-10
          bg-white rounded-[32px]
          transform translate-x-0 sm:-translate-x-6 lg:-translate-x-[15%]
          translate-y-6 sm:translate-y-10 lg:translate-y-[20%]
          shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]
          border border-slate-100 p-2
        "
                    >
                        <div className="w-full rounded-[20px]">
                            <img
                                src={Card3}
                                alt="Job Listing"
                                className="w-full h-full object-cover rounded-lg bg-slate-100"
                            />
                        </div>
                    </div>

                </div>

                
                <div className=" p-5 lg:col-span-3 flex flex-col items-start text-left">

                    <h1 className="my-5 font-semibold text-xl text-[#1E3E85]">
                        Are you ready?
                    </h1>

                    <h1 className="my-4 font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#11142D] leading-tight">
                        Help is only a few<br />clicks away!
                    </h1>

                    <p className="my-4 text-[#767784] text-base sm:text-lg lg:text-xl">
                        Click Below to get set up super<br />quickly and find help now!
                    </p>

                    <button className="flex gap-1 items-center text-white bg-[#a3bff3] rounded-full p-1 pr-3 hover:opacity-90 transition">
                        <span className="rounded-full bg-[#52b4db] p-2">
                            <IoIosArrowRoundForward />
                        </span>
                        Get Started
                    </button>

                </div>

            </div>

            
            <div className="absolute bottom-6 right-4 sm:right-10 lg:right-16 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-md z-0" />
        </section>
    );
};

export default CTASection;