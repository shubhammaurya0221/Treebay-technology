import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Sustainability() {
  const points = [
    {
      title: "Smart Thermal Engineering",
      desc: "Harnessing multi-effect evaporators to slash energy footprints, recycling thermal heat throughout the process for radical efficiency."
    },
    {
      title: "Circular Water Economy",
      desc: "Our Zero Liquid Discharge (ZLD) systems ensure not a single drop is wasted, recycling 100% of effluent water back into the production cycle."
    },
    {
      title: "Carbon Capture Integration",
      desc: "Turning waste into wealth. Our recovery plants capture fermentation CO2, purifying it for high-value food and industrial applications."
    }
  ];

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg)] min-h-[90vh] flex items-center overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
        
        {/* Left Side: Enlarged Visual Element */}
        <div className="order-2 lg:order-1 flex justify-center items-center relative">
          
          {/* Decorative Outer Pulse Ring */}
          <div className="absolute w-[110%] h-[110%] rounded-full border border-[var(--color-primary)]/20 animate-[ping_5s_linear_infinite] hidden lg:block"></div>
          
          {/* Main Large Circle Container */}
          <div className="relative w-full max-w-[550px] aspect-square rounded-full overflow-hidden border border-[var(--color-border)] group shadow-2xl shadow-[var(--color-primary)]/10">
            
            {/* 1. Base Image Layer */}
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Bio-ethanol Production Plant" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out z-0" 
            />

            {/* 2. Sophisticated Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-[var(--color-bg-deep)] via-transparent to-[var(--color-primary)]/30 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-bg-deep)_100%)] opacity-80 z-20"></div>

          </div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 z-30">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[var(--color-secondary)]/50"></div>
            <h2 className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.4em] uppercase">Environment First</h2>
          </div>
          
          <h3 className="font-serif text-4xl md:text-6xl text-[var(--color-text)] mb-12 leading-tight">
            Engineering a <span className="italic text-[var(--color-primary)]">Greener</span> Future
          </h3>
          
          <ul className="space-y-10">
            {points.map((point, i) => (
              <li key={i} className="flex gap-6 items-start group cursor-pointer">
                <div className="relative">
                  <CheckCircle2 className="text-[var(--color-primary)] flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-500" size={28} />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/30 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <div className="space-y-2 group-hover:translate-x-3 transition-transform duration-300">
                  <h4 className="text-[var(--color-text)] font-serif text-xl tracking-wide">{point.title}</h4>
                  <p className="text-[var(--color-muted)] font-light leading-relaxed max-w-md group-hover:text-[var(--color-text-muted)] transition-colors">
                    {point.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}