import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-brand-text-muted hover:text-brand-primary transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20get%20a%20proposal.";

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={scrollToTop} className="text-2xl font-bold text-brand-text-primary">
          The Ideal <span className="text-brand-primary">Firm</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
        </nav>
        <div className="hidden md:block">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300">
            Get Proposal
          </a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-brand-text-primary focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-surface pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={handleMobileLinkClick}>{link.label}</NavLink>)}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300 mt-4">
              Get Proposal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
