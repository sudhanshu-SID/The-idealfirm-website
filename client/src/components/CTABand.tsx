import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your digital marketing goals.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" data-testid="button-cta-contact" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
