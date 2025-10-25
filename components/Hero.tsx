import React, { useRef, useEffect, useState } from 'react';
import { GoogleAdsIcon, SEOIcon, WebDesignIcon, SocialMediaIcon } from './icons';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const InteractiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef<{ x: number | undefined, y: number | undefined }>({ x: undefined, y: undefined });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
        const particleCount = 80;
        const connectDistance = 120;
        const mouseConnectDistance = 200;

        const resizeCanvas = () => {
            const parentElement = canvas.parentElement;
            if (!parentElement) return;
            canvas.width = parentElement.offsetWidth;
            canvas.height = parentElement.offsetHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 1.5 + 1,
                });
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = event.clientX - rect.left;
            mouse.current.y = event.clientY - rect.top;
        };
        
        const handleMouseLeave = () => {
            mouse.current.x = undefined;
            mouse.current.y = undefined;
        }

        const parentElement = canvas.parentElement;
        if (!parentElement) return;

        parentElement.addEventListener('mousemove', handleMouseMove);
        parentElement.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', resizeCanvas);
        
        resizeCanvas();

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
                ctx.fill();
            });

            // Particle-to-particle connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < connectDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(14, 165, 233, ${1 - dist / connectDistance})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                }
            }

            // Particle-to-mouse connections
            if (mouse.current.x !== undefined && mouse.current.y !== undefined) {
                 particles.forEach(p => {
                    const distToMouse = Math.hypot(p.x - mouse.current.x!, p.y - mouse.current.y!);
                    if (distToMouse < mouseConnectDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.current.x!, mouse.current.y!);
                        ctx.strokeStyle = `rgba(14, 165, 233, ${0.5 * (1 - distToMouse / mouseConnectDistance)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                 });
            }
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            if (parentElement) {
                parentElement.removeEventListener('mousemove', handleMouseMove);
                parentElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

const ServicesShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const services = [
    { name: "Google Ads", icon: <GoogleAdsIcon /> },
    { name: "SEO Service", icon: <SEOIcon /> },
    { name: "Web Design", icon: <WebDesignIcon /> },
    { name: "Social Media", icon: <SocialMediaIcon /> },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseRef.current) return;
    const { left, top, width, height } = showcaseRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / (height / 2)) * 12;
    const rotateY = (x / (width / 2)) * 12;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'rotateX(0) rotateY(0)',
      transition: 'transform 0.6s ease-in-out',
    });
  };

  const cardBaseClasses = "absolute bg-brand-surface rounded-xl shadow-xl p-4 flex flex-col justify-center items-center animate-float border border-gray-200/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-brand-primary cursor-pointer";

  return (
    <div
      ref={showcaseRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-96 hidden lg:flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      <div className="w-full h-full relative" style={{...style, transformStyle: 'preserve-3d'}}>
        <div className={`${cardBaseClasses} w-52 h-32 top-8 left-1/4`} style={{ transform: 'translateZ(40px) rotateZ(-6deg)', animationDelay: '0s', backfaceVisibility: 'hidden' }}>
          <div className="text-brand-primary">{services[0].icon}</div>
          <p className="font-bold mt-2 text-brand-text-primary">{services[0].name}</p>
        </div>
        <div className={`${cardBaseClasses} w-60 h-36 top-1/2 -left-2`} style={{ transform: 'translateZ(80px) rotateZ(10deg)', animationDelay: '0.5s', backfaceVisibility: 'hidden' }}>
          <div className="text-brand-primary">{services[1].icon}</div>
          <p className="font-bold mt-2 text-brand-text-primary">{services[1].name}</p>
        </div>
        <div className={`${cardBaseClasses} w-56 h-36 bottom-8 left-1/2`} style={{ transform: 'translateZ(20px) rotateZ(-10deg)', animationDelay: '1s', backfaceVisibility: 'hidden' }}>
          <div className="text-brand-primary">{services[2].icon}</div>
          <p className="font-bold mt-2 text-brand-text-primary">{services[2].name}</p>
        </div>
        <div className={`${cardBaseClasses} w-52 h-32 top-1/4 right-4`} style={{ transform: 'translateZ(60px) rotateZ(8deg)', animationDelay: '0.2s', backfaceVisibility: 'hidden' }}>
           <div className="text-brand-primary">{services[3].icon}</div>
           <p className="font-bold mt-2 text-brand-text-primary">{services[3].name}</p>
        </div>
      </div>
    </div>
  );
};


const Hero: React.FC = () => {
  const proposalUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20get%20a%20proposal%20for%20my%20business.";
  const auditUrl = "https://wa.me/916207793914?text=I'd%20like%20to%20book%20a%20free%20audit.";
  
  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({});
  const textBlockRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textBlockRef.current) return;
    const { left, top, width, height } = textBlockRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    
    const rotateX = (-y / (height / 2)) * 10; 
    const rotateY = (x / (width / 2)) * 10;
    
    setHeadingStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setHeadingStyle({
        transform: 'rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transition: 'transform 0.6s ease-in-out',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-brand-surface">
      <InteractiveBackground />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          className="text-center lg:text-left"
          ref={textBlockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <div className="inline-block bg-sky-100 text-brand-primary rounded-full px-4 py-2 text-sm font-semibold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Amplify Your Brand's Digital Presence
          </div>
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-brand-text-primary leading-tight" 
            style={{ ...headingStyle, transformStyle: 'preserve-3d' }}
          >
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Digital</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Marketing</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Agency</span>{' '}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>in</span>{' '}
            <span className="text-brand-primary inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Guwahati</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            For all your digital marketing solutions. We help businesses grow through data-driven strategies and creative excellence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <a href={proposalUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-all duration-300 w-full sm:w-auto animate-pulse-slow hover:-translate-y-1 hover:shadow-xl">
              Get Proposal <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={auditUrl} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-300 text-brand-text-muted font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-lg">
              Book a Free Audit
            </a>
          </div>
        </div>
        <ServicesShowcase />
      </div>
    </section>
  );
};

export default Hero;
