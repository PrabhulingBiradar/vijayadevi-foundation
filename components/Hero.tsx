import React from 'react';
import { ArrowRight, MessageCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden text-left">
            <div className="absolute inset-0 z-0">
                {/* Dynamic Gradient Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
                
                {/* Noise Texture for professional finish */}
                <div className="absolute inset-0 bg-noise opacity-20 z-10 mix-blend-overlay"></div>
                
                {/* Dynamic Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1925&auto=format&fit=crop" 
                    alt="Children playing happily in a field" 
                    className="w-full h-full object-cover animate-slow-zoom origin-center" 
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                <div className="max-w-4xl animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 bg-brand-500/10 backdrop-blur-md border border-brand-500/20 px-5 py-2.5 rounded-full text-brand-300 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-lg hover:bg-brand-500/20 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        Transforming Lives in Bidar
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95] uppercase drop-shadow-2xl">
                        Hope in <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-white">Motion.</span>
                    </h1>
                    
                    <div className="border-l-4 border-brand-500 pl-8 mb-12">
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                            We provide <span className="text-white font-bold">specialized pediatric neuro-rehabilitation</span> and holistic community support to help every child reach their full potential.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-5 items-center">
                        <a 
                            href="#work" 
                            className="bg-brand-600 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-500 transition-all flex items-center gap-3 shadow-2xl shadow-brand-600/30 hover:-translate-y-1"
                        >
                            Our Therapies <ArrowRight className="w-4 h-4" />
                        </a>
                        <a 
                            href="#contact" 
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3"
                        >
                            Get in Touch <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                        
                        <div className="hidden md:flex items-center gap-3 ml-4 text-white/50 text-xs font-bold uppercase tracking-widest group cursor-pointer hover:text-white transition-colors">
                             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                                <Play className="w-4 h-4 fill-white group-hover:fill-slate-900 transition-colors" />
                             </div>
                             <span>Watch our story</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;