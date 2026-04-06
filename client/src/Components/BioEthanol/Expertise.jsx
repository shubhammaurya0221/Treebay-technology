import React from 'react';
import { Droplet, Wheat, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Expertise() {
  const expertise = [
    { 
      title: "Grain-Based Plants", 
      desc: "Optimized for starch-rich feedstocks like corn, broken rice, and millets with industry-leading conversion efficiency.",
      icon: <Wheat size={32} strokeWidth={1.5} />,
      features: [
        "Maximum starch-to-alcohol conversion",
        "High-protein DDGS byproduct recovery",
        "Energy-optimized liquefaction process"
      ]
    },
    { 
      title: "Sugarcane & Molasses", 
      desc: "Designed for seamless integration with existing sugar mills utilizing B-Heavy, C-Molasses, and direct cane juice.",
      icon: <Droplet size={32} strokeWidth={1.5} />,
      features: [
        "Ultra-low steam consumption (fed-batch)",
        "Integrated spent wash treatment",
        "100% Zero Liquid Discharge compliance"
      ]
    },
    { 
      title: "Multi-Feed Systems", 
      desc: "Flexible, dual-operation plant designs capable of switching between grain and molasses based on market availability.",
      icon: <RefreshCw size={32} strokeWidth={1.5} />,
      features: [
        "Guaranteed 330+ days of operation",
        "Dynamic fermentation management",
        "Advanced multi-product distillation"
      ]
    }
  ];

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg-deep)] min-h-[90vh] flex flex-col justify-center">
      
      {/* Header */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
          <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
            Core Capabilities
          </span>
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--color-text)] leading-tight mb-6">
          Our Ethanol Capabilities
        </h2>
        <p className="text-[var(--color-muted)] text-sm md:text-base font-light leading-relaxed">
          We engineer highly adaptable, next-generation distilleries that maximize yield and minimize energy consumption across all major feedstock varieties.
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {expertise.map((item, i) => (
          <div 
            key={i} 
            className="group relative bg-[var(--color-bg-alt)] border border-[var(--color-border)] overflow-hidden flex flex-col h-full min-h-[480px] hover:-translate-y-3 hover:border-[var(--color-secondary)]/40 hover:shadow-2xl hover:shadow-[var(--color-secondary)]/10 transition-all duration-700 cursor-pointer"
          >
            
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-[var(--color-bg-alt)] via-[var(--color-bg-alt)]/90 to-[var(--color-bg-alt)]/80"></div>

            {/* Content Container */}
            <div className="relative z-10 p-10 flex flex-col h-full">
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[var(--color-bg-deep)] border border-[var(--color-border)] flex items-center justify-center mb-8 group-hover:border-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)]/10 transition-colors duration-500">
                <div className="text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              
              {/* Text */}
              <h3 className="font-serif text-2xl lg:text-3xl text-[var(--color-text)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm font-light leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--color-primary)] mt-[2px] flex-shrink-0" size={16} />
                    <span className="text-[var(--color-text-muted)] text-xs font-light leading-relaxed group-hover:text-[var(--color-text)] transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Animated Footer/CTA */}
              <div className="pt-6 border-t border-[var(--color-border)] mt-auto flex items-center justify-between overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                  Explore Systems
                </span>
                <ArrowRight 
                  size={18} 
                  className="text-[var(--color-secondary)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}