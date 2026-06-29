import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Impact from '../components/Impact';
import ClientLogos from '../components/ClientLogos';
import FAQ from '../components/FAQ.tsx';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CTA variant="mini" />
      <Industries />
      <Impact />
      <ClientLogos />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  );
};

export default Home;
