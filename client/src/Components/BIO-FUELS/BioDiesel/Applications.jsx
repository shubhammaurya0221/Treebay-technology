import React from "react";
import { 
  Truck, 
  Ship, 
  Tractor, 
  Zap, 
  Factory, 
  Train, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Applications() {
  const applications = [
    {
      title: "Commercial Road Transport",
      desc: "A direct drop-in replacement for petroleum diesel in commercial trucking, logistics fleets, and public transit.",
      icon: Truck,
      features: ["Replaces fossil diesel (B20 to B100)", "High natural lubricity", "Zero engine modifications"],
    },
    {
      title: "Marine & Shipping",
      desc: "An ideal low-sulfur marine fuel that significantly reduces greenhouse gas and particulate emissions in global shipping.",
      icon: Ship,
      features: ["Meets IMO 2020 standards", "Highly biodegradable in water", "Safe high flash point"],
    },
    {
      title: "Agriculture & Mining",
      desc: "Powers heavy-duty agricultural tractors and mining equipment while reducing localized toxic emissions for workers.",
      icon: Tractor,
      features: ["High torque performance", "Safer handling & storage", "Supports rural economies"],
    },
    {
      title: "Power Generation",
      desc: "Used in stationary diesel generators to provide reliable, dispatchable renewable backup or base-load electricity.",
      icon: Zap,
      features: ["Grid-independent power", "Cleaner backup energy", "Excellent long-term storage"],
    },
    {
      title: "Industrial Boilers & Heating",
      desc: "Replaces standard heating oil in industrial boilers and commercial furnaces for a cleaner, high-efficiency burn.",
      icon: Factory,
      features: ["High-temperature capacity", "Lower sulfur oxides (SOx)", "Reduces facility carbon footprint"],
    },
    {
      title: "Rail Networks",
      desc: "Integrates seamlessly into diesel-electric locomotives to decarbonize heavy rail transport without infrastructure overhauls.",
      icon: Train,
      features: ["Heavy freight compatible", "Drop-in rail solution", "Extends engine life"],
    },
  ];

  return (
    <section className="py-24 px-8 max-w-[90rem] mx-auto w-full bg-[var(--color-bg)]">

      {/* Header */}
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
              Industrial Applications
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--color-text)] leading-[1.1]">
            Where <br />
            <span className="italic text-[var(--color-muted)]">
              Bio-Diesel
            </span>{" "}
            Creates Value
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-[var(--color-text-muted)] max-w-lg mb-6 leading-relaxed">
            Bio-diesel enables a wide range of industrial and transport
            applications — delivering superior performance, high lubricity,
            and seamless compatibility across global diesel networks.
          </p>
          <div className="flex gap-6 text-[11px] font-bold tracking-[0.15em] text-[var(--color-text)] uppercase">
            <span>Drop-In Ready</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span>Carbon Neutral</span>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-sm overflow-hidden hover:shadow-[0_10px_40px_var(--color-primary)/10] transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 bg-[var(--color-bg-deep)] w-16 h-16 flex items-center justify-center rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-secondary)] transition-colors duration-300">
                <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors" />
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-xl text-[var(--color-text)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-[13px] text-[var(--color-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-[2px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[var(--color-secondary)] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 p-8 md:p-12 bg-[var(--color-bg-deep)] border border-[var(--color-border)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Subtle background glow for the banner */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[var(--color-primary)]/5 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center md:text-left max-w-2xl">
          <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text)] mb-3">
            Ready to integrate Bio-Diesel into your portfolio?
          </h3>
          <p className="text-[var(--color-text-muted)]">
            Partner with us for end-to-end EPC solutions. From feedstock preparation and transesterification to full-scale plant commissioning, we build the infrastructure of tomorrow.
          </p>
        </div>

        <button className="relative z-10 shrink-0 group bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/90 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-4 shadow-lg shadow-[var(--color-primary)]/10 hover:shadow-[var(--color-primary)]/20">
          Discuss Your Project 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </section>
  );
}