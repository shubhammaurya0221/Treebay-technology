import React from 'react';
import { Fuel, Factory, Leaf, Zap } from 'lucide-react';

export default function Overview() {
  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg-deep)] border-b border-[var(--color-border)] min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
            <h2 className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">Introduction</h2>
          </div>
          
          <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-text)] mb-8">
            What is <span className="italic text-[var(--color-muted)]">Bio-Ethanol?</span>
          </h3>
          
          <div className="space-y-5 text-[var(--color-muted)] text-xl leading-relaxed mb-10">
            <p>
              Bio-ethanol is a renewable, clean-burning alcohol fuel produced through the fermentation of sugars found in agricultural feedstocks like sugarcane, corn, and biomass. 
            </p>
            <p>
              As the world accelerates its transition towards sustainable energy, bio-ethanol serves as a critical bridge. When blended with traditional gasoline, it significantly enhances fuel octane rating while drastically cutting down harmful tailpipe emissions and carbon footprint.
            </p>
          </div>

          {/* Expanded Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mt-10 border-t border-[var(--color-border)] pt-10">
            
            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors">
                  <Fuel className="text-[var(--color-primary)]" size={20}/>
                </div> 
                <span className="text-base font-serif text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">Fuel Blending</span>
              </div>
              <p className="text-md text-[var(--color-muted)] leading-relaxed pl-[3.5rem]">Primary additive (E10, E20) to gasoline, reducing global fossil fuel dependence.</p>
            </div>
            
            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors">
                  <Factory className="text-[var(--color-primary)]" size={20}/>
                </div> 
                <span className="text-base font-serif text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">Industrial Usage</span>
              </div>
              <p className="text-md text-[var(--color-muted)] leading-relaxed pl-[3.5rem]">Crucial raw material for pharmaceuticals, cosmetics, and green chemicals.</p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors">
                  <Leaf className="text-[var(--color-primary)]" size={20}/>
                </div> 
                <span className="text-base font-serif text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">Carbon Reduction</span>
              </div>
              <p className="text-md text-[var(--color-muted)] leading-relaxed pl-[3.5rem]">Lowers greenhouse gas emissions by up to 48% compared to regular gasoline.</p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors">
                  <Zap className="text-[var(--color-primary)]" size={20}/>
                </div> 
                <span className="text-base font-serif text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">High Octane</span>
              </div>
              <p className="text-md text-[var(--color-muted)] leading-relaxed pl-[3.5rem]">Naturally boosts engine performance and prevents engine knocking.</p>
            </div>

          </div>
        </div>

        {/* Right Image with Floating Badge */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group">
             <img src="https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=2051&auto=format&fit=crop" alt="Ethanol Lab" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/40 to-transparent"></div>
          </div>
          
          {/* Floating Glassmorphism Badge */}
          <div className="absolute -bottom-6 -left-4 md:bottom-8 md:-left-12 bg-[var(--color-bg-alt)]/90 backdrop-blur-md border border-[var(--color-border)] p-6 shadow-2xl rounded-sm max-w-[240px] md:max-w-xs transition-transform duration-500 hover:-translate-y-2">
            <span className="text-3xl md:text-4xl font-serif text-[var(--color-text)] block mb-1">100%</span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)] block mb-3">Renewable Resource</span>
            <p className="text-md text-[var(--color-muted)] font-light leading-relaxed">
              Driving the circular economy by converting agricultural surplus into high-value clean energy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}