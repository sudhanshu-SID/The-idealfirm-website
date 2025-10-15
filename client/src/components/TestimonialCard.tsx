import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="p-8" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <Quote className="mb-6 h-10 w-10 text-primary/40" />
      <p className="mb-6 text-base leading-relaxed text-foreground">{quote}</p>
      <div className="flex items-center gap-4 border-t border-border pt-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </Card>
  );
}
