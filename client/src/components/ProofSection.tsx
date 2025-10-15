import StatCounter from "./StatCounter";
import techGraphic from "@assets/stock_images/abstract_technology__5f031d77.jpg";

const stats = [
  { value: "5000", label: "Leads Generated", suffix: "+" },
  { value: "250", label: "Average ROI Uplift", suffix: "%" },
  { value: "500", label: "Campaigns Delivered", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" }
];

export default function ProofSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src={techGraphic} 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Impact
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            Results That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
