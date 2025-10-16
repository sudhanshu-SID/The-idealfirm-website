import React from 'react';
import { GoogleAdsIcon, FacebookAdsIcon, WebDesignIcon, SEOIcon, SocialMediaIcon, ContentMarketingIcon } from './icons';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => (
  <div className="bg-brand-surface p-8 rounded-2xl border border-gray-200 hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-lg">
    <div className="mb-6 inline-block p-4 bg-sky-100 rounded-full">{icon}</div>
    <h3 className="text-2xl font-bold text-brand-text-primary mb-3">{title}</h3>
    <p className="text-brand-text-muted mb-6">{description}</p>
    <ul className="space-y-2 text-brand-text-muted">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-brand-primary mr-3 mt-1">&#8226;</span>
          {feature}
        </li>
      ))}
    </ul>
    <a href="#contact" className="group flex items-center mt-6 font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300">
      Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
    </a>
  </div>
);

const servicesData = [
  {
    icon: <GoogleAdsIcon />,
    title: 'Google Ads Service',
    description: 'Drive qualified traffic and maximize ROI with expert Google Ads management.',
    features: ['Strategic campaign planning', 'Keyword research & optimization', 'Performance tracking & reporting'],
  },
  {
    icon: <FacebookAdsIcon />,
    title: 'Facebook Ads Service',
    description: 'Reach your target audience with precision Facebook advertising campaigns.',
    features: ['Audience targeting & segmentation', 'Creative ad design', 'Conversion optimization'],
  },
  {
    icon: <WebDesignIcon />,
    title: 'Web Designing Service',
    description: 'Build stunning, conversion-focused websites that elevate your brand.',
    features: ['Responsive design', 'User experience optimization', 'Fast loading performance'],
  },
  {
    icon: <SEOIcon />,
    title: 'SEO Service',
    description: 'Improve your search rankings and organic visibility with proven SEO strategies.',
    features: ['On-page & technical SEO', 'Link building', 'Local SEO optimization'],
  },
  {
    icon: <SocialMediaIcon />,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience across social platforms.',
    features: ['Content strategy', 'Community management', 'Analytics & insights'],
  },
  {
    icon: <ContentMarketingIcon />,
    title: 'Content Marketing Service',
    description: 'Create compelling content that attracts, engages, and converts your audience.',
    features: ['Content strategy development', 'SEO-optimized writing', 'Multi-format content creation'],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-brand-bg">
      <div className="container mx-auto text-center">
        <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
          Our Services
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Complete Digital Marketing Solutions</h2>
        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-16">
          From strategy to execution, we provide end-to-end digital marketing services tailored to your business goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;