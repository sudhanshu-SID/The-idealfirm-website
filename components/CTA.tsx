import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const CTA: React.FC = () => {
  const whatsappUrl = "https://wa.me/916207793914?text=Hello!%20I'm%20interested%20in%20your%20digital%20marketing%20services.";

  return (
    <section className="py-20 px-4 bg-brand-surface">
      <div className="container mx-auto">
        <div className="bg-brand-primary p-10 md:p-16 rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Ready to Grow Your Business?</h2>
            <p className="text-sky-100 text-lg">Let's discuss how we can help you achieve your digital marketing goals.</p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-white text-brand-primary font-semibold py-3 px-8 rounded-lg hover:bg-sky-100 transition-all duration-300 whitespace-nowrap">
              Get in Touch <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;