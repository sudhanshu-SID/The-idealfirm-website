import Header from "./Header";
import Footer from "./Footer";
import SEOHead from "./SEOHead";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceLandingTemplateProps {
  service: {
    title: string;
    description: string;
    heroImage?: string;
    benefits: string[];
    processSteps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
  };
}

export default function ServiceLandingTemplate({ service }: ServiceLandingTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${service.title} | The Idea Firm`}
        description={service.description}
        localBusiness={true}
        faqSchema={{ questions: service.faqs }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Guwahati
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl">
              {service.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-free-consultation">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">
            Why Choose Our Services?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
                data-testid={`benefit-${index}`}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">
            Our Process
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you with a customized proposal.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
