import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4' : 'py-6'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative flex items-center justify-center">
                            <div className="absolute -inset-2 bg-brand-500/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="relative bg-white p-2 rounded-xl shadow-sm border border-slate-100 group-hover:border-brand-200 group-hover:shadow-md transition-all flex items-center justify-center gap-3 pr-4">
                                <Logo className="h-10 w-10" />
                                <span className="text-xs font-bold text-slate-900 tracking-tighter">VIJAYADEVI FOUNDATION</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 bg-white/70 backdrop-blur-md px-10 py-3.5 rounded-full border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        {NAV_LINKS.map(link => (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                className="text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a 
                            href="#contact" 
                            className="hidden md:flex bg-slate-900 text-white px-8 py-3.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
                        >
                            Contact
                        </a>
                        <button 
                            onClick={toggleMobileMenu} 
                            className="lg:hidden bg-white p-3 rounded-2xl border border-slate-100 text-slate-600 shadow-sm active:scale-90 transition-transform"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[110] bg-white flex flex-col p-8 lg:hidden animate-fade-in-up">
                    <div className="flex justify-between items-center mb-16 text-left">
                        <div className="flex items-center gap-3">
                            <Logo className="h-10 w-10" />
                            <span className="text-sm font-bold text-slate-900">VIJAYADEVI FOUNDATION</span>
                        </div>
                        <button 
                            onClick={closeMobileMenu} 
                            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-8 text-4xl font-black tracking-tighter uppercase text-left">
                        {NAV_LINKS.map(link => (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                onClick={closeMobileMenu} 
                                className="hover:text-brand-600 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            onClick={closeMobileMenu} 
                            className="text-brand-600"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;