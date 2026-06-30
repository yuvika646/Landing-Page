import React from 'react';
import { motion } from 'framer-motion';

export default function EfficiencyInAction() {
  return (
    <section className="px-10 pb-4 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Card */}
          <div className="bg-[#F4F4F5] rounded-2xl p-8 md:p-12 flex flex-col min-h-[500px]">
            <div className="border border-slate-200 text-slate-900 bg-white px-4 py-2 rounded-full text-xs font-medium tracking-wide inline-flex self-start mb-10">
              Efficiency in Action
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
              <h3 className="text-2xl md:text-[28px] font-normal leading-[1.3] tracking-tight max-w-[380px]">
                <span className="text-black font-medium">Seamless container handling across a</span>{' '}
                <span className="text-slate-400">global network, ensuring reliable and efficient delivery.</span>
              </h3>
              
              <button className="hidden md:flex shrink-0 items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors">
                Learn More
                <span>→</span>
              </button>
            </div>

            {/* Bottom: photo left + "02" number right */}
            <div className="mt-auto flex items-end justify-between">
              <div className="h-48 md:h-52 w-[55%] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                  alt="Port crane handling containers" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-6xl md:text-7xl font-light text-slate-300 tracking-tighter leading-none mr-4">02</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-end pr-4">
              <h3 className="text-base font-normal text-slate-900 tracking-tight max-w-xs text-right leading-snug">
                Optimize Your Shipping with <br/><span className="font-semibold">Data-Driven Insights</span>
              </h3>
            </div>

            {/* Dashboard Card — slides in from right */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-6 md:p-8 flex-1 border border-slate-100"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div className="text-lg font-semibold text-slate-900 tracking-tight">Shipment analytics</div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                  📅 January - May 2024
                  <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <button className="w-7 h-7 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 text-xs">⋯</button>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Total delivery :</span>
                  <span className="font-semibold text-slate-900">200,783</span>
                  <span className="flex items-center text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded font-medium">↑ 2.46%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">On Delivery :</span>
                  <span className="font-semibold text-slate-900">2,163</span>
                  <span className="flex items-center text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded font-medium">↑ 4.78%</span>
                </div>
              </div>

              {/* Chart Bars */}
              <div className="relative h-40 flex items-end gap-1 md:gap-2 pb-0 px-1">
                <div className="absolute left-0 top-0 bottom-0 w-7 flex flex-col justify-between text-[10px] text-slate-400 pb-6">
                  <span>10k</span>
                  <span>5k</span>
                  <span>2.5k</span>
                  <span>500</span>
                </div>
                
                <div className="flex-1 flex items-end justify-around h-full pl-8">
                  {[18, 22, 15, 30, 20, 38, 85, 60, 45, 35].map((val, i) => {
                    const isOrange = i === 6;
                    return (
                      <div key={i} className="flex flex-col items-center justify-end h-full gap-2 group">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-4 md:w-6 rounded-t-md ${isOrange ? 'bg-orange-500' : 'bg-slate-800'}`}
                        />
                        <span className="text-[9px] font-medium text-slate-400 h-3 flex items-end">
                          {['', 'Jan', '', '', 'Feb', '', '', 'Mar', '', ''][i]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-6 bg-white rounded-2xl px-10 py-8">
          <p className="text-sm font-normal text-slate-600 mb-6">
            These logos represent our commitment to quality and reliability across industries.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-70 grayscale">
            <span className="text-2xl font-black italic tracking-tighter">DHL</span>
            <span className="text-lg font-bold tracking-tight">PANALPINA</span>
            <span className="text-2xl font-bold tracking-tighter"><span className="text-purple-800">Fed</span><span className="text-orange-500">Ex</span></span>
            <span className="flex items-center gap-1 text-lg font-bold"><span className="text-xl">✻</span> MAERSK</span>
            <span className="text-2xl font-black lowercase tracking-tighter">msc</span>
            <span className="text-lg font-bold italic tracking-tight">Cargill</span>
            <span className="text-lg font-bold tracking-tighter">CMA CGM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
