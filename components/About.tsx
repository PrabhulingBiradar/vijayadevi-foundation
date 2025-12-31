import React from 'react';
import { Tag, MapPin, Award } from 'lucide-react';
import { TIMELINE_EVENTS } from '../constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-slate-50 text-left overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-24">
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6">VIJAYADEVI FOUNDATION</h2>
                    <p className="text-xl text-slate-400 max-w-3xl font-medium leading-relaxed italic">
                        “An overview of our organization’s journey, structure, and governance, from its inception to its recent transformation.”
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-32">
                    <div className="bg-white rounded-[4rem] p-12 lg:p-16 border border-slate-100 shadow-sm flex flex-col justify-between group transition-all hover:shadow-2xl hover:shadow-slate-200/50">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-orange-500 uppercase tracking-tighter mb-8 group-hover:translate-x-2 transition-transform duration-500">
                                A Foundation Reimagined
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed mb-12 font-medium">
                                Established in 2018 as Tanushree Rural & Urban Development Society, our organization underwent a major transformation in 2024. With a new name, a new address, and expanded leadership, we have sharpened our focus on serving the Bidar community.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6">
                                    <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                                        <Tag className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">New Name</p>
                                        <p className="text-2xl font-black text-slate-900 uppercase tracking-tight">Vijayadevi Foundation</p>
                                    </div>
                                </div>
                                
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6">
                                    <div className="bg-brand-100 p-4 rounded-2xl text-brand-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">New Address</p>
                                        <p className="text-sm font-bold text-slate-600 leading-relaxed">
                                            H.No. 8-6-64/2-27, Opp. Nagure Balaji Skin Hospital, <br/>
                                            Behind Water Tank, Janwada Road, Bidar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-600 rounded-[4rem] p-12 lg:p-16 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-[100px] transition-all duration-700 group-hover:scale-150"></div>
                        <div className="relative z-10">
                            <div className="bg-white/20 p-6 rounded-[2rem] inline-block mb-10 border border-white/30 backdrop-blur-md">
                                <Award className="w-12 h-12 text-white" />
                            </div>
                            <h4 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 leading-none">366/2017-18</h4>
                            <p className="text-2xl font-black uppercase tracking-[0.2em] mb-8 text-brand-100">Registration Number</p>
                            <p className="text-xl font-medium text-white/80 max-w-sm mx-auto leading-relaxed">
                                Under the <br/>
                                <span className="font-black text-white uppercase tracking-tight">Karnataka Societies <br/>Registration Act, 1960</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto pt-12 text-left">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-20 flex items-center gap-6">
                        <span className="w-16 h-1.5 bg-brand-500 rounded-full"></span> A Timeline of Milestones
                    </h3>
                    
                    <div className="space-y-0">
                        {TIMELINE_EVENTS.map((event, index) => (
                            <div key={index} className="relative pl-12 pb-16 border-l-2 border-brand-500 last:border-0 last:pb-0 group">
                                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-brand-500 shadow-lg transition-transform duration-300 group-hover:scale-125"></div>
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-4">
                                    <span className="bg-slate-100 text-slate-900 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">{event.date}</span>
                                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{event.title}</h4>
                                </div>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;