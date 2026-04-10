import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pillars() {
  const pillars = [
  {
    title: "Feedstock Gasification",
    category: "BIOMASS · MSW · BIOGAS",
    badgeTitle: "High Yield",
    badgeSub: "Syngas Generation",
    desc: "Advanced gasification and reforming technologies to efficiently convert agricultural waste, MSW, and biogas into high-quality synthesis gas (syngas).",
    img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-2",
    height: "h-[400px] lg:h-[500px]",
  },
  {
    title: "Catalytic Synthesis",
    category: "SYNGAS CONVERSION · HIGH-PRESSURE",
    badgeTitle: "Optimized",
    badgeSub: "Reaction Kinetics",
    desc: "High-performance catalytic reactor systems designed for the continuous, high-efficiency conversion of conditioned syngas into crude bio-methanol.",
    // ✅ FIXED (reliable reactor/plant image)
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-1",
    height: "h-[400px] lg:h-[500px]",
  },
  {
    title: "Refining & Distillation",
    category: "DEWATERING · GRADE-AA · PURIFICATION",
    badgeTitle: "99.85%",
    badgeSub: "IMPCA Grade",
    desc: "Multi-column distillation technologies refining crude bio-methanol to meet stringent international chemical and marine-grade fuel specifications.",
    img: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-1",
    height: "h-[360px]",
  },
  {
    title: "Carbon & Water Management",
    category: "CCUS · ZLD · EFFLUENT TREATMENT",
    badgeTitle: "Closed Loop",
    badgeSub: "Zero Waste",
    desc: "Integrated Zero Liquid Discharge (ZLD) and carbon capture (CCUS) systems, strictly minimizing the environmental footprint of the methanol plant.",
    img: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-1",
    height: "h-[360px]",
  },
  {
    title: "Thermal Optimization",
    category: "HEAT RECOVERY · POWER CO-GEN",
    badgeTitle: "Maximum",
    badgeSub: "Energy Efficiency",
    desc: "Smart heat integration systems that capture exothermic reaction energy to power the distillation process, dramatically lowering OPEX.",
    // ✅ FIXED (working turbine/energy image)
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    span: "lg:col-span-1",
    height: "h-[360px]",
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
            <span className="italic text-[var(--color-muted)]">Bio-Methanol</span> EPC
          </h2>
        </div>

        <div className="flex items-end">
          <p className="text-[var(--color-muted)] max-w-lg">
            Delivering complete infrastructure for sustainable methanol production — from feedstock gasification to synthesis and purification.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-sm bg-[var(--color-bg-alt)] border border-[var(--color-border)] ${pillar.span} ${pillar.height}`}
          >

            {/* Image Zoom */}
            <motion.img
              src={pillar.img}
              alt={pillar.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[30%]"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8 }}
            />

            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/70 to-transparent group-hover:via-[var(--color-bg-deep)]/50 transition-all duration-500"></div>

            {/* Badge Glow */}
            <div className="absolute top-6 right-6 backdrop-blur-md bg-[var(--color-text)]/5 border border-[var(--color-border)] px-5 py-3 rounded-sm group-hover:shadow-[0_0_20px_var(--color-secondary)] transition">
              <span className="block font-serif text-2xl text-[var(--color-text)]">
                {pillar.badgeTitle}
              </span>
              <span className="block text-[9px] text-[var(--color-muted)] mt-1">
                {pillar.badgeSub}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              
              <span className="text-[9px] text-[var(--color-secondary)] mb-3 block">
                {pillar.category}
              </span>

              <h3 className="font-serif text-2xl text-[var(--color-text)] mb-3">
                {pillar.title}
              </h3>

              {/* Reveal Description */}
              <p className="text-sm text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition duration-500 mb-4">
                {pillar.desc}
              </p>

              {/* Button Interaction */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-[10px] uppercase text-[var(--color-text)] border-b border-[var(--color-border-muted)] hover:border-[var(--color-secondary)]"
              >
                Learn More
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};