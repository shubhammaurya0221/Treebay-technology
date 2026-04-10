import React from "react";
import { Truck, ArrowUpRight,  Leaf, Recycle, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

export default function Advantages() {

const advantages = [
  {
    num: "01",
    title: "Cleaner Combustion",
    desc: "Bio-methanol burns cleaner than fossil fuels, significantly reducing CO₂, NOx, and particulate emissions.",
    icon: Leaf,
  },
  {
    num: "02",
    title: "Flexible Feedstock Use",
    desc: "Can be produced from biomass, agricultural waste, and even municipal waste streams.",
    icon: Recycle,
  },
  {
    num: "03",
    title: "Scalable & Transportable",
    desc: "Liquid at ambient conditions — easy to store, transport, and integrate into existing infrastructure.",
    icon: Truck,
  },
  {
    num: "04",
    title: "Versatile Chemical Base",
    desc: "A critical building block for formaldehyde, acetic acid, and other green chemicals.",
    icon: FlaskConical,
  },
];

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg)] relative">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Sticky Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
              <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
                The Superior Biofuel
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-text)] leading-[1.1] mb-8">
              Why Choose <br />
              <span className="italic text-[var(--color-muted)]">
                Bio-Methanol?
              </span>
            </h2>

            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-10">
              A versatile, clean-burning fuel and chemical platform enabling decarbonization across multiple industries.
            </p>

            <div className="hidden lg:flex flex-col gap-4 border-l border-[var(--color-border)] pl-6 py-2">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" /> Higher Efficiency
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" /> Safer Handling
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" /> Infrastructure Ready
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Symmetrical Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {advantages.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                // h-full guarantees uniform heights across the row
                className="group relative bg-[var(--color-bg-alt)] border border-[var(--color-border)] p-10 overflow-hidden flex flex-col justify-between h-full transition-all duration-500 hover:border-[var(--color-primary)]/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
              >
                {/* Giant Background Icon */}
                <Icon className="absolute -bottom-10 -right-10 w-64 h-64 text-[var(--color-text)] opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

                {/* Top Section: Small Icon + Number */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-bg-deep)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[var(--color-text)] group-hover:text-[var(--color-bg-deep)] transition-colors duration-500" />
                  </div>
                  <span className="font-serif text-4xl text-[var(--color-border)] group-hover:text-[var(--color-secondary)] transition-colors duration-500 leading-none">
                    {item.num}
                  </span>
                </div>

                {/* Bottom Section: Text */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl text-[var(--color-text)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Minimalist Hover Line */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--color-secondary)] group-hover:h-full transition-all duration-700 ease-in-out"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}