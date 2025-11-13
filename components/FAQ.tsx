import React, { useState } from 'react';

const faqData = [
  {
    question: "What specific digital marketing services do you offer?",
    answer: "We offer a comprehensive suite of services including Google Ads, Facebook Ads, Search Engine Optimization (SEO), Social Media Marketing, Content Marketing, and custom Web Design. Our goal is to provide a complete digital solution tailored to your business needs."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on the specific services you require, the scope of your project, and your business goals. We recommend booking a free audit or getting a proposal to receive a detailed quote tailored to your needs."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "The timeline for results varies. Paid advertising campaigns like Google and Facebook Ads can show results within days. SEO is a long-term strategy that typically takes 3-6 months to show significant organic growth. We focus on achieving both quick wins and sustainable, long-term success."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Absolutely! We are passionate about helping businesses of all sizes grow. We have tailored strategies and packages that are perfect for small businesses and startups in Guwahati and beyond looking to establish a strong digital presence."
  },
  {
    question: "What makes The Ideal Firm different from other agencies?",
    answer: "Our key differentiator is our data-driven, client-centric approach. We don't just run campaigns; we become a strategic partner in your growth. We combine technical expertise with creative marketing to deliver transparent, measurable results that directly impact your bottom line."
  },
];

const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-md"
        aria-expanded={isOpen}
      >
        <span className="transition-colors duration-300 hover:text-brand-primary">{question}</span>
        <span className={`flex-shrink-0 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-brand-text-muted text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Open first one by default

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-brand-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-brand-surface p-4 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
