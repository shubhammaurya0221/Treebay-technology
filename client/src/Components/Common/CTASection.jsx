import React from 'react';

export default function CTASection() {
  return (
    <section className="py-32 px-8 text-center bg-gradient-to-b from-[#0c1a10] to-[#050905] border-t border-white/10 min-h-[50vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1c6b36]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
          Start Your Ethanol Project <span className="italic text-[#c29a4b]">Today.</span>
        </h2>
        <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Our engineering team is ready to provide a detailed techno-commercial feasibility overview for your upcoming plant.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-[#1c6b36] hover:bg-[#144f27] px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all shadow-xl hover:shadow-green-900/50 hover:-translate-y-1">
            Contact Us
          </button>
          <button className="border border-white/20 hover:border-[#c29a4b] hover:text-[#c29a4b] px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:-translate-y-1 hover:bg-[#c29a4b]/5">
            Request Proposal
          </button>
        </div>
      </div>
    </section>
  );
}