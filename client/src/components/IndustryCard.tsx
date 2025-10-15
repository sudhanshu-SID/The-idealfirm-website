import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
}

export default function IndustryCard({ icon: Icon, title }: IndustryCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:scale-105 hover-elevate active-elevate-2"
      data-testid={`card-industry-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-center text-sm font-semibold text-foreground">{title}</h3>
    </div>
  );
}
