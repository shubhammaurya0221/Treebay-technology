import React from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import CTASection from '../../Components/Common/CTASection';
import Hero from '../../Components/BIO-FUELS/BioMethanol/Hero';
import Stats from '../../Components/BIO-FUELS/BioMethanol/Stats';
import Pillars from '../../Components/BIO-FUELS/BioMethanol/Pillars';
import Process from '../../Components/BIO-FUELS/BioMethanol/Process';
import FAQ from '../../Components/BIO-FUELS/BioMethanol/FAQ';
import Applications from '../../Components/BIO-FUELS/BioMethanol/Applications';
import Advantages from '../../Components/BIO-FUELS/BioMethanol/Advantages';

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