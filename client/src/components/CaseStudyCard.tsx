import { Card } from "@/components/ui/card";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  image?: string;
}

export default function CaseStudyCard({
  title,
  category,
  description,
  metrics,
  image,
}: CaseStudyCardProps) {
  return (
    <Card
      className="group relative overflow-hidden p-0 transition-all duration-300 hover:scale-[1.02] hover-elevate active-elevate-2 cursor-pointer"
      data-testid={`card-case-study-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover opacity-40"
          />
        )}
      </div>

      <div className="p-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          {category}
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-6 text-sm text-muted-foreground">{description}</p>

        <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
