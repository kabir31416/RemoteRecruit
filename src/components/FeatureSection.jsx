import Card1 from "../assets/cardimg1.png";
import shortlogo from "../assets/ShortLogo.png";

export default function Features() {
    return (
        <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">


                <div className="lg:col-span-5 flex flex-col items-start text-left">

                    <span className="inline-block bg-[#cee9f5] text-[#1b4393] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                        Global Reach
                    </span>

                    <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.2] mb-6 tracking-tight">
                        The First Fully Global Job Board, Anywhere, Ever
                    </h2>


                    <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[460px]">
                        RemoteRecruit connects candidates with opportunities around the world. With today’s
                        remote-first workforce, you need to be able to find the best jobs and the best
                        people for them, wherever they may be.
                    </p>
                </div>

                <div className="lg:col-span-7 relative w-full flex justify-center lg:justify-end py-10">

                    {/* Blue dot */}
                    <div className="absolute top-4 left-[1%] md:left-[35%] lg:left-[35%] w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-md z-0" />

                    <div className="relative w-[340px] md:w-[380px] bg-white rounded-[32px] 
                         shadow-  [0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-4 z-10 overflow-hidden">

                        <div className="w-full rounded-[20px] overflow-hidden">
                            <img
                                src={Card1}
                                alt="Job Listing"
                                className="w-full h-45 object-cover rounded-lg bg-slate-100 mb-20"
                            />
                        </div>


                        <div className="h-30"></div>
                    </div>

                    {/* 1st card */}
                    <div className="absolute top-[55%] left-[5%] md:left-[15%] lg:left-[30%] w-[280px] md:w-[280px] bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 transition-transform hover:-translate-y-1 duration-300">


                        <div className="w-12 h-12 rounded-full border-2 border-amber-400 p-0.5 overflow-hidden flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                                alt="Felonious Gru"
                                className="w-full h-full object-cover rounded-full bg-slate-100"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[11px] font-semibold text-[#1b4393]">Python Developer</span>
                            <span className="text-[15px] font-bold text-slate-800 tracking-tight">Felonious Gru</span>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div className="absolute bottom-[8%] left-[10%] md:left-[22%] lg:left-[45%] w-[260px] md:w-[280px] bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 transition-transform hover:-translate-y-1 duration-300">

                        {/* Avatar with Yellow Border */}
                        <div className="w-12 h-12 rounded-full border-2 border-yellow-400 p-0.5 overflow-hidden flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                alt="Mel Muselphiem"
                                className="w-full h-full object-cover rounded-full bg-slate-100"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <span className="text-[11px] font-semibold text-cyan-500">Front End Wizard</span>
                            <span className="text-[15px] font-bold text-slate-800 tracking-tight">Mel Muselphiem</span>
                        </div>
                    </div>

                    {/* logo badge */}
                    <div className="absolute top-[32%] right-[2%] md:right-[15%] lg:right-[-3%] w-16 h-16 md:w-15 md:h-15 bg-gradient-to-br from-[#2a62cc] to-[#143475] rounded-full flex items-center justify-center shadow-[0_12px_28px_rgba(27,67,147,0.3)] border border-blue-400/20 z-20 transition-transform hover:scale-105 duration-300">

                        <img
                            src={shortlogo}
                            alt="Short Logo"
                            className="w-full h-full object-contain p-4"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}