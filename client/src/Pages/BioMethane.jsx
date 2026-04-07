import React from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import CTASection from '../Components/Common/CTASection';
import Hero from '../Components/BioMethane/Hero';
import Stats from '../Components/BioMethane/Stats';
import Pillars from '../Components/BioMethane/Pillars';
import Process from '../Components/BioMethane/Process';
import Advantages from '../Components/BioMethane/Advantages';
import Applications from '../Components/BioMethane/Applications';
import FAQ from '../Components/BioMethane/FAQ';

export default function BioMethane() {
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
      {/* <div className="bg-[var(--color-bg-alt)]"> */}
        <Process />
      {/* </div> */}

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