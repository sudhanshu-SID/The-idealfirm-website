import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Guwahati, Assam, India"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@theideafirm.com"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            Let's Start a Conversation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ready to take your digital marketing to the next level? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 grid gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label} className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-base font-semibold text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="aspect-video overflow-hidden rounded-lg border border-border bg-card/30">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <MapPin className="h-12 w-12" />
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
