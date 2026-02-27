import React from 'react'

export default function Contact() {
  return (
    <>
       <header className="pt-20 pb-28 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Contact Us</h1>
        <p className="text-slate-600 max-w-md mx-auto text-lg">
            Have questions? We're here to help. Reach out and our team will get back to you shortly.
        </p>
    </header>

    <main className="max-w-xl mx-auto px-6 -mt-16 pb-20">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-white p-10 md:p-12">
            
            <div className="text-center mb-12">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Available</span>
                <h2 className="text-3xl font-bold mt-4">Get in touch</h2>
                <p className="text-slate-500 mt-2">We usually respond within one business day.</p>
            </div>

            <div className="space-y-6">
                
                <div className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                        🏢
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Company</p>
                        <p className="font-semibold text-slate-700">Scalio Technology Private Limited</p>
                    </div>
                </div>

                <a href="tel:+918092492943" className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                        📞
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Phone</p>
                        <p className="font-semibold text-blue-600">+91 8092492943</p>
                    </div>
                </a>

                <a href="https://wa.me/918092492943" target="_blank" className="group flex items-center p-4 rounded-2xl bg-green-50 border border-transparent hover:border-green-200 hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-7 h-7" alt="WA"/>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-green-600/70 uppercase tracking-tight">WhatsApp</p>
                        <p className="font-semibold text-green-700 italic">Chat with us now</p>
                    </div>
                </a>

                <a href="mailto:support@scalio.app" className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                        ✉️
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Email Address</p>
                        <p className="font-semibold text-blue-600">support@scalio.app</p>
                    </div>
                </a>

                <div className="flex items-start p-4 rounded-2xl bg-slate-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl mr-4">
                        📍
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Office Address</p>
                        <p className="font-semibold text-slate-700 leading-snug">K-2033 CR Park, New Delhi</p>
                    </div>
                </div>

            </div>
        </div>
    </main>
    </>
  )
}
