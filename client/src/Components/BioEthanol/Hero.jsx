import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    // FIX: Added bg-[#050905] here so the transparent image has a dark canvas to blend into
    <section className="bg-[#050905] relative pt-40 pb-32 px-8 min-h-screen flex flex-col justify-center border-b border-white/10 overflow-hidden group/hero">
      
      {/* Background with slow zoom effect on section hover */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80 transition-transform duration-[10s] group-hover/hero:scale-110" 
        style={{ 
          // To use a local image, change this to: backgroundImage: "url('/images/your-image-name.jpg')"
          backgroundImage: "url('https://www.dsengineers.com/files/uploads/2020/08/Ethanol-ABF-ALCO-BioFuel-bioethanol-plant-Belgium-2-700x600.jpg')" 
        }}
      ></div>
      
      {/* Shadow Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050905] via-[#050905]/10 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-[#c29a4b]"></div>
          <h2 className="text-[#c29a4b] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Renewable Energy</h2>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] mb-6 max-w-4xl text-white">
          Bio-Ethanol <br/> <span className="italic text-gray-400">Solutions.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed">
          End-to-end EPC solutions for high-efficiency ethanol production. We engineer the future of clean fuel blending and industrial biofuels.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <button className="group bg-[#1c6b36] text-white hover:bg-[#144f27] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-4 shadow-lg shadow-green-900/20 hover:shadow-green-900/40">
            Get Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/20 text-white hover:border-[#c29a4b] hover:text-[#c29a4b] px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all hover:bg-[#c29a4b]/5">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}