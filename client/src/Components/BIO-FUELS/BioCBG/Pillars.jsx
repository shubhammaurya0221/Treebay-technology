import React from "react";
import { ArrowRight, Leaf, Factory, Wind, Droplets, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function BioMethanePillars() {
  // Data completely preserved in structure, updated for Bio-Methane EPC
  const pillars = [
    {
      title: "Feedstock Pre-treatment",
      category: "AGRI-WASTE · MSW · MANURE",
      badgeTitle: "Flexible",
      badgeSub: "Feedstock Handling",
      desc: "Robust sorting, maceration, and homogenization systems to prepare diverse organic waste for optimal anaerobic digestion.",
      img: "https://grace.com/content/dam/grace-site/english/blog/detail-hero/blog-hero-corn-test-tube-oil.jpg",
      span: "lg:col-span-2",
      height: "h-[400px] lg:h-[500px]",
      icon: Leaf,
    },
    {
      title: "Anaerobic Digestion",
      category: "MESOPHILIC · THERMOPHILIC · CSTR",
      badgeTitle: "High Yield",
      badgeSub: "Biogas Generation",
      desc: "State-of-the-art biodigesters engineered for stable microbial degradation and maximum methane yield.",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Biogasanlage_mit_Kompostierung.jpg",
      span: "lg:col-span-1",
      height: "h-[400px] lg:h-[500px]",
      icon: Factory,
    },
    {
      title: "Biogas Upgrading",
      category: "MEMBRANE · PSA · AMINE SCRUBBING",
      badgeTitle: ">97%",
      badgeSub: "Methane Purity",
      desc: "Advanced purification technologies to strip CO2 and H2S, upgrading raw biogas to pipeline-quality Bio-Methane (CBG).",
      img: "https://www.bright-renewables.com/app/uploads/4.-Upgrading-project-4-1-1920x1080.jpg",
      span: "lg:col-span-1",
      height: "h-[360px]",
      icon: Wind,
    },
    {
      title: "Digestate Management",
      category: "DEWATERING · NUTRIENT RECOVERY",
      badgeTitle: "Circular",
      badgeSub: "Zero Waste",
      desc: "Efficient processing of digestate residue into high-quality organic fertilizers, completing the circular economy loop.",
      img: "https://www.hrs-heatexchangers.com/wp-content/uploads/2021/10/HRS-Digestate-Pasteurisation-System-DPS-Agri-Gen-1140x600-2.jpg",
      span: "lg:col-span-1",
      height: "h-[360px]",
      icon: Droplets,
    },
    {
      title: "Grid Injection & Utilities",
      category: "COMPRESSION · METERING · CHP",
      badgeTitle: "Grid-Ready",
      badgeSub: "Seamless Integration",
      desc: "Integrated compression stations and utility setups for injecting Bio-Methane into the gas grid or distribution networks.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT386kMk4HZB9fkZW24MVUml2ojHazWXV36OA&s",
      span: "lg:col-span-1",
      height: "h-[360px]",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg)]">
      
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 grid gap-8 lg:grid-cols-2"
      >
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-secondary)]"></div>
            <span className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase">
              Our Specialisations
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--color-text)] leading-[1.1]">
            Core Capabilities in <br />
            <span className="italic text-[var(--color-secondary)]">Bio-Methane</span> EPC
          </h2>
        </div>

        <div className="flex items-end">
          <p className="text-[var(--color-muted)] max-w-lg text-lg">
            Delivering complete infrastructure for renewable natural gas production — from raw organic feedstock handling to final grid-ready biomethane injection.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-500 ${pillar.span} ${pillar.height}`}
            >
              {/* Image Zoom */}
              <motion.img
                src={pillar.img}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
              />

              {/* Animated Gradient Overlay (Improved) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/80 to-transparent group-hover:via-[var(--color-bg-deep)]/60 transition-all duration-500"></div>

              {/* Top Bar: Icon & Badge Glow */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="bg-[var(--color-bg-deep)]/40 backdrop-blur-md p-3 rounded-lg border border-[var(--color-border)]/50 text-[var(--color-secondary)]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                <div className="backdrop-blur-md bg-[var(--color-bg)]/60 border border-[var(--color-border)]/50 px-5 py-2.5 rounded-lg text-right group-hover:shadow-[0_0_20px_var(--color-secondary)] group-hover:border-[var(--color-secondary)]/50 transition-all duration-500">
                  <span className="block font-serif text-2xl text-[var(--color-text)] leading-none">
                    {pillar.badgeTitle}
                  </span>
                  <span className="block text-[10px] text-[var(--color-text-muted)] mt-1.5 uppercase tracking-wider font-medium">
                    {pillar.badgeSub}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 p-8 md:p-10 translate-y-6 group-hover:translate-y-0 transition-all duration-500 w-full">
                
                <span className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-secondary)] mb-3 block">
                  {pillar.category}
                </span>

                <h3 className="font-serif text-3xl text-[var(--color-text)] mb-3 drop-shadow-md">
                  {pillar.title}
                </h3>

                {/* Reveal Description */}
                <p className="text-sm text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6 max-w-[90%] leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Button Interaction */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[var(--color-text)] border-b border-[var(--color-border-muted)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] pb-1 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};