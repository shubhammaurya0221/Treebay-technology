import React from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import CTASection from '../../Components/Common/CTASection';
import Hero from '../../Components/BIO-FUELS/BioDiesel/Hero';
import Stats from '../../Components/BIO-FUELS/BioDiesel/Stats';
import Pillars from '../../Components/BIO-FUELS/BioDiesel/Pillars';
import Process from '../../Components/BIO-FUELS/BioDiesel/Process';
import Advantages from '../../Components/BIO-FUELS/BioDiesel/Advantages';
import Applications from '../../Components/BIO-FUELS/BioDiesel/Applications';
import FAQ from '../../Components/BIO-FUELS/BioDiesel/FAQ';

export default function BioDiesel() {
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
        <Process/>
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