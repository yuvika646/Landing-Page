import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const counterRef = useRef(null);

  useEffect(() => {
    // Animate counter 0 → 100 linearly over 1.5s
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: 'linear',
      onUpdate: (v) => {
        const rounded = Math.floor(v);
        setProgress(rounded);
        if (counterRef.current) {
          counterRef.current.textContent = `${rounded}%`;
        }
      },
      onComplete: () => {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 700);
        }, 300);
      }
    });
    return () => controls.stop();
  }, [onComplete]);

  return (
        <motion.div
          initial={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 flex flex-col justify-between p-8 md:p-12"
          style={{ backgroundColor: '#F97316', zIndex: 99999 }}
        >
          {/* Heading top-left */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight"
          >
            Global Freight.<br />Done Right.
          </motion.h1>

          {/* Moving Number Loader */}
          <div className="w-full mt-auto pb-4 relative overflow-hidden">
            {/* Background track */}
            <div className="absolute bottom-4 left-0 w-full h-[2px] bg-white/30" />
            
            <motion.div
               className="flex flex-col items-end relative"
               initial={{ width: '0%' }}
               animate={{ width: '100%' }}
               transition={{ duration: 1.5, ease: 'linear' }}
            >
               <span
                 ref={counterRef}
                 className="text-5xl md:text-7xl font-light text-white tracking-tighter tabular-nums mb-4 pr-2 md:pr-4"
               >
                 0%
               </span>
               <div className="h-[2px] w-full bg-white" />
            </motion.div>
          </div>
        </motion.div>
  );
}
