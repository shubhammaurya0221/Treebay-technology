import React, { useState } from 'react';
import { ChevronDown} from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
  {
    q: "What types of bio-iso-butanol plants do you design?",
    a: "We specialize in turnkey EPC solutions for bio-iso-butanol facilities, including fermentation-based plants using sugar, grain, and lignocellulosic biomass feedstocks, along with integrated purification and downstream processing systems."
  },
  {
    q: "Do you handle both bioprocess engineering and plant construction?",
    a: "Yes, our EPC framework covers complete bioprocess engineering — from fermentation design and reaction kinetics to detailed engineering, procurement, civil construction, and final commissioning."
  },
  {
    q: "What is the typical project timeline for a bio-iso-butanol plant?",
    a: "Timelines vary based on capacity and feedstock complexity, but most projects are delivered within 14 to 18 months from project kickoff to commissioning."
  },
  {
    q: "Do you provide performance and yield guarantees?",
    a: "Absolutely. We offer performance guarantees on conversion efficiency, product purity, energy consumption, and environmental compliance, including Zero Liquid Discharge (ZLD) systems."
  },
  {
    q: "Do you support environmental approvals and compliance?",
    a: "Yes, our team provides complete technical documentation including process designs, mass balance, emission data, and effluent treatment plans to support environmental clearance and regulatory approvals."
  }
];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto border-b border-[var(--color-border)]">
      <div className="text-center mb-12">
        <h2 className="text-[var(--color-secondary)] text-xs font-semibold tracking-widest uppercase mb-4">Frequently Asked Questions</h2>
        <h3 className="text-4xl font-serif text-[var(--color-text)]">Frequently Asked Questions</h3>
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
              <p className="text-[var(--color-muted)] text-sm leading-relaxed pb-4 pr-8">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};