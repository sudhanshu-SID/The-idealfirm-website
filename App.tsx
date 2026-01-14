import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Impact from './components/Impact';
//import SuccessStories from './components/SuccessStories';
import ClientLogos from './components/ClientLogos';
// import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ.tsx';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div id="main-content" className="bg-brand-bg h-screen overflow-y-auto scroll-smooth scroll-pt-20">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA variant="mini" />
        <Industries />
        <Impact />
        {/* <SuccessStories /> */}
        <ClientLogos />
        <FAQ />
        {/* <Testimonials /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
