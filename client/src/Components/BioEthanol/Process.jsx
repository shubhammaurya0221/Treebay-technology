import React from 'react';
import { ArrowRight, Settings2, FlaskConical, ThermometerSun, Droplets, Factory, ShieldCheck } from 'lucide-react';

export default function Process() {
  // Expanded details and added icons for a richer technical feel
  const flows = [
    { 
      step: "01", 
      name: "Feedstock Handling", 
      desc: "Raw grains or sugarcane molasses are received, cleaned, and milled into a fine powder or prepared for liquefaction. Impurities are mechanically separated.",
      icon: <Settings2 size={24} />
    }, 
    { 
      step: "02", 
      name: "Liquefaction", 
      desc: "The milled feedstock is mixed with water and alpha-amylase enzymes, then jet-cooked at high temperatures to break complex starches into dextrins.",
      icon: <ThermometerSun size={24} />
    },
    { 
      step: "03", 
      name: "Fermentation", 
      desc: "Yeast and glucoamylase enzymes are added. Over 48-72 hours, the sugars are biologically converted into an alcohol 'mash' (10-15% ethanol) and CO2.",
      icon: <FlaskConical size={24} />
    }, 
    { 
      step: "04", 
      name: "Distillation", 
      desc: "The fermented mash enters multi-pressure distillation columns. Heat separates the ethanol from water and solids, achieving ~95% alcohol purity.",
      icon: <Factory size={24} />
    }, 
    { 
      step: "05", 
      name: "Dehydration", 
      desc: "The 95% ethanol is passed through Molecular Sieve Dehydration (MSDH) beds, which trap the remaining water molecules, yielding 99.8% pure absolute alcohol.",
      icon: <Droplets size={24} />
    }, 
    { 
      step: "06", 
      name: "Storage & Blending", 
      desc: "Pure bio-ethanol is safely pumped into PESO-approved bulk storage tanks, ready for denaturing and dispatch to oil marketing companies for fuel blending.",
      icon: <ShieldCheck size={24} />
    }
  ];

  // We duplicate the array so the infinite slider loops seamlessly without a gap
  const duplicatedFlows = [...flows, ...flows];

  return (
    // Full screen width, hidden overflow for the slider
    <section className="py-32 overflow-hidden w-full bg-[#050905] min-h-[90vh] flex flex-col justify-center border-y border-white/5 relative">
      
      {/* --- INLINE CSS FOR THE INFINITE SLIDER --- */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          /* Translates exactly half the width of the container to loop the duplicated array */
          100% { transform: translateX(calc(-50% - 0.75rem)); } 
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
        /* Pauses the animation when the user hovers anywhere over the slider container */
        .pause-on-hover:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-20 max-w-[90rem] mx-auto px-8 w-full relative z-10">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
          <span className="text-[#c29a4b] text-[10px] font-bold tracking-[0.2em] uppercase">
            Process Engineering
          </span>
          <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-tight mb-6">
          Ethanol Production Process
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto">
          Hover over any stage to pause and explore the technical workflow. From raw feedstock to 99.8% pure, fuel-grade absolute alcohol.
        </p>
      </div>

      {/* Infinite Slider Track Container */}
      <div className="relative w-full flex pause-on-hover mt-4">
        
        {/* Left & Right gradient fades so the cards emerge and disappear smoothly */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050905] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050905] to-transparent z-20 pointer-events-none"></div>

        {/* The Animated Scrolling Track */}
        <div className="flex gap-6 px-3 animate-infinite-scroll">
          {duplicatedFlows.map((flow, i) => (
            <div 
              key={i} 
              // Card Styling & Micro-interactions
              className="flex-shrink-0 w-[320px] md:w-[400px] h-[380px] bg-[#0c1a10] border border-white/5 rounded-sm p-8 flex flex-col group cursor-pointer hover:-translate-y-3 hover:border-[#c29a4b]/50 hover:bg-[#08120b] hover:shadow-2xl hover:shadow-[#c29a4b]/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Giant Faded Number in the background */}
              <div className="absolute -top-6 -right-6 text-[120px] font-serif font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none pointer-events-none">
                {flow.step}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Step Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#050905] border border-white/10 flex items-center justify-center text-[#1c6b36] group-hover:text-[#c29a4b] group-hover:scale-110 group-hover:border-[#c29a4b]/50 transition-all duration-500 shadow-xl">
                    {flow.icon}
                  </div>
                  <span className="text-[#c29a4b] font-mono text-sm tracking-widest">
                    STAGE {flow.step}
                  </span>
                </div>
                
                {/* Text Content */}
                <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-[#c29a4b] transition-colors duration-300">
                  {flow.name}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                  {flow.desc}
                </p>

                {/* Animated Bottom Line / Arrow */}
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 overflow-hidden">
                  <div className="h-[1px] w-0 bg-[#c29a4b] group-hover:w-12 transition-all duration-700 ease-out"></div>
                  <ArrowRight size={18} className="text-[#c29a4b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}