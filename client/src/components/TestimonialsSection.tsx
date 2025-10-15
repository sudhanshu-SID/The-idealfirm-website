import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "@assets/stock_images/professional_busines_b65fc059.jpg";
import avatar2 from "@assets/stock_images/professional_busines_7f9a8d76.jpg";
import avatar3 from "@assets/stock_images/professional_busines_79db3e30.jpg";
import avatar4 from "@assets/stock_images/professional_busines_6ef75c3d.jpg";

const testimonials = [
  {
    quote: "The Idea Firm transformed our digital presence completely. Their data-driven approach and creative strategies delivered exceptional results. Highly recommended!",
    author: "Rajesh Kumar",
    role: "CEO",
    company: "Tech Solutions Pvt. Ltd.",
    avatar: avatar1
  },
  {
    quote: "Working with The Idea Firm was a game-changer for our enrollment numbers. Their Facebook Ads campaigns were incredibly effective and efficient.",
    author: "Priya Sharma",
    role: "Marketing Director",
    company: "Excellence Academy",
    avatar: avatar2
  },
  {
    quote: "Professional, creative, and results-oriented. The team understands our business goals and delivers campaigns that truly make an impact.",
    author: "Amit Borah",
    role: "Founder",
    company: "Borah Real Estate",
    avatar: avatar3
  },
  {
    quote: "Their SEO expertise helped us rank on the first page of Google for competitive keywords. The ROI has been outstanding.",
    author: "Sneha Das",
    role: "Operations Manager",
    company: "Northeast Automobiles",
    avatar: avatar4
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              data-testid="button-testimonial-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted hover-elevate"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
