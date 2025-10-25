import React, { useRef, useState } from 'react';
import { GoogleAdsIcon, SEOIcon, WebDesignIcon, SocialMediaIcon, FacebookAdsIcon, ContentMarketingIcon } from './icons';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const OrbitingServices: React.FC = () => {
    const services = [
        { icon: <GoogleAdsIcon className="w-8 h-8 text-brand-primary" />, name: 'Google Ads' },
        { icon: <SEOIcon className="w-8 h-8 text-brand-primary" />, name: 'SEO' },
        { icon: <WebDesignIcon className="w-8 h-8 text-brand-primary" />, name: 'Web Design' },
        { icon: <SocialMediaIcon className="w-8 h-8 text-brand-primary" />, name: 'Social Media' },
        { icon: <FacebookAdsIcon className="w-8 h-8 text-brand-primary" />, name: 'Facebook Ads' },
        { icon: <ContentMarketingIcon className="w-8 h-8 text-brand-primary" />, name: 'Content' },
    ];
    
    const iconWrapperClasses = "w-full h-full bg-brand-surface rounded-full shadow-lg border border-gray-200/80 flex items-center justify-center animate-spin-reverse-slow group-hover:[animation-play-state:paused] transition-transform duration-300 hover:!scale-125 cursor-pointer";

    return (
        <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] group">
            {/* Central element */}
            <div className="absolute w-28 h-28 md:w-40 md:h-40 bg-sky-500/5 rounded-full flex items-center justify-center shadow-inner border border-sky-500/10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-sky-500/10 rounded-full shadow-lg"></div>
            </div>

            {/* Orbit container */}
            <div className="w-full h-full relative animate-spin-slow group-hover:[animation-play-state:paused]">
                {/* Mobile Icons */}
                <div className="md:hidden">
                    {services.map((service, index) => {
                        const angle = (index / services.length) * 360;
                        return (
                            <div key={`${service.name}-mobile`} className="absolute top-1/2 left-1/2 w-16 h-16 -m-8" style={{ transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)` }}>
                                <div className={iconWrapperClasses + " p-3"}> {service.icon} </div>
                            </div>
                        );
                    })}
                </div>
                {/* Desktop Icons */}
                <div className="hidden md:block">
                    {services.map((service, index) => {
                        const angle = (index / services.length) * 360;
                        return (
                            <div key={`${service.name}-desktop`} className="absolute top-1/2 left-1/2 w-20 h-20 -m-10" style={{ transform: `rotate(${angle}deg) translateX(190px) rotate(-${angle}deg)` }}>
                                <div className={iconWrapperClasses + " p-4"}> {service.icon} </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


const Hero: React.FC = () => {
  const proposalUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20get%20a%20proposal%20for%20my%20business.";
  const auditUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20book%20a%20free%20audit.";
  
  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({});
  const textBlockRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textBlockRef.current) return;
    const { left, top, width, height } = textBlockRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    
    const rotateX = (-y / (height / 2)) * 10; 
    const rotateY = (x / (width / 2)) * 10;
    
    setHeadingStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setHeadingStyle({
        transform: 'rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transition: 'transform 0.6s ease-in-out',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-gradient-to-br from-sky-50 via-brand-surface to-sky-100">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          className="text-center lg:text-left"
          ref={textBlockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <div className="inline-block bg-sky-100 text-brand-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Amplify Your Brand's Digital Presence
          </div>
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-brand-text-primary leading-tight" 
            style={{ ...headingStyle, transformStyle: 'preserve-3d' }}
          >
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Digital</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Marketing</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Agency</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>in</span>{' '}
            <span className="text-brand-primary inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Guwahati</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            For all your digital marketing solutions. We help businesses grow through data-driven strategies and creative excellence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <a href={proposalUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 w-full sm:w-auto animate-pulse-slow hover:-translate-y-1 hover:shadow-xl">
              Get Proposal <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={auditUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-300 text-brand-text-muted font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-lg">
              Book a Free Audit
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <OrbitingServices />
        </div>
      </div>
    </section>
  );
};

export default Hero;
