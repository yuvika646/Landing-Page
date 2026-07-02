import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CARDS = [
  {
    id: 1,
    badge: "01",
    title: "Road Shipping",
    caption: "Flexible and fast ground transport for regional deliveries across continents.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    badge: "02",
    title: "Air Shipping",
    caption: "Expedited air freight services for time-critical global shipments worldwide.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    badge: "03",
    title: "Sea Shipping",
    caption: "Cost-effective ocean freight solutions for large-scale container transport.",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=2032&auto=format&fit=crop"
  }
];

export default function ShippingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-10 pb-4">
      <div className="max-w-[1280px] mx-auto bg-white rounded-2xl p-6 sm:p-10 md:p-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 leading-tight">
            <span className="text-black block">Explore our flexible shipping options</span>
            <span className="text-slate-400 block">for every need in the world</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-14">
            Whether across land, air, or sea, we provide tailored logistics to ensure your cargo reaches its destination safely and on time.
          </p>
        </motion.div>

        <div className="relative h-[420px] w-full flex flex-col items-center justify-start mt-4">
          <div className="relative w-full max-w-[380px] h-[280px]">
            <AnimatePresence mode="popLayout">
              {CARDS.map((card, idx) => {
                let offset = idx - activeIndex;
                if (offset < 0) offset += CARDS.length;
                if (offset > 2) return null;

                const isFront = offset === 0;
                const zIndex = 30 - offset * 10;
                const scale = 1 - offset * 0.08;
                const y = offset * -20;
                const opacity = 1 - offset * 0.35;

                return (
                  <motion.div
                    key={card.id}
                    layoutId={`card-${card.id}`}
                    initial={{ opacity: 0, scale: 0.92, y: -20 }}
                    animate={{ opacity, scale, y, zIndex }}
                    exit={{ opacity: 0, scale: 0.95, y: 40 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.16, 1, 0.3, 1],
                      layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                    }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-10" />
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                      <h3 className="text-xl font-medium text-white text-left">{card.title}</h3>
                      <div className="flex items-end justify-between">
                        <span className="text-white/60 font-mono text-sm">{card.badge}</span>
                        <button 
                          className="text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1"
                          style={{ backgroundColor: '#F97316' }}
                        >
                          Learn More <span>→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Caption that crossfades */}
          <div className="mt-8 h-16 relative w-full flex flex-col items-center justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-500 text-sm max-w-xs"
              >
                {CARDS[activeIndex].caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
