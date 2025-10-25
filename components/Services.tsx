import React, { useState, useCallback, useEffect } from 'react';
import { GoogleAdsIcon, FacebookAdsIcon, WebDesignIcon, SEOIcon, SocialMediaIcon, ContentMarketingIcon } from './icons';

const servicesData = [
  {
    icon: <GoogleAdsIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'Google Ads Service',
    description: 'Target high-intent customers actively searching for your products or services on Google. We create, manage, and optimize campaigns that deliver measurable ROI.',
    details: [
        'Strategic Keyword Targeting',
        'Compelling Ad Copywriting',
        'Landing Page Optimization',
        'Performance Analytics & Reporting',
    ],
    gradient: 'bg-gradient-to-br from-sky-500 to-cyan-400',
  },
  {
    icon: <FacebookAdsIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'Facebook Ads Service',
    description: "Leverage the world's largest social network to find and engage your ideal audience. From brand awareness to lead generation, we've got you covered.",
    details: [
        'Precision Audience Targeting',
        'Creative & Engaging Ad Design',
        'A/B Testing & Optimization',
        'Sales Funnel Strategy',
    ],
    gradient: 'bg-gradient-to-br from-blue-600 to-indigo-500',
  },
  {
    icon: <WebDesignIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'Web Designing Service',
    description: 'Your website is your digital storefront. We build beautiful, high-performing websites that are fast, secure, and optimized for conversions.',
    details: [
        'Custom UI/UX Design',
        'Mobile-First & Responsive',
        'Performance & SEO Optimized',
        'E-commerce & CMS Integration',
    ],
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
  },
  {
    icon: <SEOIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'SEO Service',
    description: 'Climb the search rankings and drive sustainable organic traffic. Our SEO strategies are built for long-term growth and visibility.',
    details: [
        'Comprehensive Site Audits',
        'On-Page & Off-Page SEO',
        'Local SEO Mastery',
        'Content-Driven Strategy',
    ],
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-500',
  },
  {
    icon: <SocialMediaIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'Social Media Marketing',
    description: 'Build a vibrant community around your brand. We create and manage social media strategies that foster engagement, loyalty, and growth.',
    details: [
        'Cross-Platform Content Strategy',
        'Community Management',
        'Follower Growth & Engagement',
        'Social Media Analytics',
    ],
    gradient: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
  },
  {
    icon: <ContentMarketingIcon className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />,
    title: 'Content Marketing Service',
    description: "Attract, engage, and convert your audience with high-quality content. We tell your brand's story in a way that builds trust and drives action.",
    details: [
        'Content Strategy & Planning',
        'SEO-Optimized Blog Posts',
        'Multi-format Content Creation',
        'Content Distribution & Promotion',
    ],
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
  },
];

const ServiceSlide: React.FC<typeof servicesData[0]> = ({ icon, title, description, details, gradient }) => (
  <div className={`w-full p-6 md:p-10 rounded-2xl ${gradient} text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]`}>
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="md:order-2 flex justify-center items-center">
        {icon}
      </div>
      <div className="md:order-1">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{title}</h3>
        <p className="text-base text-white/90 mb-4">{description}</p>
        <h4 className="font-bold text-lg mb-2">What you get:</h4>
        <ul className="space-y-1.5 text-white/90">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center">
            <a href="#contact" className="group inline-flex items-center font-semibold bg-white/20 text-white py-2 px-5 rounded-lg hover:bg-white/30 transition-colors duration-300">
            Get a Quote <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
        </div>
      </div>
    </div>
  </div>
);

const AUTOPLAY_INTERVAL = 7000; // 7 seconds

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, nextSlide]);

  return (
    <section id="services" className="py-20 px-4 bg-brand-bg">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
                <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
                Our Services
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Complete Digital Marketing Solutions</h2>
                <p className="text-lg text-brand-text-muted max-w-3xl mx-auto lg:mx-0">
                From strategy to execution, we provide end-to-end digital marketing services tailored to your business goals.
                </p>
            </div>
            <div className="hidden lg:flex justify-center">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Digital Marketing Analytics Illustration" className="rounded-2xl shadow-xl w-full max-w-lg object-cover" />
            </div>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
           <div className="overflow-hidden relative py-8">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {servicesData.map((service, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                           <ServiceSlide {...service} />
                        </div>
                    ))}
                </div>
           </div>
           
            <button onClick={prevSlide} aria-label="Previous service" className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-brand-surface text-brand-text-primary hover:bg-brand-primary hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-300 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} aria-label="Next service" className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-brand-surface text-brand-text-primary hover:bg-brand-primary hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-300 shadow-lg z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
            {servicesData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to service ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                        currentIndex === index ? 'scale-125 bg-brand-primary/30' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                >
                  {currentIndex === index && (
                    <span
                      key={currentIndex}
                      className="absolute top-0 left-0 h-full bg-brand-primary"
                      style={{ animation: `progress-fill ${AUTOPLAY_INTERVAL}ms linear` }}
                    ></span>
                  )}
                </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
