import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void, className?: string, style?: React.CSSProperties }> = ({ href, children, onClick, className, style }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className={`relative py-1 text-brand-text-muted hover:text-brand-primary transition-colors duration-300 ${className}`}
    style={style}
  >
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
  
  useEffect(() => {
    const mainContentEl = document.getElementById('main-content');
    if (mainContentEl) {
      if (isMenuOpen) {
        mainContentEl.style.overflow = 'hidden';
      } else {
        mainContentEl.style.overflow = 'auto';
      }
    }
    // Cleanup function to restore scroll on component unmount if menu was open
    return () => {
      if (mainContentEl) {
        mainContentEl.style.overflow = 'auto';
      }
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={scrollToTop} className="text-2xl font-bold text-brand-text-primary z-50">
            The Ideal <span className="text-brand-primary">Firm</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <NavLink key={link.href} href={link.href} className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">{link.label}</NavLink>)}
          </nav>
          <div className="hidden md:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300">
              Get Proposal
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="z-50 relative w-8 h-6 flex flex-col justify-between items-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`block h-0.5 w-full bg-brand-text-primary rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-[11px]' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-brand-text-primary rounded-full transition-opacity duration-200 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-brand-text-primary rounded-full transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -rotate-45 -translate-y-[11px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-brand-surface z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-2 mt-20 flex-grow">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.href} 
              href={link.href} 
              onClick={handleMobileLinkClick}
              className={`text-xl font-semibold text-brand-text-muted hover:text-brand-primary py-3 transition-all duration-300 border-b border-gray-100 ${isMenuOpen ? 'opacity-0 animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={`mt-auto ${isMenuOpen ? 'opacity-0 animate-fade-in-up' : ''}`} style={{ animationDelay: `${150 + navLinks.length * 100}ms`, animationFillMode: 'forwards' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300">
            Get Proposal
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
