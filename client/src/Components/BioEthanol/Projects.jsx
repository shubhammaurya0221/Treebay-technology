import React from 'react';
import { ArrowRight, MapPin, Gauge } from 'lucide-react';

export default function Projects() {
  const projects = [
    { 
      title: "Grain-Based Ethanol Plant", 
      loc: "Punjab, India", 
      cap: "200 KLPD", 
      highlight: "Multi-feed distillation system processing broken rice and maize.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      title: "Advanced Bio-Refinery", 
      loc: "Maharashtra, India", 
      cap: "120 KLPD", 
      highlight: "Integrated Zero Liquid Discharge (ZLD) with 100% water recovery.",
      img: "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=2051&auto=format&fit=crop" 
    },
    { 
      title: "Starch to Fuel Complex", 
      loc: "Karnataka, India", 
      cap: "150 KLPD", 
      highlight: "High-efficiency liquefaction technology reducing steam consumption by 15%.",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[#0c1a10] border-y border-white/5 min-h-[90vh] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-[#c29a4b] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Engineering Excellence</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-white leading-tight">Our Global Footprint</h3>
        </div>
        <p className="text-gray-400 font-light max-w-sm leading-relaxed">
          Delivering high-performance ethanol facilities that set the benchmark for yield, purity, and sustainable energy production.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="group relative h-[550px] overflow-hidden rounded-sm border border-white/5 cursor-pointer bg-black">
            {/* Background Image with sophisticated hover scale */}
            <img 
              src={proj.img} 
              alt={proj.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
            />
            
            {/* Multi-layered Gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050905] via-[#050905]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              {/* Location Tag */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={12} className="text-[#c29a4b]" />
                <span className="text-[#c29a4b] text-[10px] font-bold tracking-[0.2em] uppercase">{proj.loc}</span>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-serif text-white mb-3 group-hover:text-[#c29a4b] transition-colors">{proj.title}</h4>
              
              {/* Detailed Highlight (Hidden until hover) */}
              <p className="text-gray-400 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                {proj.highlight}
              </p>
              
              {/* Stats Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <Gauge size={16} className="text-white/50" />
                    <span className="text-xs text-white uppercase tracking-widest">{proj.cap} Output</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#c29a4b] group-hover:border-[#c29a4b] transition-all duration-500">
                    <ArrowRight className="text-white group-hover:text-black" size={18} />
                </div>
              </div>
            </div>

            {/* Decorative Number */}
            <span className="absolute top-8 right-8 text-white/5 font-serif text-7xl group-hover:text-[#c29a4b]/10 transition-colors">0{i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}