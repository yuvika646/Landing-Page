import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="px-10 pb-4">
      <div className="max-w-[1280px] mx-auto bg-white rounded-2xl p-10 md:p-14 relative overflow-hidden">
        
        {/* Top row: badge left, thumbnails center-right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          {/* Badge */}
          <div className="border border-slate-200 text-slate-800 px-4 py-2 rounded-full text-xs font-medium tracking-wide">
            Why Choose Us
          </div>

          {/* Side-by-side Thumbnails — centered */}
          <div className="flex gap-4 mx-auto md:mx-0 md:mr-auto md:ml-32">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c15902?q=80&w=2070&auto=format&fit=crop"
              alt="Container yard"
              className="w-[160px] h-[140px] object-cover rounded-2xl"
            />
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
              alt="Port cranes"
              className="w-[160px] h-[140px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Heading — larger text */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-normal leading-[1.35] max-w-[520px] tracking-tight"
        >
          <span className="text-black">We deliver more than cargo—we deliver trust,</span>{' '}
          <span className="text-slate-400">peace of mind, and exceptional value</span>
        </motion.h2>

      </div>
    </section>
  );
}
