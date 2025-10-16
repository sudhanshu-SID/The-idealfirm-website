import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const Hero: React.FC = () => {
  const proposalUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20get%20a%20proposal%20for%20my%20business.";
  const auditUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20book%20a%20free%20audit.";

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-brand-surface">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block bg-sky-100 text-brand-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            DIGITAL MARKETING AGENCY
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text-primary leading-tight">
            Digital Marketing Agency in <span className="text-brand-primary">Guwahati</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto lg:mx-0">
            For all your digital marketing solutions. We help businesses grow through data-driven strategies and creative excellence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href={proposalUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 w-full sm:w-auto">
              Get Proposal <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={auditUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-300 text-brand-text-muted font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto">
              Book a Free Audit
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" alt="A team of digital marketing professionals collaborating on a project" className="rounded-2xl shadow-xl object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;