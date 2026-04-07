import React from "react";
import { Recycle, Flame, Factory, Droplets, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Advantages() {
  const advantages = [
    {
      num: "01",
      title: "Landfill Diversion",
      desc: "Significantly reduces the volume of end-of-life, mixed, and contaminated plastics that would otherwise end up polluting landfills or oceans.",
      icon: Recycle,
    },
    {
      num: "02",
      title: "Valuable Pyrolysis Oil",
      desc: "Converts waste plastic into high-quality synthetic crude (pyrolysis oil), which can be refined into usable fuels or chemical feedstocks.",
      icon: Droplets,
    },
    {
      num: "03",
      title: "Closed-Loop Manufacturing",
      desc: "Enables virgin-quality plastic production from recycled waste, reducing dependency on raw fossil fuel extraction and supporting true circularity.",
      icon: Factory,
    },
    {
      num: "04",
      title: "Self-Sustaining Process",
      desc: "The synthetic gas (syngas) produced during thermal degradation can be captured and routed back to fuel the pyrolysis reactor itself.",
      icon: Flame,
    },
  ];

  // Framer Motion staggered container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg)] relative overflow-hidden">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Sticky Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit z-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[var(--color-secondary)] rounded-full"></div>
              <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
                Advanced Recycling Solution
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-text)] leading-[1.1] mb-8 drop-shadow-sm">
              Why Choose <br />
              <span className="italic text-[var(--color-secondary)]">
                Plastics Pyrolysis?
              </span>
            </h2>

            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-10 font-light">
              The cornerstone of a circular economy. Pyrolysis unlocks advanced recycling by turning unrecyclable, abundant waste plastic back into versatile, high-density chemical feedstocks and energy.
            </p>

            <div className="hidden lg:flex flex-col gap-5 border-l-2 border-[var(--color-border)] pl-6 py-2">
              <span className="text-xs font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-3 hover:text-[var(--color-secondary)] transition-colors cursor-default">
                <div className="p-1 bg-[var(--color-bg-alt)] rounded-md border border-[var(--color-border)]">
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" />
                </div>
                Waste Reduction
              </span>
              <span className="text-xs font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-3 hover:text-[var(--color-secondary)] transition-colors cursor-default">
                <div className="p-1 bg-[var(--color-bg-alt)] rounded-md border border-[var(--color-border)]">
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" />
                </div>
                Resource Recovery
              </span>
              <span className="text-xs font-bold tracking-[0.15em] text-[var(--color-text)] uppercase flex items-center gap-3 hover:text-[var(--color-secondary)] transition-colors cursor-default">
                <div className="p-1 bg-[var(--color-bg-alt)] rounded-md border border-[var(--color-border)]">
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-secondary)]" />
                </div>
                Circular Economy
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Symmetrical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative z-10"
        >
          {advantages.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-[var(--color-bg-alt)] border border-[var(--color-border)] p-10 rounded-2xl overflow-hidden flex flex-col justify-between h-full transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-secondary)]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                {/* Animated Background Gradient Blob on Hover */}
                <div className="absolute -inset-full bg-gradient-to-tr from-[var(--color-secondary)]/0 via-[var(--color-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-1/2 group-hover:translate-y-1/4 transition-all duration-1000 blur-2xl z-0 pointer-events-none"></div>

                {/* Top Section: Small Icon + Number */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] group-hover:shadow-[0_0_20px_var(--color-secondary)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[var(--color-text)] group-hover:text-[var(--color-bg-deep)] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-5xl font-light text-[var(--color-text)]/10 group-hover:text-[var(--color-secondary)]/30 transition-colors duration-500 leading-none">
                    {item.num}
                  </span>
                </div>

                {/* Bottom Section: Text */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl text-[var(--color-text)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}