import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const CTA: React.FC<{ variant?: 'full' | 'mini' }> = ({ variant = 'full' }) => {
  const whatsappUrl = "https://wa.me/916207793914?text=Hello!%20I'm%20interested%20in%20your%20digital%20marketing%20services.";

  if (variant === 'mini') {
    return (
      <section className="py-16 px-4 bg-brand-bg">
        <div className="container mx-auto">
          <div className="bg-brand-surface p-8 rounded-2xl border border-gray-200 flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-sm">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text-primary mb-2">Ready to grow your business?</h2>
              <p className="text-brand-text-muted text-lg">See how our tailored digital marketing services can help you reach your goals.</p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 whitespace-nowrap animate-pulse-slow hover:-translate-y-1 hover:shadow-xl">
                Request a Free Proposal <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Full variant (default)
  return (
    <section className="py-20 px-4 bg-brand-surface">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-br from-brand-primary to-brand-secondary p-10 md:p-16 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-white/5 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-white/5 rounded-full opacity-50"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Ready to Ignite Your Growth?
                </h2>
                <p className="text-sky-100 text-lg mt-4">
                  Don't let your competitors get ahead. Let's build a powerful digital strategy that drives real results and turns your vision into reality.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-4 px-10 rounded-lg text-lg hover:bg-sky-100 transition-all duration-300 overflow-hidden transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  Get in Touch <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
