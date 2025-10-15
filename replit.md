# The Idea Firm - Digital Marketing Agency Website

## Project Overview
A modern, high-performance digital marketing agency website for "The Idea Firm" in Guwahati, Assam. Built with React (frontend) and Express (backend) following a design-first approach with dark theme aesthetics inspired by Brandingoo.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing), TanStack Query
- **Backend**: Express.js, Node.js
- **Storage**: In-memory (MemStorage) - can be upgraded to PostgreSQL if needed
- **Validation**: Zod schemas, express-validator
- **Security**: Rate limiting, input sanitization

## Key Features Implemented
✅ Full-bleed hero section with dual CTAs and background imagery
✅ Services grid showcasing 6 digital marketing services
✅ Industries served section with circular icon cards
✅ Animated KPI counters for proof section
✅ Case studies with hover effects
✅ Testimonials carousel with professional avatars
✅ Contact form with backend API integration
✅ 6 individual service landing pages with local Guwahati SEO
✅ Blog index page ready for content
✅ JSON-LD schema markup (LocalBusiness, FAQPage)
✅ Responsive mobile-first design with dark theme
✅ Accessibility features (ARIA labels, keyboard navigation)

## Architecture

### Frontend Routes
- `/` - Homepage
- `/blog` - Blog index
- `/services/google-ads-guwahati` - Google Ads service page
- `/services/facebook-ads-guwahati` - Facebook Ads service page
- `/services/web-designing-guwahati` - Web Design service page
- `/services/seo-guwahati` - SEO service page
- `/services/social-media-marketing-guwahati` - Social Media Marketing service page
- `/services/content-marketing-guwahati` - Content Marketing service page

### Backend API Endpoints
- `POST /api/contact` - Contact form submissions (rate-limited: 5 per 15 min)
- `POST /api/quote` - Quote request submissions (rate-limited: 5 per 15 min)

### Data Models (shared/schema.ts)
- `contacts` - Stores contact form submissions with name, email, phone, company, service, message, source, and timestamp

## SEO Implementation
- **LocalBusiness Schema**: Added on homepage and service pages with Guwahati location
- **FAQPage Schema**: Dynamically added on service pages from FAQ content
- **Meta Tags**: Title, description, Open Graph, Twitter Card on all pages
- **Local SEO**: Service URLs optimized with "-guwahati" pattern for local search

## Deferred Features

### Email Integration
**Status**: User dismissed Resend integration during setup
**Action Needed**: Set up email service (Resend, SendGrid, or SMTP) for contact form notifications
- Update `server/routes.ts` to uncomment email sending logic
- Add environment variables for email service credentials
- Test email delivery before production

## Future Improvements
1. **Form Validation**: Map backend validation errors to field-level feedback in ContactForm
2. **Database**: Migrate from MemStorage to PostgreSQL for persistence
3. **Blog CMS**: Add content management for blog posts
4. **Analytics**: Integrate Google Analytics or similar
5. **A/B Testing**: Framework for CTA optimization
6. **Admin Dashboard**: View and manage contact submissions

## Development
```bash
npm run dev  # Starts both frontend and backend
```

## Notes
- All images are stock photos optimized for web
- Dark theme (#0E0E10 background, electric purple accents)
- Inter font family for modern aesthetics
- Rate limiting prevents form spam
- All forms validated on both client and server
