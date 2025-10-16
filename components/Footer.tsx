import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, WhatsappIcon } from './icons';

const Footer: React.FC = () => {
    
    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        if (emailInput.value) {
            alert("Thank you for subscribing! This feature is coming soon.");
            form.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    };
    
    return (
        <footer className="bg-brand-dark-footer border-t border-gray-700">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Brand Info */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold text-white">
                           The Ideal <span className="text-brand-primary">Firm</span>
                        </h3>
                        <p className="text-gray-400 mt-4">
                            Digital Marketing Agency in Guwahati, Assam, India. Delivering exceptional results through innovative strategies.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <SocialLink href="https://wa.me/919153766283" target="_blank" rel="noopener noreferrer"><WhatsappIcon footer/></SocialLink>
                            <SocialLink href="https://www.linkedin.com/company/the-ideal-firm/" target="_blank" rel="noopener noreferrer"><LinkedInIcon footer/></SocialLink>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Quick Links</h4>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#about">About Us</FooterLink>
                            <FooterLink href="#services">Services</FooterLink>
                            <FooterLink href="#work">Work</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                     <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Services</h4>
                        <ul className="mt-4 space-y-3">
                            <FooterLink href="#services">Google Ads</FooterLink>
                            <FooterLink href="#services">Facebook Ads</FooterLink>
                            <FooterLink href="#services">Web Design</FooterLink>
                            <FooterLink href="#services">SEO</FooterLink>
                            <FooterLink href="#services">Social Media</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider uppercase">Newsletter</h4>
                        <p className="text-gray-400 mt-4">
                            Subscribe to get the latest updates and insights.
                        </p>
                        <form className="mt-4 flex" onSubmit={handleNewsletterSubmit}>
                            <input type="email" name="email" placeholder="your@email.com" className="w-full bg-gray-800 border border-gray-700 rounded-l-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary outline-none" />
                            <button type="submit" aria-label="Subscribe" className="bg-brand-primary text-white font-semibold py-3 px-4 rounded-r-lg hover:bg-brand-secondary transition-colors duration-300">
                                &rarr;
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} The Ideal Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-brand-primary transition-colors duration-300">{children}</a>
    </li>
);

const SocialLink: React.FC<{ href: string; children: React.ReactNode; target?: string, rel?: string }> = ({ href, children, target, rel }) => (
    <a href={href} target={target} rel={rel} className="text-gray-400 hover:text-brand-primary transition-colors duration-300">
        {children}
    </a>
);


export default Footer;