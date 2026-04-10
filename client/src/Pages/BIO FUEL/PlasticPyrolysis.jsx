import React from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import CTASection from '../../Components/Common/CTASection';
import Hero from '../../Components/BIO-FUELS/PlasticPyrolysis/Hero';
import Stats from '../../Components/BIO-FUELS/PlasticPyrolysis/Stats';
import Pillars from '../../Components/BIO-FUELS/PlasticPyrolysis/Pillars';
import Process from '../../Components/BIO-FUELS/PlasticPyrolysis/Process';
import Advantages from '../../Components/BIO-FUELS/PlasticPyrolysis/Advantages';
import Applications from '../../Components/BIO-FUELS/PlasticPyrolysis/Applications';
import FAQ from '../../Components/BIO-FUELS/PlasticPyrolysis/FAQ';

export default function PlasticPyrolysis() {
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