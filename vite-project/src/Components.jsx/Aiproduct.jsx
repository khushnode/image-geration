import React from 'react'

export default function Aiproduct() {
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
        window.onclick = function(event) {
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
      <header class="max-w-4xl mx-auto text-center pt-16 px-6">
        <div
            class="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            ✨ Perfect for Indian Products
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Increase Sales with <br/>
            <span class="text-slate-900">Professional </span>
            <span class="text-orange-600">Product Photos</span>
            <span class="text-slate-900">in Minutes</span>
        </h1>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Take product photo from phone → studio shots with multiple angles
            and backgrounds. <br/>
            <span class="font-medium">Ready for Amazon, Flipkart, Meesho,
                Instagram & more!</span>
        </p>
        <button onclick="openModal()"
            class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition duration-200">
            Start Free Trial
        </button>
        <p class="text-xs text-gray-400 mt-4">₹10 per photo, delivered
            instantly.</p>
    </header>
    <main class="max-w-6xl mx-auto mt-20 px-6">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div class="md:col-span-4">
                <h3
                    class="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
                    Before</h3>
                <div
                    class="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden border border-gray-200">
                    <span
                        class="absolute top-4 left-4 bg-black/60 text-white text-[10px] px-2 py-1 rounded z-10">●
                        Input</span>
                    <img src="http://googleusercontent.com/image_collection/image_retrieval/5251380877304200814_0"
                        alt="Raw product necklace"
                        class="w-4/5 mix-blend-multiply transition-transform hover:scale-105 duration-300"/>
                </div>
            </div>
            <div class="md:col-span-8">
                <div class="flex justify-between items-center mb-4">
                    <h3
                        class="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        AI Studio Outputs</h3>
                    <span class="text-orange-600 text-xs font-bold uppercase">6
                        Variations</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div
                        class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="http://googleusercontent.com/image_collection/image_retrieval/75883506111662612_0"
                            class="w-full h-full object-cover"
                            alt="Model variation 1"/>
                    </div>
                    <div
                        class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&h=400&fit=crop"
                            class="w-full h-full object-cover"
                            alt="Model variation 2"/>
                    </div>
                    <div
                        class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="http://googleusercontent.com/image_collection/image_retrieval/10866626756516545999_0"
                            class="w-full h-full object-cover"
                            alt="Studio variation"/>
                    </div>
                    <div
                        class="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-4">
                        <img src="http://googleusercontent.com/image_collection/image_retrieval/5251380877304200814_0"
                            class="w-full h-auto object-contain"
                            alt="White background variation"/>
                    </div>
                    <div
                        class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1610492314415-430339203197?q=80&w=400&h=400&fit=crop"
                            class="w-full h-full object-cover"
                            alt="Close up variation"/>
                    </div>
                    <div
                        class="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="http://googleusercontent.com/image_collection/image_retrieval/12690483190088303870_0"
                            class="w-full h-full object-cover"
                            alt="Lifestyle variation"/>
                    </div>
                </div>
                <p class="text-center text-gray-400 text-sm mt-6 italic">Made
                    from the same input — ready for ads & marketplaces</p>
            </div>
        </div>
    </main>
    <section class="max-w-6xl mx-auto mt-24 pb-20 px-6">
        <div class="flex justify-center items-center gap-2 mb-8">
            <span class="text-sm font-semibold text-gray-600">✨ Made with
                Scallo</span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div class="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&h=500&fit=crop"
                    class="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                    alt="Jewellery"/>
                <span
                    class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
            </div>
            <div class="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&h=500&fit=crop"
                    class="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                    alt="Furniture"/>
                <span
                    class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Furniture</span>
            </div>
            <div class="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&h=500&fit=crop"
                    class="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                    alt="Jewellery"/>
                <span
                    class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
            </div>
            <div class="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1631254316082-f5c71658f8b6?q=80&w=400&h=500&fit=crop"
                    class="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                    alt="Fashion"/>
                <span
                    class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
            </div>
            <div class="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&h=500&fit=crop"
                    class="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                    alt="Home Decor"/>
                <span
                    class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Home
                    Decor</span>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
            <div
                class="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold hover:border-orange-200 transition">
                <span>⚡</span> Instant Delivery
            </div>
            <div
                class="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-red-500 hover:border-red-200 transition">
                <span>🎯</span> Detail Perfect
            </div>
            <div
                class="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-emerald-600 hover:border-emerald-200 transition">
                <span>📦</span> Amazon Ready
            </div>
            <div
                class="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-blue-600 hover:border-blue-200 transition">
                <span>💎</span> Jewellery Specialist
            </div>
        </div>
    </section>
    <main class="max-w-7xl mx-auto mt-20 px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-4 space-y-8">
                <div class="max-w-md">
                    <h1
                        class="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                        From One Photo to an <br/>
                        <span class="text-slate-900">Amazon-Ready Listing</span>
                    </h1>
                    <p class="text-gray-500 text-sm leading-relaxed">
                        Upload a single product image — Scallo automatically
                        generates every visual Amazon needs to approve, rank,
                        and sell your product.
                    </p>
                </div>
                <div
                    class="relative p-6 border-2 border-dashed border-yellow-200 rounded-3xl bg-white shadow-sm">
                    <span
                        class="absolute top-4 left-4 bg-white border border-yellow-400 text-yellow-700 text-[10px] px-3 py-1 rounded-full font-bold uppercase z-10">
                        Your Uploaded Photo
                    </span>
                    <div
                        class="aspect-[4/5] flex items-center justify-center overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=500"
                            alt="Uploaded Sandals"
                            class="w-full h-full object-contain"/>
                    </div>
                </div>
                <p class="text-center text-xs text-gray-400">Upload any product
                    image — AI handles the rest.</p>
            </div>
            <div class="lg:col-span-8">
                <h3
                    class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
                    AI-Generated Amazon-Ready Set
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">1</span>
                            <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=400&fit=crop"
                                class="w-full h-full object-cover"/>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">Main
                                Listing Image</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">2</span>
                            <img src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=400&h=400&fit=crop"
                                class="w-full h-full object-contain p-4"/>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">White
                                Background Image</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">3</span>
                            <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400&h=400&fit=crop"
                                class="w-full h-full object-cover"/>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">
                                Lifestyle Scene</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">4</span>
                            <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=400&h=400&fit=crop"
                                class="w-full h-full object-cover scale-150"/>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">Zoom
                                Detail</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3 flex items-center justify-center">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">5</span>
                            <div class="text-center px-4">
                                <p
                                    class="text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                                    Effortless Elegance</p>
                                <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=200&h=200&fit=crop"
                                    class="w-full h-auto" />
                            </div>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">
                                Infographic / Feature Callout</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                    <div
                        class="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                        <div
                            class="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                            <span
                                class="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">6</span>
                            <img src="https://images.unsplash.com/photo-1481016570479-9eab6349fef7?q=80&w=400&h=400&fit=crop"
                                class="w-full h-full object-cover"/>
                        </div>
                        <div class="px-2 pb-2">
                            <h4 class="text-xs font-bold text-slate-800">Group
                                or Packaging Shot</h4>
                            <p class="text-[10px] text-gray-400 mt-1 uppercase">
                                Amazon-compliant • 1500x2000 • Auto-cropped</p>
                        </div>
                    </div>
                </div>
                <p class="text-center text-[10px] text-gray-400 mt-10">
                    Compliant with Amazon listing standards • Trusted by 400+
                    brands • Drives ₹10 Cr+ sales
                </p>
            </div>
        </div>
    </main>
    <section class="max-w-6xl mx-auto mt-24 pb-20 px-6 font-sans">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-extrabold text-slate-900 mb-2">
                Professional Photography at <span class="text-orange-600">₹10
                    per Photo</span>
            </h2>
            <p class="text-gray-500 text-sm max-w-2xl mx-auto">
                Stop spending lakhs on photoshoots. Get the same quality results
                for a fraction of the cost, delivered instantly.
            </p>
            <p class="text-[10px] text-gray-400 mt-2">Billed monthly. Credits
                are consumed for images/videos.</p>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div
                class="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-sm">
                <span
                    class="absolute top-4 right-6 bg-orange-100 text-orange-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase">Best
                    Value</span>
                <h3 class="text-lg font-bold text-slate-800 mb-1">Monthly Growth
                    Plan</h3>
                <div class="flex items-baseline gap-1 mb-6">
                    <span class="text-3xl font-black">₹999</span>
                    <span class="text-gray-400 text-sm">/month</span>
                </div>
                <div class="space-y-3 mb-8">
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>⚡</span> 100 Credits
                    </div>
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>🖼️</span> 100 Images
                    </div>
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>🎬</span> 20 Videos
                    </div>
                </div>
                <button onclick="openModal()"
                    class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition shadow-md text-sm">
                    Select Plan (₹10/photo)
                </button>
            </div>
            <div
                class="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h3 class="text-lg font-bold text-slate-800 mb-1">Monthly Lite
                    Plan</h3>
                <div class="flex items-baseline gap-1 mb-6">
                    <span class="text-3xl font-black">₹449</span>
                    <span class="text-gray-400 text-sm">/month</span>
                </div>
                <div class="space-y-3 mb-8">
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>⚡</span> 35 Credits
                    </div>
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>🖼️</span> 35 Images
                    </div>
                    <div class="flex items-center gap-3 text-sm text-slate-600">
                        <span>🎬</span> 12 Videos
                    </div>
                </div>
                <button onclick="openModal()"
                    class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition shadow-md text-sm">
                    Select Plan (₹13/photo)
                </button>
            </div>
        </div>
        <div class="flex flex-col items-center gap-6 mb-16">
            <div
                class="bg-orange-50 border border-orange-100 text-orange-700 text-[10px] px-4 py-1 rounded-full font-bold flex items-center gap-2">
                🎁 5 credits free trial
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                <div
                    class="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                    <span class="text-gray-400">💬</span> Priority WhatsApp
                    Support
                </div>
                <div
                    class="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                    <span class="text-yellow-500">💛</span> Dedicated Account
                    Manager
                </div>
                <div
                    class="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                    <span class="text-blue-500">🎧</span> 24/7 Support
                </div>
            </div>
            <div class="text-[10px] text-gray-400">➕ Addon Credits at ₹10/credit
            </div>
        </div>
        <div
            class="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-center">
            <h4 class="text-lg font-bold text-slate-800 mb-2">
                Want our team to do the photoshoot? <span
                    class="text-orange-600">Opt for our managed service</span>
            </h4>
            <p class="text-gray-400 text-xs mb-6">We'll handle everything
                end-to-end: products, setup, models, and delivery.</p>
            <div class="flex flex-col items-center gap-2">
                <a href="https://wa.me/918092492943" target="_blank"
                    class="contents">
                    <button
                        class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition shadow-md text-sm">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            class="w-5 h-5 invert" alt="WhatsApp"/>
                        Connect with Us
                    </button>
                </a>
                <p class="text-[10px] text-gray-400">WhatsApp: +91 8092492943
                </p>
            </div>
        </div>
    </section>
     <div id="modal-overlay"
        class="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
        <div
            class="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
            <div
                class="bg-slate-50 border-b border-slate-100 p-5 px-8 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-900 tracking-tight">
                        Get Started</h2>
                    <p class="text-slate-500 text-xs">Transform your business
                        with AI photography.</p>
                </div>
                <button onclick="closeModal()"
                    class="text-slate-400 hover:text-slate-600 transition-colors p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="p-6 px-8 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Brand
                            Name *</label>
                        <input type="text" placeholder="Brand Name"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300"/>
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email
                            Address *</label>
                        <input type="email" placeholder="name@company.com"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300"/>
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone
                            Number *</label>
                        <input type="tel" placeholder="+91 00000 00000"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300"/>
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Photos
                            Needed *</label>
                        <div class="relative">
                            <select id="photo-count" onchange="updateCost()"
                                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all appearance-none cursor-pointer">
                                <option value="50">50 photos</option>
                                <option value="100">100 photos</option>
                                <option value="500">500 photos</option>
                            </select>
                            <div
                                class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                <svg class="w-3 h-3" fill="none"
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
                    class="bg-slate-900 rounded-xl p-4 text-white flex justify-between items-center">
                    <div>
                        <p
                            class="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">
                            Estimated Cost</p>
                        <p class="text-sm font-medium text-slate-200">
                            <span id="display-count">50</span> images <span
                                class="text-slate-500 mx-1">×</span> ₹10
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-white">₹<span
                                id="total-price">500</span></p>
                        <p class="text-[10px] text-emerald-400 font-medium">Save
                            ₹5,500 vs Studio</p>
                    </div>
                </div>
                <div class="space-y-3">
                    <button
                        class="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200">
                        Get Started Now
                    </button>
                    <div class="flex items-center justify-between px-1">
                        <p
                            class="text-[10px] text-slate-400 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Secure Encryption
                        </p>
                        <p
                            class="text-[10px] text-slate-400 font-medium uppercase tracking-tighter italic">
                            Built for Indian Brands</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
