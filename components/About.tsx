import React from 'react';

const TeamMemberCard: React.FC<{ imageUrl: string; name: string; role: string }> = ({ imageUrl, name, role }) => (
    <div className="text-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" />
        <h4 className="text-xl font-bold text-brand-text-primary">{name}</h4>
        <p className="text-brand-text-muted">{role}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 px-4 bg-brand-surface">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block bg-sky-100 border border-sky-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
                        About Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Driven by Passion and Innovation</h2>
                    <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
                        We are The Ideal Firm, a team of creative thinkers, strategists, and digital experts dedicated to helping businesses in Guwahati and beyond achieve remarkable growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="A diverse team of professionals in a creative meeting, discussing strategy" className="rounded-2xl shadow-lg w-full" />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-brand-text-primary mb-3">Our Mission</h3>
                            <p className="text-brand-text-muted text-lg">
                                To empower businesses with innovative and data-driven digital marketing strategies that deliver measurable results, foster growth, and build lasting brand equity. We strive to be a trusted partner in our clients' success stories.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-brand-text-primary mb-3">Our Vision</h3>
                            <p className="text-brand-text-muted text-lg">
                                To be the leading digital marketing agency in Guwahati, recognized for our creative excellence, strategic thinking, and unwavering commitment to client success. We envision a digital landscape where every business can thrive.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;