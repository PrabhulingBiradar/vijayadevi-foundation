import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-white text-left">
            <div className="container mx-auto px-6 lg:px-12 text-left">
                <div className="bg-slate-950 rounded-[5rem] overflow-hidden flex flex-col lg:flex-row border border-white/5 shadow-2xl">
                    <div className="lg:w-1/2 p-16 md:p-24 text-left">
                        <span className="text-brand-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-8 block">Inquiry</span>
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-16 tracking-tighter leading-none uppercase">Get in <br/>Touch.</h2>
                        
                        <div className="space-y-12 text-left">
                            <div className="flex items-start gap-10">
                                <div className="bg-white/10 p-6 rounded-[2rem] text-brand-400 shrink-0 shadow-lg">
                                    <MapPin className="w-8 h-8 text-left" />
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-2xl mb-2 tracking-tighter uppercase text-left">Registered Office</h4>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light text-left">
                                        H.No. 8-6-64/2-27, Opp. Nagure Balaji Skin Hospital, <br/>
                                        Behind Water Tank, Janwada Road, <br/>
                                        Bidar, Karnataka - 585401.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-10 text-left">
                                <div className="bg-white/10 p-6 rounded-[2rem] text-brand-400 shrink-0 shadow-lg">
                                    <Mail className="w-8 h-8 text-left" />
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-2xl mb-2 tracking-tighter uppercase text-left">Official Email</h4>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light text-left">
                                        info@vijayadevifoundation.org
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 min-h-[500px] relative">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.125914691039!2d77.5194165!3d17.9152341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc99d9be7f6f1c7%3A0x7d0e42d744b4c09d!2sJanwada%20Rd%2C%20Bidar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000" 
                            className="absolute inset-0 w-full h-full border-0 filter grayscale invert opacity-40 hover:opacity-100 transition-opacity duration-1000" 
                            allowFullScreen 
                            loading="lazy"
                            title="Map location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;