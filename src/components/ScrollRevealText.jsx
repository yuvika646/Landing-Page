import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollRevealText() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // SVG slides from RIGHT to LEFT across the section
  const svgX = useTransform(scrollYProgress, [0, 1], ["40%", "-30%"]);

  const text = "Connecting the World Through Reliable, Efficient Shipping Solutions.";
  const words = text.split(" ");

  return (
    <section className="px-4 md:px-10 pb-4">
      <div 
        ref={containerRef} 
        className="max-w-[1280px] mx-auto bg-white rounded-2xl py-16 sm:py-24 md:py-32 relative overflow-hidden"
      >
        
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight flex flex-wrap gap-x-3 gap-y-1">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
                
                const isHighlight = ["Through", "Reliable,"].includes(word);
                
                return (
                  <motion.span 
                    key={i} 
                    style={{ opacity }}
                    className={isHighlight ? "text-orange-500" : "text-black"}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>
          </div>

          {/* Right: SVG container slides right-to-left */}
          <motion.div 
            style={{ x: svgX }}
            className="md:w-1/2 flex justify-center w-full px-4 md:px-0"
          >
            <svg className="w-full max-w-[420px] h-auto" viewBox="0 0 420 260" fill="none" stroke="black" strokeWidth="2" strokeLinejoin="round">
              {/* Container Outline */}
              <rect x="10" y="10" width="400" height="240" rx="3" />
              {/* Top edge detail */}
              <line x1="10" y1="30" x2="410" y2="30" />
              {/* Bottom edge detail */}
              <line x1="10" y1="230" x2="410" y2="230" />
              {/* Corrugated Vertical Lines */}
              {[...Array(18)].map((_, i) => (
                <line key={i} x1={32 + i * 21} y1="30" x2={32 + i * 21} y2="230" />
              ))}
              {/* Corner Bolts */}
              <circle cx="22" cy="22" r="4" fill="black" />
              <circle cx="398" cy="22" r="4" fill="black" />
              <circle cx="22" cy="238" r="4" fill="black" />
              <circle cx="398" cy="238" r="4" fill="black" />
              {/* Door handle area */}
              <rect x="390" y="100" width="8" height="60" rx="2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
