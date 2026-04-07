import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

 const faqs = [
    {
      q: "What types of plastics pyrolysis plants do you design?",
      a: "We specialize in turnkey EPC solutions for advanced chemical recycling facilities, including batch, semi-continuous, and fully continuous pyrolysis systems. Our plants are designed to process various plastic streams, including HDPE, LDPE, PP, and mixed polyolefins."
    },
    {
      q: "Do you handle both chemical engineering and plant construction?",
      a: "Yes, our EPC framework covers the entire lifecycle — from feedstock pre-treatment and reactor thermal engineering to oil condensation, fractionation, syngas scrubbing, and full-scale plant commissioning."
    },
    {
      q: "What is the typical project timeline for a plastics pyrolysis plant?",
      a: "Timelines depend on the daily processing capacity (TPD) and the level of downstream refining required. Typically, pyrolysis projects are delivered within 10 to 16 months from initial design to performance testing."
    },
    {
      q: "Do you provide performance and oil-yield guarantees?",
      a: "Absolutely. We offer strict performance guarantees on oil conversion rates, fuel/crude quality standards, energy recovery efficiency (syngas recycling), and overall plant uptime to ensure a reliable ROI."
    },
    {
      q: "How do you ensure safety and environmental compliance?",
      a: "Our designs incorporate advanced emission control systems, non-condensable gas scrubbing, and safe char-handling protocols. We provide all necessary technical documentation to meet environmental standards for air quality and solid waste management."
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