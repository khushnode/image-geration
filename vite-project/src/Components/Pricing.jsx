import React from 'react'

export default function Pricing() {
    const modal = document.getElementById('modal-overlay');
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
    // Close on outside click
    window.onClick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
    function updateCost() {
        const count = document.getElementById('photo-count').value;
        const price = count * 10;
        document.getElementById('display-count').innerText = count;
        document.getElementById('total-price').innerText = price;
    }
    return (
        <>
            <section className="grid-bg pt-16 pb-32 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    Simple, transparent pricing</h1>
                <p className="text-slate-600 max-w-lg mx-auto mb-16">Choose a plan that fits
                    your scale. Upgrade or cancel anytime.</p>
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    <div
                        className="pricing-card bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col cursor-default">
                        <h3 className="text-xl font-bold mb-4">Free</h3>
                        <div className="mb-1">
                            <span className="text-4xl font-black">₹0</span>
                            <span className="text-gray-400 text-sm">for 3 days</span>
                        </div>
                        <p className="text-gray-500 text-xs mb-6 text-left">5 credits
                            included<br />3-day access</p>
                        <div className="bg-red-50 p-4 rounded-xl text-left mb-6">
                            <p className="text-xs font-bold text-red-600 mb-2 uppercase">
                                What you can do</p>
                            <ul className="text-[13px] text-red-800 space-y-1">
                                <li>• 5 photoshoots or 5 image ads</li>
                                <li>• 1 video reels</li>
                                <li>• 0 x 30s end-to-end videos</li>
                            </ul>
                        </div>
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Instant Results
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> No Prompting Needed
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Access to All Tools
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Unlimited Upscale
                            </li>
                        </ul>
                        <button onClick={openModal}
                            className="mt-auto w-full border-2 border-gray-100 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors">
                            Get Started
                        </button>
                    </div>
                    <div
                        className="pricing-card bg-white p-8 rounded-[2rem] border-2 border-gray-900 shadow-xl relative flex flex-col scale-105 z-10 cursor-default">
                        <span
                            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</span>
                        <h3 className="text-xl font-bold mb-4">Monthly</h3>
                        <div className="mb-1">
                            <span className="text-4xl font-black">₹999</span>
                            <span className="text-gray-400 text-sm">per month</span>
                        </div>
                        <p className="text-gray-500 text-xs mb-6 text-left">100
                            credits/month</p>
                        <div className="bg-red-50 p-4 rounded-xl text-left mb-6">
                            <p className="text-xs font-bold text-red-600 mb-2 uppercase">
                                What you can do</p>
                            <ul className="text-[13px] text-red-800 space-y-1">
                                <li>• 100 photoshoots or 100 image ads</li>
                                <li>• 25 video reels</li>
                                <li>• 10 x 30s end-to-end videos</li>
                            </ul>
                        </div>
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Priority WhatsApp
                                Support
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Dedicated Account
                                Manager
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> 24×7 Support
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Addon Credits at
                                ₹10/credit
                            </li>
                        </ul>
                        <button onClick={openModal}
                            className="mt-auto w-full bg-black text-white py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                            Select Plan
                        </button>
                    </div>
                    <div
                        className="pricing-card bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col cursor-default">
                        <h3 className="text-xl font-bold mb-4">Yearly</h3>
                        <div className="mb-1">
                            <span className="text-4xl font-black">₹9,990</span>
                            <span className="text-gray-400 text-sm">per year</span>
                        </div>
                        <p className="text-gray-500 text-xs mb-6 text-left">100 credits
                            /month (billed yearly)</p>
                        <div className="bg-red-50 p-4 rounded-xl text-left mb-6">
                            <p className="text-xs font-bold text-red-600 mb-2 uppercase">
                                What you can do</p>
                            <ul className="text-[13px] text-red-800 space-y-1">
                                <li>• 100 photoshoots or 100 image ads</li>
                                <li>• 25 video reels</li>
                                <li>• 10 x 30s end-to-end videos</li>
                            </ul>
                        </div>
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Priority WhatsApp
                                Support
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Dedicated Account
                                Manager
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> 24×7 Support
                            </li>
                            <li className="flex items-center text-[13px] gap-2">
                                <span className="text-blue-500">✔</span> Addon Credits at
                                ₹10/credit
                            </li>
                        </ul>
                        <button onClick={openModal}
                            className="mt-auto w-full bg-black text-white py-3 rounded-full font-bold transition-opacity hover:opacity-90">
                            Select Plan
                        </button>
                    </div>
                    <div
                        className="pricing-card bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col cursor-default">
                        <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                        <div className="mb-12">
                            <span className="text-3xl font-black">Contact</span>
                            <span className="text-gray-400 text-sm">for pricing</span>
                        </div>
                        <ul className="text-left space-y-4 mb-12 flex-grow">
                            <li className="flex items-center text-sm gap-2 font-semibold">
                                <span className="text-blue-500">✔</span> Bulk credits
                            </li>
                            <li className="flex items-center text-sm gap-2 font-semibold">
                                <span className="text-blue-500">✔</span> API access
                            </li>
                            <li className="flex items-center text-sm gap-2 font-semibold">
                                <span className="text-blue-500">✔</span> Whitelabel solution
                            </li>
                            <li className="flex items-center text-sm gap-2 font-semibold">
                                <span className="text-blue-500">✔</span> 24×7 on-call
                                support
                            </li>
                            <li className="flex items-center text-sm gap-2 font-semibold">
                                <span className="text-blue-500">✔</span> Client dashboard
                            </li>
                        </ul>
                        <button onClick={openModal}
                            className="mt-auto w-full border-2 border-gray-900 py-3 rounded-full font-bold transition-colors hover:bg-gray-900 hover:text-white">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <div id="modal-overlay"
                className="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                <div
                    className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
                    <div
                        className="bg-slate-50 border-b border-slate-100 p-5 px-8 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                Get Started</h2>
                            <p className="text-slate-500 text-xs">Transform your business
                                with AI photography.</p>
                        </div>
                        <button onClick={closeModal}
                            className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 px-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Brand
                                    Name *</label>
                                <input type="text" placeholder="Brand Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email
                                    Address *</label>
                                <input type="email" placeholder="name@company.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone
                                    Number *</label>
                                <input type="tel" placeholder="+91 00000 00000"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Photos
                                    Needed *</label>
                                <div className="relative">
                                    <select id="photo-count" onchange="updateCost()"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all appearance-none cursor-pointer">
                                        <option value="50">50 photos</option>
                                        <option value="100">100 photos</option>
                                        <option value="500">500 photos</option>
                                    </select>
                                    <div
                                        className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-3 h-3" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 9l-7 7-7-7" stroke-width="2.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-slate-900 rounded-xl p-4 text-white flex justify-between items-center">
                            <div>
                                <p
                                    className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">
                                    Estimated Cost</p>
                                <p className="text-sm font-medium text-slate-200">
                                    <span id="display-count">50</span> images <span
                                        className="text-slate-500 mx-1">×</span> ₹10
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-white">₹<span
                                    id="total-price">500</span></p>
                                <p className="text-[10px] text-emerald-400 font-medium">Save
                                    ₹5,500 vs Studio</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <button
                                className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200">
                                Get Started Now
                            </button>
                            <div className="flex items-center justify-between px-1">
                                <p
                                    className="text-[10px] text-slate-400 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Secure Encryption
                                </p>
                                <p
                                    className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter italic">
                                    Built for Indian Brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
