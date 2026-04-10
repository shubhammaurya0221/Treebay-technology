import React from 'react';
import Hero from '../../Components/BIO-FUELS/BioEthanol/Hero';
import Overview from '../../Components/BIO-FUELS/BioEthanol/Overview';
import Expertise from '../../Components/BIO-FUELS/BioEthanol/Expertise';
import Stats from '../../Components/BIO-FUELS/BioEthanol/Stats';
import Process from '../../Components/BIO-FUELS/BioEthanol/Process';
import Solutions from '../../Components/BIO-FUELS/BioEthanol/Solutions';
import Sustainability from '../../Components/BIO-FUELS/BioEthanol/Sustainability';
import Projects from '../../Components/BIO-FUELS/BioEthanol/Projects';
import FAQAndWhyUs from '../../Components/BIO-FUELS/BioEthanol/FAQAndWhyUs';
import CTASection from '../../Components/Common/CTASection';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';

export default function BioEthanol() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans min-h-screen selection:bg-[var(--color-primary)] selection:text-[var(--color-text)]">
      <Header/>
      <Hero />
      <Stats />
      <Overview />
        <Expertise />
      <Process />
      <div className='bg-[var(--color-bg-alt)]'>
        <Projects  />
      </div>
      <Sustainability />
      <div className='bg-[var(--color-bg-alt)]'>
        <Projects  />
      </div>
      <FAQAndWhyUs />
      <CTASection />
      <Footer/>
    </div>
  );
}