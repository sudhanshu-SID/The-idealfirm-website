import IndustryCard from "./IndustryCard";
import { GraduationCap, Home, Store, Car, Factory, UtensilsCrossed } from "lucide-react";

const industries = [
  { icon: GraduationCap, title: "Educational Institutions" },
  { icon: Home, title: "Real Estate" },
  { icon: Store, title: "Exclusive Showrooms" },
  { icon: Car, title: "Automobiles" },
  { icon: Factory, title: "Manufacturers" },
  { icon: UtensilsCrossed, title: "Hospitality" }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Industries We Serve
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            Trusted Across Multiple Sectors
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We've delivered successful campaigns for diverse industries across Guwahati and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
