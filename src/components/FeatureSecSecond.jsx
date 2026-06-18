
import shortlogo from "../assets/ShortLogo.png";
import check from "../assets/check.png";

export default function FeaturesSecond() {
    return (
        <section className="w-full bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <div className="lg:col-span-7 relative w-full flex justify-center lg:justify-start py-10">
                
                                    {/* Blue dot */}
                                    <div className="absolute top-4 left-[-1%] md:left-[-3%] lg:left-[-3%] w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-md z-0" />
                
                                    <div className="relative w-[340px] md:w-[380px] bg-white rounded-[32px] 
                                         shadow-  [0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-4 z-10 overflow-hidden">
                
                                        <div className="w-full rounded-[20px] space-y-4 p-5">

                                            <p className="text-md font-medium text-[#808191] ">Your current membership tier</p>

                                            <h1 className="text-xl font-semibold text-[#1E3E85]">Premium</h1>

                                            <p className="text-md font-medium text-[#808191] ">Features</p>

                                            <ul className="space-y-3">
                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> Up to 25 active job posts</li>

                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> Premium Placement & Visibility</li>

                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> Messaging anyone, unlimited</li>

                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> Unlimited invites</li>

                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> View all applicants</li>

                                                <li className="text-[15px] font-medium text-slate-800 tracking-tight"> <span><img src={check} alt="Check" className="w-4 h-4 inline mr-2" /></span> Unlimited invites to jobseekers</li>

                                            </ul>



                                        </div>
                
                
                                        <div className="h-30"></div>
                                    </div>
                
                                   
                
                                    {/* 2nd card */}
                                    <div className="absolute bottom-[15%] left-[10%] md:left-[-1%] lg:left-[-1%] w-[260px] md:w-[280px] bg-white/95 backdrop-blur-sm rounded-full p-1 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20 transition-transform hover:-translate-y-1 duration-300">
                
                                        
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                                                alt="Mel Muselphiem"
                                                className="w-full h-full object-cover border border-slate-500 rounded-full bg-slate-100"
                                            />
                                        </div>
                
                                        
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-semibold text-cyan-500">Upcoming Payment In…</span>
                                            <span className="text-[15px] font-bold text-slate-800 tracking-tight">14 Days - $79.99</span>
                                        </div>
                                    </div>
                
                                    {/* logo badge */}
                                    <div className="absolute top-[32%] right-[2%] md:right-[15%] lg:left-[50%] w-16 h-16 md:w-15 md:h-15 bg-gradient-to-br from-[#2a62cc] to-[#143475] rounded-full flex items-center justify-center shadow-[0_12px_28px_rgba(27,67,147,0.3)] border border-blue-400/20 z-20 transition-transform hover:scale-105 duration-300">
                
                                        <img
                                            src={shortlogo}
                                            alt="Short Logo"
                                            className="w-full h-full object-contain p-4"
                                        />
                
                                    </div>
                
                                </div>


                <div className="lg:col-span-5 flex flex-col items-start text-left">

                    <span className="inline-block bg-[#cee9f5] text-[#1b4393] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                        Actually Fee Free
                    </span>

                    <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.2] mb-6 tracking-tight">
                        Fee-Free Forever
                    </h2>


                    <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[460px]">
                        We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.
                    </p>
                </div>

            </div>
        </section>
    );
}