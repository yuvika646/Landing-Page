import React from 'react';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="px-10 pt-10 pb-4">
      <div className="max-w-[1280px] mx-auto relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
        {/* Image — taller aspect to match reference */}
        <div className="aspect-[16/9] md:aspect-[16/8] w-full">
          <img 
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
            alt="Shipping containers at golden hour"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Top-left heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute top-16 md:top-20 left-8 md:left-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight">
            Global Freight.<br />Done Right.
          </h1>
        </motion.div>

        {/* Bottom-left caption + indicator bars */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute bottom-8 md:bottom-10 left-8 md:left-10"
        >
          <p className="text-sm text-white/90 leading-relaxed max-w-[260px] mb-4">
            Reliable, fast, and cost-effective solutions<br />for all <span className="font-semibold">your cargo needs.</span>
          </p>
          {/* Indicator bars */}
          <div className="flex gap-2">
            <div className="w-8 h-[3px] rounded-full bg-white"></div>
            <div className="w-8 h-[3px] rounded-full bg-white/30"></div>
          </div>
        </motion.div>

        {/* Bottom-right arrow button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-8 md:bottom-10 right-8 md:right-10 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black transition-shadow hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </motion.button>

      </div>
    </section>
  );
}
