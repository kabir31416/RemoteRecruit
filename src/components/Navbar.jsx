import Logo from "../assets/Logo.png";

const Navbar = () => {
    return (
        <div>
            <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-gradient-to-b from-blue-950/20 to-transparent">
     
        <div>
          <img src={Logo} alt="Logo"  />
        </div>

     
        <div className="flex items-center gap-6">
          <a href="#signin" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Sign In
          </a>
          <a 
            href="#signup" 
            className="text-sm font-medium bg-cyan-500 text-white px-5 py-2.5 rounded-full hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
          >
            Sign Up
          </a>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;