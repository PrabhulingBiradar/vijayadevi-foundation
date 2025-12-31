import React from 'react';
import { BOARD_MEMBERS } from '../constants';
import { User } from 'lucide-react';

const Board: React.FC = () => {
    return (
        <section id="board" className="py-32 bg-slate-900 text-white text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-5"></div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-12">
                    <div className="max-w-xl text-left">
                        <span className="text-brand-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Leadership</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-left">Board of Directors</h2>
                        <p className="text-slate-400 text-lg mt-6 font-light leading-relaxed">
                            Guided by locally grounded medical and social leaders dedicated to the welfare of Bidar.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BOARD_MEMBERS.map((member, index) => (
                        <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl group-hover:bg-brand-500/30 transition-all"></div>
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-black shadow-lg group-hover:shadow-brand-500/20 group-hover:border-brand-500/50 transition-all">
                                        <span className="text-brand-400 group-hover:text-brand-300">{member.initials}</span>
                                    </div>
                                    <div className="p-2 bg-white/5 rounded-full text-white/30 group-hover:text-white/80 transition-colors">
                                        <User className="w-5 h-5" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white group-hover:text-brand-100 transition-colors leading-tight">{member.name}</h3>
                                <div className="inline-block border border-white/10 rounded-lg px-3 py-1.5 bg-white/5">
                                    <p className="text-brand-400 font-bold text-[10px] uppercase tracking-widest leading-none">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Board;