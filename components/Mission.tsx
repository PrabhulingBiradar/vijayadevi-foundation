import React from 'react';
import { Target, Eye } from 'lucide-react';

const Mission: React.FC = () => {
    return (
        <section id="mission" className="py-32 bg-white text-left">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-24">
                    <span className="text-brand-700 font-bold tracking-widest uppercase text-xs mb-4 block">Our Purpose</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6">Driving Change</h2>
                    <p className="text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed italic">
                        "Specialized pediatric neuro-rehabilitation and community development in Bidar."
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-brand-50 p-16 rounded-[4rem] border border-brand-100 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-500/20 transition-all duration-500">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brand-200 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-5xl font-black mb-8 text-slate-900 tracking-tighter uppercase">Our Mission</h2>
                            <p className="text-2xl text-slate-600 leading-relaxed font-light">
                                To provide hope, support, and specialized therapies to children with neurological and developmental disorders. We help each child lead a life filled with joy and functional opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-950 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group hover:shadow-slate-900/50 transition-all duration-500">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-10 border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase">Our Vision</h2>
                            <p className="text-2xl text-slate-300 leading-relaxed font-light">
                                To create a society where disability is not a barrier. We envision a world where every child, irrespective of their abilities, is embraced, empowered, and given the essential tools to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;