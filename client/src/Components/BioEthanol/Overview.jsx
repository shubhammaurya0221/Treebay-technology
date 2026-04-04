import React from 'react';
import { Fuel, Factory, Leaf, Zap } from 'lucide-react';

export default function Overview() {
  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[#050905] border-b border-white/5 min-h-[80vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
            <h2 className="text-[#c29a4b] text-[10px] font-bold tracking-[0.2em] uppercase">Introduction</h2>
          </div>
          
          <h3 className="font-serif text-4xl md:text-5xl text-white mb-8">
            What is <span className="italic text-gray-400">Bio-Ethanol?</span>
          </h3>
          
          <div className="space-y-5 text-gray-400 text-xl leading-relaxed mb-10">
            <p>
              Bio-ethanol is a renewable, clean-burning alcohol fuel produced through the fermentation of sugars found in agricultural feedstocks like sugarcane, corn, and biomass. 
            </p>
            <p>
              As the world accelerates its transition towards sustainable energy, bio-ethanol serves as a critical bridge. When blended with traditional gasoline, it significantly enhances fuel octane rating while drastically cutting down harmful tailpipe emissions and carbon footprint.
            </p>
          </div>

          {/* Expanded Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-10">
            
            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#0c1a10] border border-white/5 rounded-sm group-hover:border-[#1c6b36] transition-colors">
                  <Fuel className="text-[#1c6b36]" size={20}/>
                </div> 
                <span className="text-base font-serif text-white group-hover:text-[#c29a4b] transition-colors">Fuel Blending</span>
              </div>
              <p className="text-md text-gray-500 leading-relaxed pl-[3.5rem]">Primary additive (E10, E20) to gasoline, reducing global fossil fuel dependence.</p>
            </div>
            
            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#0c1a10] border border-white/5 rounded-sm group-hover:border-[#1c6b36] transition-colors">
                  <Factory className="text-[#1c6b36]" size={20}/>
                </div> 
                <span className="text-base font-serif text-white group-hover:text-[#c29a4b] transition-colors">Industrial Usage</span>
              </div>
              <p className="text-md text-gray-500 leading-relaxed pl-[3.5rem]">Crucial raw material for pharmaceuticals, cosmetics, and green chemicals.</p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#0c1a10] border border-white/5 rounded-sm group-hover:border-[#1c6b36] transition-colors">
                  <Leaf className="text-[#1c6b36]" size={20}/>
                </div> 
                <span className="text-base font-serif text-white group-hover:text-[#c29a4b] transition-colors">Carbon Reduction</span>
              </div>
              <p className="text-md text-gray-500 leading-relaxed pl-[3.5rem]">Lowers greenhouse gas emissions by up to 48% compared to regular gasoline.</p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#0c1a10] border border-white/5 rounded-sm group-hover:border-[#1c6b36] transition-colors">
                  <Zap className="text-[#1c6b36]" size={20}/>
                </div> 
                <span className="text-base font-serif text-white group-hover:text-[#c29a4b] transition-colors">High Octane</span>
              </div>
              <p className="text-md text-gray-500 leading-relaxed pl-[3.5rem]">Naturally boosts engine performance and prevents engine knocking.</p>
            </div>

          </div>
        </div>

        {/* Right Image with Floating Badge */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group">
             <img src="https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=2051&auto=format&fit=crop" alt="Ethanol Lab" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#050905] via-[#050905]/40 to-transparent"></div>
          </div>
          
          {/* Floating Glassmorphism Badge */}
          <div className="absolute -bottom-6 -left-4 md:bottom-8 md:-left-12 bg-[#0c1a10]/90 backdrop-blur-md border border-white/10 p-6 shadow-2xl rounded-sm max-w-[240px] md:max-w-xs transition-transform duration-500 hover:-translate-y-2">
            <span className="text-3xl md:text-4xl font-serif text-white block mb-1">100%</span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[#c29a4b] block mb-3">Renewable Resource</span>
            <p className="text-md text-gray-400 font-light leading-relaxed">
              Driving the circular economy by converting agricultural surplus into high-value clean energy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}