import React from 'react';
import { MAIN_SERVICES, SPECIALIZED_THERAPIES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="work" className="py-32 bg-slate-50 text-left">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-24">
                    <span className="text-brand-700 font-bold tracking-widest uppercase text-xs mb-4 block">Execution</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6">What We Do</h2>
                    <p className="text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed italic">
                        Comprehensive child advocacy and clinical care under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {MAIN_SERVICES.map((service, index) => (
                        <div key={index} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-8 ${service.colorClass} ${service.hoverClass}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tighter">{service.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-16 flex items-center gap-6">
                        <span className="w-16 h-1.5 bg-brand-500 rounded-full"></span> Specialized Therapies
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {SPECIALIZED_THERAPIES.map((therapy, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 hover:-translate-y-1 group">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-8 ${therapy.colorClass} ${therapy.hoverClass}`}>
                                <therapy.icon className="w-8 h-8 text-left" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tighter">{therapy.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium">{therapy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;