import React from "react";
import { ArrowRight, Recycle, Factory, Flame, Droplets, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function PyrolysisPillars() {
  // Data updated for Plastics Pyrolysis EPC while preserving original structure
  const pillars = [
    {
      title: "Feedstock Preparation & Sorting",
      category: "HDPE · LDPE · PP · PS MIXED PLASTICS",
      badgeTitle: "Automated",
      badgeSub: "Material Recovery",
      desc: "Advanced sorting and shredding systems designed to handle diverse plastic waste streams, removing contaminants and ensuring optimal particle size for the reactor.",
      img: "https://images.unsplash.com/photo-1588159481334-3502acdcbfb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZlZWRzdG9jayUyMFByZXBhcmF0aW9uJTIwJTI2JTIwU29ydGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      span: "lg:col-span-2",
      height: "h-[400px] lg:h-[500px]",
      icon: Recycle,
    },
    {
      title: "Pyrolysis Reactor Systems",
      category: "THERMAL CRACKING · CONTINUOUS · BATCH",
      badgeTitle: "High Yield",
      badgeSub: "Thermal Conversion",
      desc: "Precision-engineered reactors that utilize oxygen-free thermal decomposition to break down long-chain polymers into high-value hydrocarbons.",
      img: "https://media.istockphoto.com/id/1406504359/photo/close-up-station-industry.webp?a=1&b=1&s=612x612&w=0&k=20&c=AVYoC9itphzgZ9vw1lnevTGGNAdd8wP11BJmLmh87Fw=",
      span: "lg:col-span-1",
      height: "h-[400px] lg:h-[500px]",
      icon: Factory,
    },
    {
      title: "Oil Recovery & Condensation",
      category: "PYRO-OIL · BIO-CRUDE · FRACTIONATION",
      badgeTitle: "Premium",
      badgeSub: "Oil Recovery",
      desc: "Multi-stage condensation systems that efficiently capture pyrolysis oil and separate heavy waxes from light fuel fractions for industrial use.",
      img: "https://images.unsplash.com/photo-1666800714842-58bac5805688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T2lsJTIwUmVjb3ZlcnklMjAlMjYlMjBDb25kZW5zYXRpb258ZW58MHx8MHx8fDA%3D",
      span: "lg:col-span-1",
      height: "h-[360px]",
      icon: Droplets,
    },
    {
      title: "Syngas Treatment & Recycle",
      category: "GAS CLEANING · ENERGY RECOVERY · SCRUBBING",
      badgeTitle: "Efficient",
      badgeSub: "Gas Management",
      desc: "Advanced gas scrubbing and cleaning infrastructure to handle non-condensable gases, recycling syngas to provide self-sustaining process heat.",
      img: "https://media.istockphoto.com/id/2265588680/photo/industrial-exhaust-air-treatment-system-or-wet-scrubber-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=oOupgoIZiRteyVDU-e8goBLYUG-kXk04z1xm8GwKDHY=",
      span: "lg:col-span-1",
      height: "h-[360px]",
      icon: Flame,
    },
    {
      title: "Refining & Upgrading",
      category: "DISTILLATION · HYDROTREATING · CHEMICAL FEEDSTOCK",
      badgeTitle: "Circular",
      badgeSub: "End-to-End",
      desc: "Post-processing infrastructure to upgrade pyrolysis oil into refinery-ready chemical feedstocks, completing the circular plastic economy.",
      img: "https://plus.unsplash.com/premium_photo-1750340764247-0c4bb3784ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVmaW5pbmclMjAlMjYlMjBVcGdyYWRpbmd8ZW58MHx8MHx8fDA%3D",
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
            <span className="italic text-[var(--color-secondary)]">Plastics Pyrolysis</span> EPC
          </h2>
        </div>

        <div className="flex items-end">
          <p className="text-[var(--color-muted)] max-w-lg text-lg">
            Delivering complete infrastructure for chemical recycling — from plastic waste pre-treatment and reactor engineering to high-purity oil recovery and circular feedstock upgrading.
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

              {/* Animated Gradient Overlay */}
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
}