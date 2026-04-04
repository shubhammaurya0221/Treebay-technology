import React from 'react';
import Hero from '../Components/BioEthanol/Hero';
import Overview from '../Components/BioEthanol/Overview';
import Expertise from '../Components/BioEthanol/Expertise';
import Stats from '../Components/BioEthanol/Stats';
import Process from '../Components/BioEthanol/Process';
import Solutions from '../Components/BioEthanol/Solutions';
import Sustainability from '../Components/BioEthanol/Sustainability';
import Projects from '../Components/BioEthanol/Projects';
import FAQAndWhyUs from '../Components/BioEthanol/FAQAndWhyUs';
import CTASection from '../Components/Common/CTASection';
import Header from '../Components/Common/Header';
import { Footer } from '../Components/Common/Footer';

export default function BioEthanol() {
  return (
    <div className="bg-[#050905] text-white font-sans min-h-screen selection:bg-[#1c6b36] selection:text-white">
      <Header/>
      <Hero />
      <Stats />
      <Overview />
      <Expertise />
      <Process />
      <Solutions />
      <Sustainability />
      <Projects />
      <FAQAndWhyUs />
      <CTASection />
      <Footer/>
    </div>
  );
}