
import React, { useState } from 'react';

// Custom Logo Components

const CountryWheelsLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* SUV/Offroad simplified profile + Road */}
    <path d="M10 35 L15 25 L35 25 L40 35 H50 V45 H10 V40 H0 V35 H10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="45" r="5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="42" cy="45" r="5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M55 45 L230 45" stroke="currentColor" strokeWidth="2" />
    
    <text x="65" y="28" fontFamily="sans-serif" fontSize="18" fontWeight="900" letterSpacing="1">COUNTRY</text>
    <text x="65" y="48" fontFamily="sans-serif" fontSize="18" fontWeight="400" letterSpacing="3">WHEELS</text>
  </svg>
);

const RideWheelzLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Fast motion wheel */}
    <g transform="skewX(-15)">
        <circle cx="35" cy="30" r="14" stroke="currentColor" strokeWidth="3.5" fill="none" />
        <path d="M35 16 L35 22 M35 38 L35 44 M21 30 L27 30 M43 30 L49 30" stroke="currentColor" strokeWidth="2.5" />
        <path d="M55 20 L75 20 M60 30 L80 30 M55 40 L75 40" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    </g>
    <text x="90" y="38" fontFamily="sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" letterSpacing="-0.5">RIDE</text>
    <text x="145" y="38" fontFamily="sans-serif" fontSize="22" fontWeight="300" fontStyle="italic">WHEELZ</text>
  </svg>
);

const YumecavLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Peeling Sticker Icon */}
    <path d="M15 10 H45 V40 H25 L15 30 V10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M25 40 L25 30 L15 30" fill="currentColor" opacity="0.5" />
    
    {/* Creative/Artsy Font Style */}
    <text x="60" y="38" fontFamily="sans-serif" fontSize="28" fontWeight="700" letterSpacing="0.5" style={{ textTransform: 'lowercase' }}>yumecav</text>
    <circle cx="185" cy="30" r="3" fill="currentColor" />
  </svg>
);

const LocalGadiLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     {/* Map Pin with Car inside */}
     <path d="M30 10 C20 10 12 18 12 28 C12 38 30 52 30 52 C30 52 48 38 48 28 C48 18 40 10 30 10 Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
     {/* Simple car front view inside pin */}
     <path d="M22 25 L38 25 L36 20 H24 L22 25 Z M22 25 V30 H38 V25" fill="currentColor" />
     
     <text x="60" y="38" fontFamily="sans-serif" fontSize="22" fontWeight="800">LOCAL</text>
     <text x="140" y="38" fontFamily="sans-serif" fontSize="22" fontWeight="400">GADI</text>
  </svg>
);

const RentMyCarLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 60" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Car Key Fob */}
    <path d="M20 20 H40 A 5 5 0 0 1 45 25 V45 A 5 5 0 0 1 40 50 H20 A 5 5 0 0 1 15 45 V25 A 5 5 0 0 1 20 20 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="30" cy="28" r="3" fill="currentColor" />
    <rect x="25" y="35" width="10" height="8" rx="1" fill="currentColor" opacity="0.6"/>
    <path d="M30 20 V12 A 4 4 0 0 0 22 12" stroke="currentColor" strokeWidth="2.5" fill="none" />

    <text x="55" y="32" fontFamily="sans-serif" fontSize="16" fontWeight="700" letterSpacing="1">RENT MY</text>
    <text x="55" y="50" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="0.5">CAR</text>
  </svg>
);

type Client = {
    id: string;
    type: 'image' | 'svg';
    src?: string;
    Component?: React.FC<{ className?: string }>;
    Fallback?: React.FC<{ className?: string }>;
    name: string;
};

const clients: Client[] = [
    { 
        id: 'country-wheels', 
        type: 'image', 
        src: '/country-wheels.png', 
        name: 'Country Wheels',
        Fallback: CountryWheelsLogo
    },
    { id: 'ride-wheelz', type: 'svg', Component: RideWheelzLogo, name: 'Ride Wheelz' },
    { id: 'yumecav', type: 'svg', Component: YumecavLogo, name: 'Yumecav' },
    { id: 'local-gadi', type: 'svg', Component: LocalGadiLogo, name: 'Local Gadi' },
    { id: 'rent-my-car', type: 'svg', Component: RentMyCarLogo, name: 'Rent My Car' },
];

const ClientLogoItem: React.FC<{ client: Client }> = ({ client }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div 
            className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer min-w-[150px]"
            title={client.name}
        >
            {client.type === 'image' && client.src && !imgError ? (
                <img 
                    src={client.src} 
                    alt={client.name} 
                    className="h-14 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                    onError={() => setImgError(true)}
                    loading="eager"
                />
            ) : (
               // Use Component if type is svg OR if it's an image that failed loading (fallback)
               (client.Component || client.Fallback) ? (
                   React.createElement(client.Component || client.Fallback!, {
                       className: "h-12 md:h-14 w-auto text-gray-400 hover:text-brand-primary transition-colors duration-300 opacity-70 hover:opacity-100"
                   })
               ) : null
            )}
        </div>
    );
};

const ClientLogos: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-12">
         <div className="inline-block bg-sky-50 border border-sky-100 rounded-full px-5 py-2 mb-6">
            <span className="text-sm font-bold text-brand-primary uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                Trust & Portfolio
            </span>
         </div>
         <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary">
            Companies We Worked With
         </h2>
         <p className="mt-4 text-lg text-brand-text-muted max-w-2xl mx-auto">
            Partnering with visionary brands to deliver digital excellence and measurable growth.
         </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group py-6">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {/* Repeat the set 8 times to ensure it covers even the widest screens for a smooth loop given fewer logos */}
            {[...Array(8)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-20 px-10 items-center">
                    {clients.map((client, index) => (
                        <ClientLogoItem key={`${setIndex}-${index}`} client={client} />
                    ))}
                </div>
            ))}
        </div>
         {/* Gradient fade effect on the edges */}
         <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientLogos;
