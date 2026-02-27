import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky z-50">
        <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              scalio
            </span>
            <span className="text-xl text-slate-900">✦</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 py-2">
                Features
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl p-2 hidden group-hover:block">
                <Link to="/aiproduct" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-lg">
                  AI Product
                </Link>
                <Link href="/aifashion" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-lg">
                  AI Fashion
                </Link>
                <Link to="" className="block px-4 py-3 text-sm hover:bg-slate-50 rounded-lg">
                  Product Mockups
                </Link>
              </div>
            </div>

            <Link to={`/blogs`} className="text-sm font-semibold">Blog</Link>
            <Link to={`/pricing`} className="text-sm font-semibold">Pricing</Link>
            <Link to={`/contact`} className="text-sm font-semibold">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800">
              Try for Free
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-slate-50 rounded-lg"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-4">
          <Link href="#" className="block font-semibold">Features</Link>
          <Link href="#" className="block font-semibold">Blog</Link>
          <Link href="#" className="block font-semibold">Pricing</Link>
          <Link href="#" className="block font-semibold">Contact</Link>
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold">
            Try for Free
          </button>
        </div>
      )}
    </nav>
  );
}