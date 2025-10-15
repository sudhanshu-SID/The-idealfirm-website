import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  href,
}: ServiceCardProps) {
  return (
    <Card
      className="group relative overflow-visible p-8 transition-all duration-300 hover:scale-[1.02] hover-elevate active-elevate-2 cursor-pointer"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>

      <ul className="mb-6 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start text-sm text-muted-foreground">
            <span className="mr-2 mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {benefit}
          </li>
        ))}
      </ul>

      <a
        href={href}
        className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline"
        data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Card>
  );
}
