import { useEffect } from "react";

interface LocalBusinessSchema {
  name: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  description: string;
  priceRange?: string;
  areaServed?: string;
}

interface FAQSchema {
  questions: {
    question: string;
    answer: string;
  }[];
}

interface SEOHeadProps {
  title: string;
  description: string;
  type?: "website" | "article";
  localBusiness?: boolean;
  faqSchema?: FAQSchema;
}

export default function SEOHead({ 
  title, 
  description, 
  type = "website",
  localBusiness = false,
  faqSchema
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: window.location.href }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Add LocalBusiness schema if specified
    if (localBusiness) {
      const businessSchema: any = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "The Idea Firm",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guwahati",
          addressRegion: "Assam",
          addressCountry: "IN"
        },
        telephone: "+91 98765 43210",
        email: "hello@theideafirm.com",
        url: window.location.origin,
        description: "Digital Marketing Agency in Guwahati providing expert services in Google Ads, Facebook Ads, SEO, Web Design, Social Media Marketing, and Content Marketing.",
        priceRange: "₹₹",
        areaServed: {
          "@type": "City",
          name: "Guwahati"
        }
      };

      let businessScript = document.getElementById('local-business-schema') as HTMLScriptElement;
      if (!businessScript) {
        businessScript = document.createElement('script');
        businessScript.id = 'local-business-schema';
        businessScript.type = 'application/ld+json';
        document.head.appendChild(businessScript);
      }
      businessScript.textContent = JSON.stringify(businessSchema);
    }

    // Add FAQ schema if provided
    if (faqSchema && faqSchema.questions.length > 0) {
      const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.questions.map(q => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer
          }
        }))
      };

      let faqScript = document.getElementById('faq-schema') as HTMLScriptElement;
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'faq-schema';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchemaData);
    }

    // Cleanup function to remove FAQ schema when component unmounts
    return () => {
      const faqScript = document.getElementById('faq-schema');
      if (faqScript) {
        faqScript.remove();
      }
    };
  }, [title, description, type, localBusiness, faqSchema]);

  return null;
}
