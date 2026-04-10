import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  
  const faqs = [
    {
      q: "What types of bio-diesel plants do you design?",
      a: "We specialize in turnkey EPC solutions for bio-diesel facilities, processing diverse feedstocks including used cooking oil (UCO), animal tallow, and crude vegetable oils using advanced transesterification technologies."
    },
    {
      q: "Do you handle both chemical process engineering and plant construction?",
      a: "Yes, our EPC framework covers the entire project lifecycle — from feedstock pretreatment and reactor design to phase separation, fuel washing, civil construction, and final distribution integration."
    },
    {
      q: "What is the typical project timeline for a bio-diesel plant?",
      a: "Timelines vary based on plant capacity, feedstock complexity, and site conditions, but most bio-diesel projects are delivered within 10 to 14 months from project kickoff to final commissioning."
    },
    {
      q: "Do you provide performance and yield guarantees?",
      a: "Absolutely. We offer strict performance guarantees on conversion yield, bio-diesel purity (meeting EN 14214 or ASTM D6751 standards), catalyst consumption, and overall plant uptime, ensuring maximum ROI."
    },
    {
      q: "How do you handle byproducts and environmental compliance?",
      a: "Our designs include comprehensive glycerin recovery and purification systems to monetize byproducts. We also provide complete technical documentation, mass balances, and effluent treatment plans to support environmental clearances and regulatory approvals."
    }
  ];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto border-b border-[var(--color-border)]">
      <div className="text-center mb-12">
        <h2 className="text-[var(--color-secondary)] text-xs font-semibold tracking-widest uppercase mb-4">
          Support & Queries
        </h2>
        <h3 className="text-4xl font-serif text-[var(--color-text)]">
          Frequently Asked Questions
        </h3>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-[var(--color-border)] pb-4">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left py-4 flex justify-between items-center group"
            >
              <span className={`font-medium text-lg transition-colors ${openIdx === idx ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] group-hover:text-[var(--color-text-muted)]'}`}>
                {faq.q}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-[var(--color-muted)] transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed pb-4 pr-8 font-light">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}