import React from 'react';
import { EducationIcon, RealEstateIcon, ShowroomIcon, AutomobileIcon, ManufacturerIcon, HospitalityIcon } from './icons';

const IndustryCard: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center text-center p-6 bg-brand-surface rounded-2xl border border-gray-200 hover:border-brand-primary transition-colors duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
    <div className="mb-4 text-brand-primary">{icon}</div>
    <h3 className="font-semibold text-brand-text-primary">{name}</h3>
  </div>
);

const industriesData = [
    { icon: <EducationIcon />, name: 'Educational Institutions' },
    { icon: <RealEstateIcon />, name: 'Real Estate' },
    { icon: <ShowroomIcon />, name: 'Exclusive Showrooms' },
    { icon: <AutomobileIcon />, name: 'Automobiles' },
    { icon: <ManufacturerIcon />, name: 'Manufacturers' },
    { icon: <HospitalityIcon />, name: 'Hospitality' },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 px-4 bg-brand-surface">
      <div className="container mx-auto text-center">
        <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
          Industries We Serve
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Trusted Across Multiple Sectors</h2>
        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-16">
          We've delivered successful campaigns for diverse industries across Guwahati and beyond.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industriesData.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
