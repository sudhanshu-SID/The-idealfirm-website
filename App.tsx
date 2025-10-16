import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Impact from './components/Impact';
import SuccessStories from './components/SuccessStories';
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
        <Industries />
        <Impact />
        <SuccessStories />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
