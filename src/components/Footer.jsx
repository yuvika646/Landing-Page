import React from 'react';

const footerLinks = [
  { name: 'Home', icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )},
  { name: 'Services', icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  )},
  { name: 'Tracking', icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )},
  { name: 'Pricing', icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  )},
  { name: 'About Us', icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer className="px-10 pb-10">
      <div className="max-w-[1280px] mx-auto bg-[#0B0E14] rounded-2xl px-10 md:px-16 pt-14 pb-0 text-white overflow-hidden relative">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div className="flex items-center gap-2 border border-white/20 bg-white/5 px-5 py-2.5 rounded-full text-sm font-medium text-white">
            <span>📍</span> 
            <span className="text-white/60">Search Location</span>
            <span className="font-semibold text-white">Yogyakarta, Indonesia</span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
            Request A Quote 
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Heading & Nav Links */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 pb-14 border-b border-white/10">
          <h2 className="text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] max-w-md">
            Ready to Ship with Confidence?
          </h2>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href="#" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* 3-Column Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 relative z-10">
          <div>
            <h4 className="text-white/60 font-medium text-sm mb-5">Head office</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              SchnellTransport AG<br />
              Frachtweg 15<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </div>
          <div>
            <h4 className="text-white/60 font-medium text-sm mb-5">Postal & Visitor address</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              SchnellTransport AG<br />
              Frachtweg 15<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </div>
          <div>
            <div className="mb-6">
              <h4 className="text-white/60 font-medium text-sm mb-3">Email</h4>
              <a href="mailto:info@swiftcontainers.com" className="block text-white text-xl md:text-2xl font-normal hover:text-white/80 transition-colors tracking-tight">
                info@swiftcontainers.com
              </a>
            </div>
            <div>
              <h4 className="text-white/60 font-medium text-sm mb-3">Phone</h4>
              <a href="tel:+4922520899" className="block text-white text-xl md:text-2xl font-normal hover:text-white/80 transition-colors tracking-tight">
                +49 22 520 899
              </a>
            </div>
          </div>
        </div>



      </div>
    </footer>
  );
}
