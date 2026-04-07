import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What types of green hydrogen plants do you design?",
      a: "We specialize in turnkey EPC solutions for green hydrogen facilities powered by renewable energy sources such as solar and wind. Our solutions include alkaline, PEM, and advanced electrolysis-based hydrogen production systems."
    },
    {
      q: "Do you handle both engineering and plant construction?",
      a: "Yes, our EPC framework covers the complete lifecycle — from renewable energy integration and electrolyzer system design to hydrogen purification, compression, storage, and full-scale plant construction and commissioning."
    },
    {
      q: "What is the typical project timeline for a green hydrogen plant?",
      a: "Project timelines depend on plant capacity, renewable energy integration, and site conditions. Typically, green hydrogen projects are delivered within 12 to 24 months from initial design to commissioning."
    },
    {
      q: "Do you provide performance and efficiency guarantees?",
      a: "Absolutely. We offer performance guarantees on electrolyzer efficiency, hydrogen purity (up to 99.9%), energy consumption, and overall system reliability to ensure optimal output and long-term operational stability."
    },
    {
      q: "How do you ensure safety and environmental compliance?",
      a: "Our designs follow global hydrogen safety standards, including advanced storage, handling, and monitoring systems. We also provide complete technical documentation and support for environmental approvals and regulatory compliance."
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