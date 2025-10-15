import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/professional_busines_19553ac4.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Digital marketing success" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Digital Marketing Agency
            </span>
          </div>

          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Digital Marketing Agency in{" "}
            <span className="text-primary">Guwahati</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            For all your digital marketing solutions. We help businesses grow through
            data-driven strategies and creative excellence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" data-testid="button-hero-proposal" className="group">
              Get Proposal
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-testid="button-hero-audit"
              className="backdrop-blur-sm"
            >
              Book a Free Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
