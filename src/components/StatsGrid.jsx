import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ to, duration = 1.5, suffix = "", prefix = "", colorClass = "text-black" }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { amount: 0.3 });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(0, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // expo-out
        onUpdate(value) {
          // format to 1 decimal if float
          const formatted = to % 1 !== 0 ? value.toFixed(1) : Math.floor(value);
          node.textContent = `${prefix}${formatted}${suffix}`;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, prefix, suffix]);

  return (
    <span ref={nodeRef} className={`text-5xl md:text-6xl font-medium tracking-tighter ${colorClass}`}>
      {prefix}0{suffix}
    </span>
  );
}

export default function StatsGrid() {
  return (
    <section className="px-10 pb-4">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1280px] mx-auto bg-white rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
          
          {/* Top Left */}
          <div className="p-12 md:p-16 flex flex-col items-start justify-center">
            <div className="border border-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide mb-6">
              Key Metrics
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-4">
              Define Our Excellence
            </h2>
            <p className="text-slate-500 text-sm max-w-[280px]">
              Decades of experience translated into measurable success and unparalleled reliability.
            </p>
          </div>

          {/* Top Right */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="mb-2">
              <Counter to={1.5} suffix=" million" />
            </div>
            <p className="text-slate-500 text-sm">Tons of cargo handled annually</p>
          </div>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Bottom Left */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="mb-2">
              <Counter to={99} suffix="%" colorClass="text-slate-400" />
            </div>
            <p className="text-slate-500 text-sm">Shipments arrive on time</p>
          </div>

          {/* Bottom Right */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <div className="mb-2">
              <Counter to={100} suffix="+" />
            </div>
            <p className="text-slate-500 text-sm">Countries served worldwide</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
