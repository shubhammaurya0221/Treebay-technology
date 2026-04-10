import React from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import CTASection from '../Components/Common/CTASection';
import Hero from '../Components/BioCBG/Hero';
import Stats from '../Components/BioCBG/Stats';
import Pillars from '../Components/BioCBG/Pillars';
import Process from '../Components/BioCBG/Process';
import Advantages from '../Components/BioCBG/Advantages';
import Applications from '../Components/BioCBG/Applications';
import FAQ from '../Components/BioCBG/FAQ';

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