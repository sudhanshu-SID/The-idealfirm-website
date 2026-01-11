import React, { useState } from 'react';

type Client = {
    id: string;
    src: string;
    name: string;
};

const clients: Client[] = [
    { 
        id: 'country-wheels', 
        src: 'countrywheels.png', 
        name: 'Country Wheels'
    },
    { 
        id: 'ride-wheelz', 
        src: 'ridewheelz.jpg', 
        name: 'Ride Wheelz' 
    },
    { 
        id: 'yumecav', 
        src: '/yumecav.png', 
        name: 'Yumecav' 
    },
    { 
        id: 'local-gadi', 
        src: 'Local-Gadi.png', 
        name: 'Local Gadi' 
    },
    { 
        id: 'rent-my-car', 
        src: 'rentmycar.png', 
        name: 'Rent My Car' 
    },
];

const ClientLogoItem: React.FC<{ client: Client }> = ({ client }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div 
            className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer min-w-[180px] px-4"
            title={client.name}
        >
            {!imgError ? (
                <img 
                    src={client.src} 
                    alt={`${client.name} Logo`} 
                    className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 filter drop-shadow-sm"
                    onError={() => setImgError(true)}
                    loading="eager"
                />
            ) : (
                <span className="text-gray-400 font-bold text-lg tracking-wider uppercase opacity-50">
                    {client.name}
                </span>
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
            Partnering with visionary brands in Guwahati and beyond to deliver digital excellence and measurable growth.
         </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group py-6">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {/* Repeat the set multiple times to ensure a seamless infinite loop */}
            {[...Array(10)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-12 md:space-x-24 px-6 md:px-12 items-center">
                    {clients.map((client) => (
                        <ClientLogoItem key={`${setIndex}-${client.id}`} client={client} />
                    ))}
                </div>
            ))}
        </div>
         {/* Gradient fade effect on the edges for smoother visual entry/exit */}
         <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientLogos;