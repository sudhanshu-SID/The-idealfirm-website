// import React from 'react';

// interface StoryCardProps {
//   category: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   stats: { value: string; label: string }[];
// }

// const StoryCard: React.FC<StoryCardProps> = ({ category, title, description, imageUrl, stats }) => (
//   <div className="bg-brand-surface rounded-2xl overflow-hidden border border-gray-200 flex flex-col group shadow-sm hover:shadow-lg transition-shadow duration-300">
//     <div className="overflow-hidden">
//         <img src={imageUrl} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
//     </div>
//     <div className="p-8 flex-grow flex flex-col">
//       <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">{category}</p>
//       <h3 className="text-2xl font-bold text-brand-text-primary mb-3 flex-grow">{title}</h3>
//       <p className="text-brand-text-muted mb-6">{description}</p>
//       <div className="mt-auto border-t border-gray-200 pt-6 grid grid-cols-2 gap-4">
//         {stats.map((stat, index) => (
//           <div key={index}>
//             <p className="text-3xl font-bold text-brand-primary">{stat.value}</p>
//             <p className="text-sm text-brand-text-muted">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const storiesData: StoryCardProps[] = [
//   {
//     category: 'Google Ads & SEO',
//     title: 'E-Commerce Growth Campaign',
//     description: 'Helped a local retail brand achieve 3x revenue growth through integrated digital marketing.',
//     imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
//     stats: [
//       { value: '+300%', label: 'Revenue Growth' },
//       { value: '5.2x', label: 'ROAS' },
//     ],
//   },
//   {
//     category: 'Facebook Ads & Social Media',
//     title: 'Local Service Business Growth',
//     description: 'Boosted appointments by 250% for a local service provider using targeted social media ads.',
//     imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
//     stats: [
//       { value: '+250%', label: 'Appointment Growth' },
//       { value: '-50%', label: 'Cost Per Acquisition' },
//     ],
//   },
//   {
//     category: 'Google Ads & Web Design',
//     title: 'Real Estate Lead Generation',
//     description: 'Generated 500+ qualified leads for premium property listings in Guwahati.',
//     imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
//     stats: [
//       { value: '500+', label: 'Qualified Leads' },
//       { value: '12%', label: 'Conversion Rate' },
//     ],
//   },
// ];

// const SuccessStories: React.FC = () => {
//   return (
//     <section id="work" className="py-20 px-4 bg-brand-surface">
//       <div className="container mx-auto text-center">
//         <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
//           Our Work
//         </div>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Success Stories</h2>
//         <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-16">
//           Explore how we've helped businesses across industries achieve their digital marketing goals.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
//           {storiesData.map((story, index) => (
//             <StoryCard key={index} {...story} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;