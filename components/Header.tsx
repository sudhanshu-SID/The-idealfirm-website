import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  onClick?: () => void; 
  isActive: boolean; 
  isMobile?: boolean; 
  style?: React.CSSProperties 
}> = ({ href, children, onClick, isActive, isMobile = false, style }) => {
  const baseClasses = "transition-all duration-300 ease-in-out font-medium rounded-lg";
  const desktopClasses = `px-4 py-2 ${isActive ? 'bg-sky-100 text-brand-primary' : 'text-brand-text-muted hover:bg-gray-100 hover:text-brand-primary'}`;
  const mobileClasses = `block w-full text-left text-xl py-3 px-4 ${isActive ? 'bg-sky-100 text-brand-primary' : 'text-brand-text-muted hover:bg-gray-100'}`;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      style={style}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const whatsappUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20get%20a%20proposal.";

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#ClientLogos', label: 'Work' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];
  
  // Effect for scroll-based styling
  useEffect(() => {
    const mainContentEl = document.getElementById('main-content');
    if (!mainContentEl) return;
    
    const handleScroll = () => {
      setIsScrolled(mainContentEl.scrollTop > 20);
    };

    mainContentEl.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => mainContentEl.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for active section highlighting
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
    const mainContentEl = document.getElementById('main-content');
    if (!mainContentEl) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainContentEl, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    const mainContentEl = document.getElementById('main-content');
    if (mainContentEl) {
      mainContentEl.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }
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
    setActiveSection(''); // Reset active section when scrolling to top
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-surface/80 backdrop-blur-lg shadow-md border-b border-gray-200/50' : 'bg-transparent border-b border-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={scrollToTop} className="text-2xl font-bold text-brand-text-primary z-50 transition-colors duration-300 hover:text-brand-primary">
            The Ideal <span className="text-brand-primary">Firm</span>
          </a>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <NavLink 
                key={link.href} 
                href={link.href}
                isActive={activeSection === link.href.substring(1)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-secondary transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg">
               Get Proposal
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7 7H3" /></svg>
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
              isActive={activeSection === link.href.substring(1)}
              isMobile={true}
              style={{
                animation: isMenuOpen ? `fade-in-up 0.5s ease-out ${150 + index * 100}ms forwards` : 'none',
                opacity: 0,
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto" style={{
            animation: isMenuOpen ? `fade-in-up 0.5s ease-out ${150 + navLinks.length * 100}ms forwards` : 'none',
            opacity: 0,
        }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-secondary transition-colors duration-300">
            Get Proposal
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
