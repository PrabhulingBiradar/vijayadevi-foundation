import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Logo className="w-10 h-10" />
                            <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">VIJAYADEVI FOUNDATION</h2>
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed mb-8">
                            Empowering lives through specialized care in Bidar since 2017. Transforming disabilities into abilities.
                        </p>
                        <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-lg">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Reg No: 366/2017-18</span>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {NAV_LINKS.map((link) => (
                                <a 
                                    key={link.label}
                                    href={link.href} 
                                    className="text-slate-500 hover:text-brand-600 transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col items-start lg:items-end justify-between">
                        <div className="mb-8 lg:mb-0">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Location</h3>
                            <p className="text-slate-500 text-sm">Janwada Road, Bidar, Karnataka</p>
                        </div>
                        <button 
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-sm hover:shadow-lg"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase">
                        © 2024 Vijayadevi Foundation.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-brand-600 text-[10px] font-bold uppercase tracking-wider">Privacy</a>
                        <a href="#" className="text-slate-400 hover:text-brand-600 text-[10px] font-bold uppercase tracking-wider">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;