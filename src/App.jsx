import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import EfficiencyInAction from './components/EfficiencyInAction';
import ScrollRevealText from './components/ScrollRevealText';
import ShippingCarousel from './components/ShippingCarousel';
import StatsGrid from './components/StatsGrid';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-page font-sans text-slate-900 overflow-x-hidden">
      
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <EfficiencyInAction />
        <ScrollRevealText />
        <ShippingCarousel />
        <StatsGrid />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
