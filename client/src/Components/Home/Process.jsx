import React from 'react';
import { ArrowRight } from 'lucide-react'; // Added lucide-react for the arrow icon

export const Process = () => {
  const steps = [
    { num: "01", title: "Feasibility & FEED", desc: "Front-end engineering design, layout conceptualization, and utility calculation for project viability.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" },
    { num: "02", title: "Detailed Engineering", desc: "Process flow diagrams, P&IDs, equipment data sheets, and structural designs tailored to exact specs.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" },
    { num: "03", title: "Procurement & Fabrication", desc: "Vendor coordination, global sourcing of process equipment, structural elements, heat exchangers, and tanks.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" },
    { num: "04", title: "Construction & Commissioning", desc: "Site mobilization, civil works, piping, electrical instrumentation, safe start-up, and performance guarantees.", img: "https://static.vecteezy.com/system/resources/thumbnails/050/680/200/small/industrial-machine-in-a-workshop-setting-operating-during-the-day-showcasing-precision-engineering-and-manufacturing-processes-photo.jpg" }
  ];

  return (
    <section id="process" className="py-32 px-8 max-w-[90rem] mx-auto w-full border-y border-white/5">
      
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
          <span className="text-[#c29a4b] text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Methodology
          </span>
          <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
        </div>
        
        <h3 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-white leading-[1.1] mb-6">
          The Art of Turnkey <br/>
          <span className="italic text-gray-400">Plant Delivery</span>
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
          A rigorous 4-phase execution strategy ensuring every project is delivered on schedule, within budget, and to global performance guarantees.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, idx) => (
          // Added relative positioning and a subtle upward translate on hover for the whole card
          <div key={idx} className="group cursor-pointer flex flex-col h-full transition-transform duration-500 hover:-translate-y-2">
            
            <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#050905] rounded-sm border border-white/5">
               {/* Animated Number: slides right and turns gold on hover */}
               <div className="absolute top-5 left-5 z-20 font-serif text-3xl font-medium text-white/80 transition-all duration-500 ease-out group-hover:text-[#c29a4b] group-hover:translate-x-2">
                 {step.num}
               </div>
               
               <img 
                 src={step.img} 
                 alt={step.title} 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[80%] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-out" 
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a10] via-transparent to-transparent opacity-90"></div>
            </div>
            
            {/* Title with sliding arrow */}
            <h4 className="font-serif text-xl text-white mb-3 tracking-tight group-hover:text-[#c29a4b] transition-colors duration-300 flex items-center gap-2">
              {step.title}
              {/* Arrow starts faded and slightly left, then slides into place */}
              <ArrowRight 
                size={16} 
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" 
              />
            </h4>
            
            {/* Description slightly fades up in brightness */}
            <p className="text-sm text-gray-400 font-light leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
              {step.desc}
            </p>

            {/* Expanding gold underline effect at the bottom */}
            <div className="mt-6 h-[1px] w-0 bg-[#c29a4b]/50 group-hover:w-full transition-all duration-700 ease-in-out mt-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};