import React from 'react';
import { ArrowRight } from 'lucide-react'; // Added lucide-react for the arrow icon

export default function Process() {
 const steps = [
  {
    num: "01",
    title: "Feasibility & Feedstock Assessment",
    desc: "Comprehensive evaluation of biomass, MSW, and biogas feedstocks including availability, composition, syngas yield potential, and techno-commercial viability for bio-methanol production.",
    // Biomass / agricultural waste (matches feedstock)
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Gasification & Process Engineering",
    desc: "Design of gasification, syngas conditioning, and catalytic synthesis pathways including process flow diagrams, heat integration, and reactor optimization.",
    // Industrial plant / gasification / heavy processing
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Equipment & Plant Integration",
    desc: "Procurement and integration of gasifiers, syngas cleanup units, catalytic reactors, distillation columns, and advanced automation systems.",
    // Complex piping / refinery systems (matches integration)
    img: "https://www.shutterstock.com/image-photo/petrochemical-plant-industrial-area-equipment-260nw-2466848561.jpg"
  },
  {
    num: "04",
    title: "Commissioning & Performance Optimization",
    desc: "Plant commissioning, performance validation, yield optimization, and ensuring stable, high-efficiency bio-methanol production with minimal emissions.",
    // Engineer monitoring plant / control systems
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsugv_mULg14Hy10Au4_ZGG9sFI8q7oCN0g&s"
  }
];
  return (
    <section id="process" className="py-32 px-8 max-w-[90rem] mx-auto w-full border-y border-[var(--color-border)]">
      
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
          <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Methodology
          </span>
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
        </div>
        
        <h3 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-[var(--color-text)] leading-[1.1] mb-6">
          The Science Behind <br/>
          <span className="italic text-[var(--color-muted)]">Iso-Butanol Production</span>
        </h3>
        <p className="text-[var(--color-muted)] text-sm md:text-base font-light leading-relaxed">
         A precision-driven execution strategy ensuring optimal yield, purity, and operational efficiency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, idx) => (
          // Added relative positioning and a subtle upward translate on hover for the whole card
          <div key={idx} className="group cursor-pointer flex flex-col h-full transition-transform duration-500 hover:-translate-y-2">
            
            <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[var(--color-bg-deep)] rounded-sm border border-[var(--color-border)]">
               {/* Animated Number: slides right and turns gold on hover */}
               <div className="absolute top-5 left-5 z-20 font-serif text-3xl font-medium text-[var(--color-text)]/80 transition-all duration-500 ease-out group-hover:text-[var(--color-secondary)] group-hover:translate-x-2">
                 {step.num}
               </div>
               
               <img 
                 src={step.img} 
                 alt={step.title} 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[80%] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-out" 
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-alt)] via-transparent to-transparent opacity-90"></div>
            </div>
            
            {/* Title with sliding arrow */}
            <h4 className="font-serif text-xl text-[var(--color-text)] mb-3 tracking-tight group-hover:text-[var(--color-secondary)] transition-colors duration-300 flex items-center gap-2">
              {step.title}
              {/* Arrow starts faded and slightly left, then slides into place */}
              <ArrowRight 
                size={16} 
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" 
              />
            </h4>
            
            {/* Description slightly fades up in brightness */}
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed transition-colors duration-300 group-hover:text-[var(--color-text-muted)]">
              {step.desc}
            </p>

            {/* Expanding gold underline effect at the bottom */}
            <div className="mt-6 h-[1px] w-0 bg-[var(--color-secondary)]/50 group-hover:w-full transition-all duration-700 ease-in-out mt-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};