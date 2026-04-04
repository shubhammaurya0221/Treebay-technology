import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Pillars = () => {
  const pillars = [
    {
      title: "Ethanol Distilleries",
      category: "GRAIN · SUGARCANE · MULTI-FEED",
      badgeTitle: "500 KLPD",
      badgeSub: "Max Capacity Delivered",
      desc: "Complete EPC for grain-based and sugarcane-based ethanol plants from 30 KLPD to 500 KLPD.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
      span: "lg:col-span-2",
      height: "h-[400px] lg:h-[500px]",
    },
    {
      title: "Bio-CNG Plants",
      category: "BIOGAS · UPGRADATION · COMPRESSION",
      badgeTitle: "5000 Nm³",
      badgeSub: "Daily Capacity",
      desc: "End-to-end Bio-CNG facility design — from feedstock handling to bottling infrastructure.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/068/744/462/small/worker-operating-machinery-in-a-bright-industrial-warehouse-at-sunset-showcasing-production-photo.jpg",
      span: "lg:col-span-1",
      height: "h-[400px] lg:h-[500px]",
    },
    {
      title: "Green Chemical Plants",
      category: "BIO-ETHYLENE · BIO-MEG · ACETIC ACID",
      badgeTitle: "98%",
      badgeSub: "Process Purity Achieved",
      desc: "Next-generation green chemical facilities using bio-based feedstocks.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/050/681/798/small/welding-and-fabrication-in-a-bustling-industrial-factory-during-daytime-with-engineers-working-on-metal-structures-photo.jpg",
      span: "lg:col-span-1",
      height: "h-[360px]",
    },
    {
      title: "Zero Liquid Discharge",
      category: "WATER TREATMENT · EFFLUENT · RECYCLING",
      badgeTitle: "100%",
      badgeSub: "Water Recovery",
      desc: "Advanced ZLD systems ensuring complete effluent recycling.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltmg6AH09yDgF85hW-stZb6HIvhJy_VOBz_cZoQbz8-j9WOtnDDQcD3A&s",
      span: "lg:col-span-1",
      height: "h-[360px]",
    },
    {
      title: "Biomass Cogeneration",
      category: "POWER · STEAM · SUSTAINABILITY",
      badgeTitle: "15 MW",
      badgeSub: "Power Output",
      desc: "High-pressure boiler and turbine installations for power generation.",
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
      span: "lg:col-span-1",
      height: "h-[360px]",
    },
  ];

  return (
    <section className="py-24 px-8 max-w-[90rem] mx-auto w-full bg-[#060e09]">
      
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
            <div className="w-8 h-[1px] bg-[#c29a4b]"></div>
            <span className="text-[#c29a4b] text-[10px] font-bold tracking-[0.2em] uppercase">
              Our Specialisations
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1]">
            Three Pillars of <br />
            <span className="italic text-gray-400">Clean Energy</span> EPC
          </h2>
        </div>

        <div className="flex items-end">
          <p className="text-gray-400 max-w-lg">
            From sugarcane fields to bio-refineries, we engineer infrastructure that transforms feedstocks into clean fuels.
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
            className={`group relative overflow-hidden rounded-sm bg-[#0c1a10] border border-white/5 ${pillar.span} ${pillar.height}`}
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#050905] via-[#050905]/70 to-transparent group-hover:via-[#050905]/50 transition-all duration-500"></div>

            {/* Badge Glow */}
            <div className="absolute top-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 px-5 py-3 rounded-sm group-hover:shadow-[0_0_20px_rgba(194,154,75,0.4)] transition">
              <span className="block font-serif text-2xl text-white">
                {pillar.badgeTitle}
              </span>
              <span className="block text-[9px] text-gray-400 mt-1">
                {pillar.badgeSub}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              
              <span className="text-[9px] text-[#c29a4b] mb-3 block">
                {pillar.category}
              </span>

              <h3 className="font-serif text-2xl text-white mb-3">
                {pillar.title}
              </h3>

              {/* Reveal Description */}
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-500 mb-4">
                {pillar.desc}
              </p>

              {/* Button Interaction */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-[10px] uppercase text-white border-b border-white/30 hover:border-[#c29a4b]"
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