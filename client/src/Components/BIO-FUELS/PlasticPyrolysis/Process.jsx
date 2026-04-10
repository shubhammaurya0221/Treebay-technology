import React from 'react';
import { ArrowRight, Trash2, Flame, Droplets, Beaker, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  // 5-Step Detailed Plastics Pyrolysis Process Data
  const steps = [
    {
      num: "01",
      title: "Sorting & Pre-processing",
      desc: "Post-consumer plastics are mechanically sorted, cleaned of contaminants, and shredded into small flakes to maximize thermal surface area.",
      img: "https://images.unsplash.com/photo-1748944084598-445c5f7d6d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29ydGluZyUyMCUyNiUyMFByZS1wcm9jZXNzaW5nfGVufDB8fDB8fHww",
      icon: Trash2
    },
    {
      num: "02",
      title: "Thermal Pyrolysis",
      desc: "The feedstock is heated in an oxygen-free reactor at high temperatures, breaking down long-chain polymers into hydrocarbon vapors.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      icon: Flame
    },
    {
      num: "03",
      title: "Oil Condensation",
      desc: "Hydrocarbon vapors are rapidly cooled in a multi-stage condenser, transforming into liquid pyrolysis oil (Bio-Crude) for further refining.",
      img: "https://images.unsplash.com/photo-1622129072237-577b301ecf4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2lsJTIwQ29uZGVuc2F0aW9ufGVufDB8fDB8fHww",
      icon: Droplets
    },
    {
      num: "04",
      title: "Fractional Distillation",
      desc: "The recovered oil is refined and separated into high-purity fractions such as naphtha, diesel, and heavy oils based on specific boiling points.",
      img: "https://plus.unsplash.com/premium_photo-1757922068410-7b9758e138ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJhY3Rpb25hbCUyMERpc3RpbGxhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      icon: Beaker
    },
    {
      num: "05",
      title: "Circular Integration",
      desc: "High-grade pyrolysis oil is utilized as a feedstock for new plastic production or high-efficiency fuels, closing the circular economy loop.",
      img: "https://images.unsplash.com/photo-1716194583732-0b9874234218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2lyY3VsYXIlMjBJbnRlZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      icon: Factory
    }
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section id="process" className="py-32 px-4 md:px-8 max-w-[100rem] mx-auto w-full border-y border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden relative">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-3xl mx-auto relative z-10"
      >
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
          <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Methodology
          </span>
          <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
        </div>
        
        <h3 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-[var(--color-text)] leading-[1.1] mb-6 drop-shadow-sm">
          The Process Behind <br/>
          <span className="italic text-[var(--color-secondary)]">Plastics Pyrolysis</span>
        </h3>

        <p className="text-[var(--color-text-muted)] text-sm md:text-base font-light leading-relaxed">
          A fully integrated chemical recycling lifecycle designed to transform waste plastics into valuable hydrocarbon feedstocks, enabling a truly circular economy.
        </p>
      </motion.div>

      {/* Grid: 1 col for mobile, lg:grid-cols-5 for desktop single line */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6 z-10"
      >
        {steps.map((step, idx) => {
          const Icon = step.icon;
          
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer flex flex-col h-full relative bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl p-5 xl:p-6 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[var(--color-secondary)]/50"
            >
              {/* Header: Step Number & Icon */}
              <div className="flex justify-between items-center mb-5">
                <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[var(--color-bg-deep)] border border-[var(--color-border)] flex items-center justify-center font-serif text-lg xl:text-xl text-[var(--color-text)] group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-bg-deep)] group-hover:border-[var(--color-secondary)] group-hover:shadow-[0_0_20px_var(--color-secondary)] transition-all duration-500 z-10">
                  {step.num}
                </div>
                <Icon className="w-5 h-5 xl:w-6 xl:h-6 text-[var(--color-muted)] group-hover:text-[var(--color-secondary)] transition-colors duration-500" strokeWidth={1.5} />
              </div>
              
              {/* Image Container with Parallax Zoom */}
              <div className="relative aspect-video mb-5 overflow-hidden rounded-xl bg-[var(--color-bg-deep)] shadow-sm">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              
              {/* Text Content */}
              <div className="flex-grow flex flex-col">
                <h4 className="font-serif text-lg xl:text-xl text-[var(--color-text)] mb-2 tracking-tight group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {step.title}
                </h4>
                
                <p className="text-[13px] xl:text-[14px] text-[var(--color-text-muted)] font-light leading-relaxed transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              {/* Interaction Footer */}
              <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                Explore Process
                <ArrowRight 
                  size={14} 
                  className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" 
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}