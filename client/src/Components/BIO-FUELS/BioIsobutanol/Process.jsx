import React from 'react';
import { ArrowRight } from 'lucide-react'; // Added lucide-react for the arrow icon

export default function Process() {
 const steps = [
  {
    num: "01",
    title: "Feasibility & Feedstock Analysis",
    desc: "Evaluation of feedstock options, yield potential, and techno-commercial feasibility for bio-iso-butanol production.",
    // Image of laboratory testing and chemical analysis
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Process Engineering",
    desc: "Design of fermentation pathways, reaction kinetics, process flow diagrams, and integration of bio-reactors and separation systems.",
    // Image of engineers working on process blueprints/schematics
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Equipment & Integration",
    desc: "Procurement and integration of fermenters, distillation columns, heat exchangers, and advanced control systems.",
    // Image of complex industrial piping, valves, and equipment integration
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Commissioning & Optimization",
    desc: "Plant start-up, performance testing, yield optimization, and ensuring stable, efficient iso-butanol production.",
    // Image of a specialized worker/engineer conducting performance checks in a facility
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop"
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