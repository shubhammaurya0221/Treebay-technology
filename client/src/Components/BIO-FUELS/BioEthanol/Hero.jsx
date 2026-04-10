import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // FIX: Added bg-bg-deep here so the transparent image has a dark canvas to blend into
    <section className="bg-[var(--color-bg-deep)] relative pt-40 pb-32 px-8 min-h-screen flex flex-col justify-center border-b border-[var(--color-border)] overflow-hidden group/hero">
      
      {/* Background with slow zoom effect */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80" 
        style={{ 
          // To use a local image, change this to: backgroundImage: "url('/images/your-image-name.jpg')"
          backgroundImage: "url('https://www.dsengineers.com/files/uploads/2020/08/Ethanol-ABF-ALCO-BioFuel-bioethanol-plant-Belgium-2-700x600.jpg')" 
        }}
      />
      
     {/* Gradient Overlay restricted to 50% width */}
     <div className="absolute inset-y-0 left-0 z-0 w-1/2 bg-gradient-to-r from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/60 to-transparent"></div>

      {/* Content */}
       <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 mt-16">
        
        <div>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-[1px] bg-[var(--color-secondary)]"></div>
          <h2 className="text-[var(--color-secondary)] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Renewable Energy</h2>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] mb-6 max-w-4xl text-[var(--color-text)]"
        >
          Bio-Ethanol <br/> <span className="italic text-[var(--color-muted)]">Solutions.</span>
        </motion.h1>
        </div>
        
       <div className="flex flex-col justify-end pb-4">
         <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[var(--color-text)] text-balance md:text-[17px] mb-10 max-w-[28rem] leading-relaxed"
        >
          End-to-end EPC solutions for high-efficiency ethanol production. We engineer the future of clean fuel blending and industrial biofuels.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <motion.button 
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px var(--color-primary)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/90 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-4 shadow-lg shadow-[var(--color-primary)]/10 hover:shadow-[var(--color-primary)]/20"
          >
            Get Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all hover:bg-[var(--color-secondary)]/5"
          >
            View Projects
          </motion.button>
        </motion.div>
       </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] text-[var(--color-muted)] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--color-border)] animate-pulse"></div>
      </motion.div>
      
    </section>
  );
}