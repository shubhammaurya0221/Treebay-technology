import React from 'react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-6 bg-background" aria-labelledby="capabilities-heading">
      <div className="max-w-8xl mx-auto">
        <div className="mb-16 grid gap-5 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Our Specialisations</span>
            </div>
            <h2 id="capabilities-heading" className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
              Three Pillars of<br/><span className="italic text-foreground-muted">Clean Energy</span> EPC
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-foreground-muted font-light leading-relaxed text-lg max-w-lg">
              From sugarcane fields to bio-refineries, we engineer, procure, and construct the infrastructure that transforms organic feedstocks into clean fuels and chemicals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Ethanol Distilleries Card */}
          <div className="capability-card group relative overflow-hidden rounded-sm lg:col-span-2">
            <div className="relative overflow-hidden h-[520px]">
              <img alt="Ethanol processing equipment" className="cap-img object-cover w-full h-full" src="https://img.rocket.new/generatedImages/rocket_gen_img_105747df9-1774614331769.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute top-5 right-5 glass-panel px-4 py-3 text-center">
                <span className="block font-serif text-2xl font-medium text-foreground">500 KLPD</span>
                <span className="block text-xs uppercase tracking-wider text-foreground-muted mt-0.5">Max Capacity Delivered</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-xs uppercase tracking-widest text-accent mb-2 block">Grain · Sugarcane · Multi-Feed</span>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3 tracking-tight">Ethanol Distilleries</h3>
              <p className="text-sm text-foreground-muted font-light leading-relaxed line-clamp-3">
                Complete EPC for grain-based and sugarcane-based ethanol plants from 30 KLPD to 500 KLPD.
              </p>
            </div>
          </div>
          
          {/* Add Bio-CNG and Green Chemical cards here following the same structure */}
        </div>
      </div>
    </section>
  );
}