import React from 'react';
import { ArrowRight, Sun, Droplets, Zap, Filter, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  // 5-Step Detailed Green Hydrogen Process Data
  const steps = [
    {
      num: "01",
      title: "Renewable Energy Sourcing",
      desc: "Solar, wind, or hydro power is captured and conditioned to provide the massive, clean electrical load required for zero-emission production.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTPYEAg2L6hXKExdSISn_9kr5NQS3JF4RLQ&s",
      icon: Sun
    },
    {
      num: "02",
      title: "Water Purification",
      desc: "Raw water is treated through reverse osmosis and deionization to achieve the ultra-high purity required to prevent electrolyzer degradation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9QeLqcQPWaXVP5S8WojIba_29CQUg9H_0w&s",
      icon: Droplets
    },
    {
      num: "03",
      title: "Electrolysis",
      desc: "Inside advanced PEM or Alkaline electrolyzers, electric currents split the purified water molecules directly into raw hydrogen and oxygen gases.",
      img: "https://www.azolifesciences.com/images/Article_Images/ImageForArticle_883_16565783666555429.jpg",
      icon: Zap
    },
    {
      num: "04",
      title: "Purification & Compression",
      desc: "The raw hydrogen is dried, deoxidized to reach 99.999% purity, and then compressed to high pressures (up to 700 bar) for efficient storage.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vBn9SLi8gkgS6elhTyvlaqBnytK5BejH9w&s",
      icon: Filter
    },
    {
      num: "05",
      title: "Storage & Utilization",
      desc: "The pressurized green hydrogen is stored in specialized tanks, injected into gas grids, or utilized directly in fuel cells and industrial processing.",
      img: "https://media.istockphoto.com/id/1821994102/photo/carbon-capture-utilization-and-storage-concept-words-ccus-on-a-wood-block-and-green-earth.jpg?s=612x612&w=0&k=20&c=lUJgpMrekdZaF63SLr14nIBlnYtVsOqBdNuIVH8FgR0=",
      icon: Factory
    }
  ];

  // Framer Motion Variants for smooth, bouncy staggered entry
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
          <span className="italic text-[var(--color-secondary)]">Green Hydrogen Production</span>
        </h3>

        <p className="text-[var(--color-text-muted)] text-sm md:text-base font-light leading-relaxed">
          A fully integrated zero-emission lifecycle designed to convert renewable energy and water into high-purity green hydrogen for industrial and mobility solutions.
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
                {/* Animated Overlay */}
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

              {/* Read More Interaction */}
              <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                Explore Phase
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