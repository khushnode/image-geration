import React, { useState } from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row mt-12">
      
      {/* LEFT SIDE: Visuals & Branding (Desktop only) */}
      <div className="hidden md:flex md:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
        {/* Abstract Background Decor */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-md">
          {/* Logo */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl mb-12">
            <div className="flex items-center justify-center w-8 h-8 text-white shadow-lg rounded-lg bg-gradient-to-tr from-orange-500 to-pink-600">
              <span className="text-sm font-black">F</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              FitVeSion <span className="text-orange-500">AI</span>
            </span>
          </div>

          <h1 className="text-5xl font-black text-white leading-[1.1] mb-6">
            Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">AI Fashion</span> journey today.
          </h1>
          
          <ul className="space-y-6">
            {[
              { title: "Instant AI Photoshoots", desc: "No models or studios required." },
              { title: "Global Scaling", desc: "Create content for any market in seconds." },
              { title: "90% Cost Reduction", desc: "Save thousands on traditional production." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE: Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#fafafa]">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo Only */}
          <div className="md:hidden flex justify-center mb-8">
             <span className="text-2xl font-black tracking-tighter text-slate-900">FitVeSion <span className="text-orange-500">AI</span></span>
          </div>

          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">Join 500+ Indian brands scaling with AI.</p>
          </div>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 shadow-sm"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Work Email</label>
              <input 
                type="email" 
                placeholder="john@brand.com"
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 shadow-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Minimum 8 characters"
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-sm focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 shadow-sm"
              />
            </div>

            {/* Terms */}
            <p className="text-[11px] text-slate-500 leading-relaxed px-1">
              By creating an account, you agree to our <a href="#" className="text-orange-600 underline underline-offset-2">Terms of Service</a> and <a href="#" className="text-orange-600 underline underline-offset-2">Privacy Policy</a>.
            </p>

            {/* Submit Button */}
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-black transition-all active:scale-[0.98] shadow-xl shadow-slate-200 mt-6 flex items-center justify-center gap-2 group">
              Create My Account
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </form>

          {/* Social Signup */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black"><span className="bg-[#fafafa] px-4 text-slate-400">Secure Direct Sign-up</span></div>
          </div>

          <button className="w-full bg-white border border-slate-200 text-slate-700 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Sign up with Google
          </button>

          <p className="text-center text-slate-500 text-sm mt-8">
            Already have an account? {' '}
            <a href="#" className="text-orange-600 font-bold hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}