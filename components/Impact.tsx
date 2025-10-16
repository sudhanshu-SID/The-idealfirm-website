import React, { useState, useEffect, useRef } from 'react';
import useCountUp from '../hooks/useCountUp';

const StatCounter: React.FC<{
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}> = ({ end, label, suffix = '', prefix = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(end, ref);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-7xl font-extrabold text-brand-primary">
        {prefix}{Math.round(count)}{suffix}
      </p>
      <span className="mt-2 text-sm uppercase tracking-widest text-brand-text-muted">{label}</span>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-brand-bg">
      <div className="container mx-auto text-center">
        <div className="inline-block bg-brand-surface border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
          Our Impact
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-16">Results That Speak for Themselves</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={5000} suffix="+" label="Leads Generated" />
          <StatCounter end={250} suffix="%" label="Average ROI Uplift" />
          <StatCounter end={500} suffix="+" label="Campaigns Delivered" />
          <StatCounter end={98} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
