import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";

import check from "../assets/check.png"
import close from "../assets/close.png"



import shortlogo from "../assets/ShortLogo.png";

import Logo from "../assets/Logo.png";

import footerbg from "../assets/footerbg.png";

const Footer = () => {
    return (
        <footer
            className="relative w-full bg-cover bg-center bg-no-repeat pt-20 md:pt-32 pb-10"
            style={{
                backgroundImage: `url(${footerbg})`,
            }}
        >
            
            <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6 -mt-20 md:-mt-50">
                <h2 className="text-center text-[#1A1D37] text-2xl md:text-5xl font-bold mb-10">
                    Help Is One Click Away
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-2xl">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="w-full sm:w-28 h-24 sm:h-28 bg-[#EEF2F9] rounded-2xl flex flex-col justify-center items-center shrink-0">
                                <h3 className="text-3xl md:text-4xl font-bold text-[#5BB9EA]">
                                    Free
                                </h3>
                                <p className="text-gray-400 text-sm">Basic</p>
                            </div>

                            <div className="space-y-2 text-sm md:text-base">
                                <p className="text-[#20253A] flex items-center gap-1"> <span> <img src={check} alt="Logo" className="w-4" /></span> 1 Active Job</p>
                                <p className="text-[#20253A] flex items-center gap-1"><span> <img src={check} alt="Logo" className="w-4" /></span>Basic List Placement</p>
                                <p className="text-gray-400 flex items-center gap-1"><span> <img src={close} alt="Logo" className="w-4" /></span> Unlimited Job Applicants</p>
                                <p className="text-gray-400 flex items-center gap-1">
                                    <span> <img src={close} alt="Logo" className="w-4" /></span>Invite Anyone to Apply to Your Jobs
                                </p>
                            </div>
                        </div>

                        <button className="w-full h-12 md:h-14 mt-6 rounded-2xl border-2 border-[#2E73D3] text-[#2E73D3] font-semibold hover:bg-[#2E73D3] hover:text-white transition">
                            Get Started
                        </button>
                    </div>

                    
                    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-2xl relative">
                        <span className="absolute top-4 left-4 bg-[#DDF8F4] text-[#256D75] px-3 py-1 rounded-full font-semibold text-xs md:text-sm">
                            Premium
                        </span>

                        <div className="flex flex-col sm:flex-row gap-5 mt-8">
                            <div className="w-full sm:w-28 h-24 sm:h-28 bg-[#EEF2F9] rounded-2xl flex flex-col justify-center items-center shrink-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5BB9EA]">
                                    $79.99
                                </h3>
                                <p className="text-gray-400 text-sm text-center">Per Month</p>
                            </div>

                            <div className="space-y-2 text-sm md:text-base">
                                <p className="text-[#20253A] flex items-center gap-1"> <span> <img src={check} alt="Logo" className="w-4" /></span> Unlimited Job Posts</p>
                                <p className="text-[#20253A] flex items-center gap-1"> <span> <img src={check} alt="Logo" className="w-4" /></span> Instant Job Post Approval</p>
                                <p className="text-[#20253A] flex items-center gap-1"> <span> <img src={check} alt="Logo" className="w-4" /></span>Premium List Placement</p>
                                <p className="text-[#20253A] flex items-center gap-1"> <span> <img src={check} alt="Logo" className="w-4" /></span>Unlimited Job Applicants</p>
                            </div>
                        </div>

                        <button className="w-full h-12 md:h-14 mt-6 rounded-2xl bg-gradient-to-r from-[#2F79D7] to-[#214E97] text-white font-semibold hover:opacity-90 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

           
            <div className="max-w-[1240px] mx-auto px-6 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className="w-28 md:w-auto" />
                    </div>

                  
                    <div className="flex gap-3">
                        {[<FaFacebookF />, <FaInstagram />, <FaXTwitter />, <FaLinkedinIn />].map(
                            (icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#2E73D3] transition"
                                >
                                    {icon}
                                </a>
                            )
                        )}
                    </div>
                </div>

               
                <div className="border-t border-white/10 mt-6 pt-6">
                    <div className="flex justify-center">
                        <img src={shortlogo} alt="Short Logo" className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;