import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  { label: "Google Ads", href: "/services/google-ads-guwahati" },
  { label: "Facebook Ads", href: "/services/facebook-ads-guwahati" },
  { label: "Web Design", href: "/services/web-designing-guwahati" },
  { label: "SEO", href: "/services/seo-guwahati" },
  { label: "Social Media", href: "/services/social-media-marketing-guwahati" },
  { label: "Content Marketing", href: "/services/content-marketing-guwahati" }
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 text-xl font-bold text-foreground">
              The Idea <span className="text-primary">Firm</span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Digital Marketing Agency in Guwahati, Assam, India. Delivering exceptional results
              through innovative strategies.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover-elevate active-elevate-2"
                data-testid="link-social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover-elevate active-elevate-2"
                data-testid="link-social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover-elevate active-elevate-2"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover-elevate active-elevate-2"
                data-testid="link-social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button size="default" data-testid="button-newsletter">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Idea Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
