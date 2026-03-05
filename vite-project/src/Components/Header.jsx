import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
    

  return (
    // 'w-full' aur 'left-0' add kiya hai taaki side gaps na rahein
    <nav className="fixed md:sticky top-0 left-0 w-full z-[100] bg-orange/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-slate-900 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-xl">✦</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 italic">
              scalio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">Home</Link>
            <Link to="/aiproduct" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
              AI Product
            </Link>
            <Link to="/aifashion" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
              AI Fashion
            </Link>
            <Link to="/mockups" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
              Mockups
            </Link>

            <div className="h-4 w-[1px] bg-slate-300 mx-2"></div>

            <Link to="/blogs" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/pricing" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Pricing</Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Contact us</Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm font-bold text-slate-600 px-4 py-2 hover:text-slate-900">
              Log in
            </Link>
            <button className="bg-[#f05a1a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all active:scale-95"
             >
              Try for Free
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    
</nav>
  );
}