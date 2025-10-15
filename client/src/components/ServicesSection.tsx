import ServiceCard from "./ServiceCard";
import { Target, Share2, Globe, TrendingUp, MessageSquare, FileText } from "lucide-react";
import seoImage from "@assets/stock_images/seo_search_engine_op_2c329736.jpg";

const services = [
  {
    icon: Target,
    title: "Google Ads Service",
    description: "Drive qualified traffic and maximize ROI with expert Google Ads management",
    benefits: [
      "Strategic campaign planning",
      "Keyword research & optimization",
      "Performance tracking & reporting"
    ],
    href: "/services/google-ads-guwahati"
  },
  {
    icon: Share2,
    title: "Facebook Ads Service",
    description: "Reach your target audience with precision Facebook advertising campaigns",
    benefits: [
      "Audience targeting & segmentation",
      "Creative ad design",
      "Conversion optimization"
    ],
    href: "/services/facebook-ads-guwahati"
  },
  {
    icon: Globe,
    title: "Web Designing Service",
    description: "Build stunning, conversion-focused websites that elevate your brand",
    benefits: [
      "Responsive design",
      "User experience optimization",
      "Fast loading performance"
    ],
    href: "/services/web-designing-guwahati"
  },
  {
    icon: TrendingUp,
    title: "SEO Service",
    description: "Improve your search rankings and organic visibility with proven SEO strategies",
    benefits: [
      "On-page & technical SEO",
      "Link building",
      "Local SEO optimization"
    ],
    href: "/services/seo-guwahati"
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across social platforms",
    benefits: [
      "Content strategy",
      "Community management",
      "Analytics & insights"
    ],
    href: "/services/social-media-marketing-guwahati"
  },
  {
    icon: FileText,
    title: "Content Marketing Service",
    description: "Create compelling content that attracts, engages, and converts your audience",
    benefits: [
      "Content strategy development",
      "SEO-optimized writing",
      "Multi-format content creation"
    ],
    href: "/services/content-marketing-guwahati"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      <div className="absolute right-0 top-20 w-1/3 h-96 opacity-5 hidden lg:block">
        <img 
          src={seoImage} 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            Complete Digital Marketing Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From strategy to execution, we provide end-to-end digital marketing services
            tailored to your business goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
