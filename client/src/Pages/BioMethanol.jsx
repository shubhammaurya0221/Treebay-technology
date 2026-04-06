import React from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import CTASection from '../Components/Common/CTASection';
import Hero from '../Components/BioMethanol/Hero';
import Stats from '../Components/BioMethanol/Stats';
import Pillars from '../Components/BioMethanol/Pillars';
import Process from '../Components/BioMethanol/Process';
import FAQ from '../Components/BioMethanol/FAQ';
import Applications from '../Components/BioMethanol/Applications';
import Advantages from '../Components/BioMethanol/Advantages';

export default function BioMethanol() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans min-h-screen selection:bg-[var(--color-primary)]">

      <Header />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <div className="bg-[var(--color-bg-alt)]">
        <Stats />
      </div>

      {/* CORE CAPABILITIES */}
      <Pillars />

      {/* PROCESS */}
      <div className="bg-[var(--color-bg-alt)]">
        <Process />
      </div>

      {/* ADVANTAGES (moved after process) */}
      <Advantages />

      {/* APPLICATIONS */}
        <Applications />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection />

      {/* FOOTER */}
      <Footer className="bg-[var(--color-bg-alt)]" />

    </div>
  );
}