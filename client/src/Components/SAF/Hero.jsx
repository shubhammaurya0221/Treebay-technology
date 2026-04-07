import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-40 pb-24 px-8 min-h-screen flex flex-col justify-center border-b border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-deep)]">

      {/* Background with slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2175448985/photo/shadow-airplane-flying-above-green-field-sustainable-aviation-fuel-sustainable-transportation.webp?a=1&b=1&s=612x612&w=0&k=20&c=_U6CxnTAPtRUBElopApeIMOASfY9_Ppu70QcTCfs9V8=')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 mt-16">

        {/* Left Column */}
        <div>
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[var(--color-secondary)]"></div>
            <h2 className="text-[var(--color-secondary)] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              From Waste to Aviation Fuel
            </h2>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[1.1] text-[var(--color-text)] max-w-4xl"
          >
            Powering Sustainable Flight with <br />
            <span className="italic text-[var(--color-text-muted)]">
              SAF Innovation.
            </span>
          </motion.h1>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-end pb-4">

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[var(--color-text-muted)] text-base md:text-[17px] mb-10 max-w-[28rem] leading-relaxed"
          >
            Transform waste oils and biomass into high-performance aviation fuel with advanced EPC solutions — from feedstock processing to refining and fuel distribution infrastructure.
          </motion.p>

          {/* CTA + badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 xl:gap-10"
          >

            {/* CTA Button with hover scale + glow */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 20px var(--color-primary)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-[var(--color-primary)] text-[var(--color-text)] px-7 py-4 text-[11px] font-bold tracking-[0.15em] uppercase flex items-center gap-6 transition-all duration-300"
            >
              Explore Process <ArrowRight size={14} />
            </motion.button>

            {/* Certifications */}
            <div className="flex gap-6">
              <div className="flex items-start gap-2">
                <Check size={12} className="text-[var(--color-secondary)] mt-0.5" strokeWidth={4} />
                <span className="text-[9px] font-bold tracking-[0.15em] text-[var(--color-muted)] uppercase leading-tight">
                  ISO<br />Certified
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={12} className="text-[var(--color-secondary)] mt-0.5" strokeWidth={4} />
                <span className="text-[9px] font-bold tracking-[0.15em] text-[var(--color-muted)] uppercase leading-tight">
                  25+ Plants<br />Delivered
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] text-[var(--color-muted)] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--color-border)] animate-pulse"></div>
      </motion.div>
    </header>
  );
};