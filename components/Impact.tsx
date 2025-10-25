import React, { useRef } from 'react';
import useCountUp from '../hooks/useCountUp';
import { LeadsIcon, ROIIcon, CampaignsIcon, RetentionIcon } from './icons';

const ImpactCard: React.FC<{
  icon: React.ReactNode;
  end: number;
  label: string;
  description: string;
  suffix?: string;
  prefix?: string;
}> = ({ icon, end, label, description, suffix = '', prefix = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(end, ref);

  return (
    <div ref={ref} className="bg-brand-surface p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-primary/50 transition-all duration-300 transform hover:-translate-y-2 text-left">
        <div className="flex items-start space-x-5">
            <div className="flex-shrink-0 bg-sky-100 p-4 rounded-full">
            {icon}
            </div>
            <div>
            <p className="text-4xl md:text-5xl font-extrabold text-brand-primary leading-tight">
                {prefix}{Math.round(count)}{suffix}
            </p>
            <h3 className="mt-2 text-lg font-bold text-brand-text-primary">{label}</h3>
            </div>
        </div>
        <p className="mt-4 text-brand-text-muted">{description}</p>
    </div>
  );
};

const impactData = [
  {
    icon: <LeadsIcon />,
    end: 5000,
    suffix: "+",
    label: "Qualified Leads Generated",
    description: "Connecting our clients with thousands of potential customers ready to convert."
  },
  {
    icon: <ROIIcon />,
    end: 250,
    suffix: "%",
    label: "Average ROI Uplift",
    description: "Turning marketing spend into a powerful investment with measurable returns."
  },
  {
    icon: <CampaignsIcon />,
    end: 500,
    suffix: "+",
    label: "Successful Campaigns",
    description: "Executing tailored strategies across diverse industries with precision and creativity."
  },
  {
    icon: <RetentionIcon />,
    end: 98,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Building lasting partnerships based on trust, transparency, and tangible results."
  }
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-brand-bg">
      <div className="container mx-auto text-center">
        <div className="inline-block bg-brand-surface border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
          Our Impact
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Results That Build Businesses</h2>
        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-16">
          We don't just run campaigns; we build growth engines. Our strategies are rooted in deep market analysis and a relentless focus on the key metrics that matter to your bottom line.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactData.map((item, index) => (
            <ImpactCard
              key={index}
              icon={item.icon}
              end={item.end}
              label={item.label}
              description={item.description}
              suffix={item.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
