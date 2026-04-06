import React from 'react';

export default function CTASection() {
  return (
    <section className="py-32 px-8 text-center bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg-deep)] border-t border-[var(--color-border)] min-h-[50vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] mb-8 tracking-tight">
          Start Building Your Project <span className="italic text-[var(--color-secondary)]">Today.</span>
        </h2>
        <p className="text-[var(--color-muted)] mb-12 text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Our engineering team is ready to provide a detailed techno-commercial feasibility overview for your upcoming plant.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text)] transition-all shadow-xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-1">
            Contact Us
          </button>
          <button className="border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] px-10 py-5 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-text)] transition-all hover:-translate-y-1 hover:bg-[var(--color-secondary)]/5">
            Request Proposal
          </button>
        </div>
      </div>
    </section>
  );
}