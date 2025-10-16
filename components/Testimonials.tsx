// import React, { useState, useEffect, useCallback } from 'react';

// const testimonialsData = [
//   {
//     quote: "The Ideal Firm transformed our digital presence completely. Their data-driven approach and creative strategies delivered exceptional results. Highly recommended!",
//     author: "Rajesh Kumar",
//     title: "CEO, Tech Solutions Pvt. Ltd.",
//     avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//   },
//   {
//     quote: "Working with them was a game-changer. Our lead generation has never been better, and the ROI is fantastic. True professionals in every sense.",
//     author: "Priya Sharma",
//     title: "Marketing Head, Guwahati Realtors",
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//   },
//   {
//     quote: "From web design to our social media campaigns, every detail was handled with expertise. The team is responsive, creative, and results-oriented.",
//     author: "Amit Das",
//     title: "Owner, The Auto Hub",
//     avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//   }
// ];

// const Testimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const nextTestimonial = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
//   };
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [nextTestimonial]);

//   const { quote, author, title, avatar } = testimonialsData[currentIndex];

//   return (
//     <section id="testimonials" className="py-20 px-4 bg-brand-bg">
//       <div className="container mx-auto text-center">
//         <div className="inline-block bg-brand-surface border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
//           Testimonials
//         </div>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-16">What Our Clients Say</h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           <div className="bg-brand-surface p-8 md:p-12 rounded-2xl border border-gray-200 relative shadow-lg">
//             <span className="absolute top-8 left-8 text-7xl font-bold text-brand-primary opacity-10 transform -translate-x-2 -translate-y-2">&ldquo;</span>
//             <div className="relative text-left">
//               <p className="text-xl md:text-2xl text-brand-text-primary mb-8">{quote}</p>
//               <div className="flex items-center">
//                 <img src={avatar} alt={author} className="w-16 h-16 rounded-full mr-4 border-2 border-brand-primary object-cover" />
//                 <div>
//                   <p className="font-bold text-brand-text-primary text-lg">{author}</p>
//                   <p className="text-brand-text-muted">{title}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-brand-surface text-brand-text-primary hover:bg-brand-primary hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-300 shadow-md">
//             &larr;
//           </button>
//           <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-brand-surface text-brand-text-primary hover:bg-brand-primary hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-300 shadow-md">
//             &rarr;
//           </button>
//         </div>

//         <div className="flex justify-center mt-8 space-x-2">
//             {testimonialsData.map((_, index) => (
//                 <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                     className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-brand-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
//                 ></button>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
