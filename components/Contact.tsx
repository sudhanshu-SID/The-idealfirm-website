import React, { useState } from 'react';
import { LocationIcon, PhoneIcon, EmailIcon } from './icons';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
    <div className="flex items-start p-6 bg-brand-surface rounded-2xl border border-gray-200">
        <div className="text-brand-primary mr-5 mt-1">{icon}</div>
        <div>
            <h4 className="font-semibold text-brand-text-muted">{title}</h4>
            <p className="text-brand-text-primary text-lg">{value}</p>
        </div>
    </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const { name, email, phone, company, service, message } = formData;
        const whatsappNumber = "916207793914";

        const whatsappMessage = `
Hello, I'd like to make an inquiry.

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company || 'N/A'}
*Service of Interest:* ${service || 'General Inquiry'}
*Message:*
${message}
        `;

        const encodedMessage = encodeURIComponent(whatsappMessage.trim());
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        
        // Optionally reset form after submission attempt
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="inline-block bg-brand-surface border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-primary uppercase tracking-widest font-semibold mb-4">
                    Get in Touch
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Let's Start a Conversation</h2>
                <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-16">
                    Ready to take your digital marketing to the next level? We'd love to hear from you.
                </p>

                <div className="grid lg:grid-cols-5 gap-8 text-left">
                    <div className="lg:col-span-2 space-y-6">
                       <ContactInfoItem icon={<LocationIcon />} title="Location" value="Guwahati, Assam, India" />
                       <ContactInfoItem icon={<PhoneIcon />} title="Phone" value="+91 62077 93914" />
                       <ContactInfoItem icon={<EmailIcon />} title="Email" value="connect@theidealfirm.in" />
                    </div>
                    <div className="lg:col-span-3 bg-brand-surface p-8 rounded-2xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" />
                                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" />
                            </div>
                             <div className="grid sm:grid-cols-2 gap-6">
                                <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required autoComplete="tel" />
                                <InputField label="Company" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-brand-text-muted mb-2">Service Interest</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-text-primary focus:ring-brand-primary focus:border-brand-primary">
                                    <option value="">Select a service</option>
                                    <option value="google-ads">Google Ads Service</option>
                                    <option value="facebook-ads">Facebook Ads Service</option>
                                    <option value="web-design">Web Designing Service</option>
                                    <option value="seo">SEO Service</option>
                                    <option value="social-media">Social Media Marketing</option>
                                    <option value="content-marketing">Content Marketing Service</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-text-muted mb-2">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-text-primary focus:ring-brand-primary focus:border-brand-primary" placeholder="Tell us about your project..." required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-secondary transition-colors duration-300">
                                    Send via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InputField: React.FC<{ label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; required?: boolean; autoComplete?: string; }> = ({ label, name, type = 'text', value, onChange, required = false, autoComplete }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-brand-text-muted mb-2">
            {label} {required && '*'}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            autoComplete={autoComplete}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-brand-text-primary focus:ring-brand-primary focus:border-brand-primary"
            placeholder={`Your ${label.toLowerCase()}`}
        />
    </div>
);

export default Contact;