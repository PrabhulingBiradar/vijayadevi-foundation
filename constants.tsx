import React from 'react';
import { Baby, Dna, BrainCircuit, Smile, Mic, Accessibility, Stethoscope, ClipboardList, Microscope, Users } from 'lucide-react';

export const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Services', href: '#work' },
    { label: 'Board', href: '#board' },
];

export const TIMELINE_EVENTS = [
    {
        date: 'March 17, 2018',
        title: 'Initial Registration',
        description: <>The organization is officially founded as <br/><span className="text-brand-700 font-black uppercase tracking-tight italic">“Tanushree Rural & Urban Development Society”</span></>
    },
    {
        date: 'January 25, 2024',
        title: 'Structural Amendment',
        description: <>Resolution passed to amend bylaws and introduce the position of <span className="text-brand-700 font-black uppercase tracking-tight">Vice President</span>.</>
    },
    {
        date: 'February 20, 2024',
        title: 'Official Rebranding',
        description: <>Name officially changed to <span className="text-brand-700 font-black uppercase tracking-tight">“Vijayadevi Foundation”</span> and the new institutional address was registered.</>
    },
    {
        date: 'May 30, 2024',
        title: 'New Governing Body',
        description: <>Governing body for the year 2024 is established, confirming the new leadership team.</>
    },
];

export const MAIN_SERVICES = [
    {
        icon: Stethoscope,
        title: 'Therapies',
        description: 'Evidence-based clinical interventions for neuro-development.',
        colorClass: 'bg-purple-50 text-purple-600',
        hoverClass: 'group-hover:scale-110'
    },
    {
        icon: ClipboardList,
        title: 'Consultation',
        description: 'Expert pediatric advisory and medical counseling.',
        colorClass: 'bg-blue-50 text-blue-600',
        hoverClass: 'group-hover:scale-110'
    },
    {
        icon: Microscope,
        title: 'Testing Services',
        description: 'Standardized neuro-developmental screening.',
        colorClass: 'bg-amber-50 text-amber-600',
        hoverClass: 'group-hover:scale-110'
    },
    {
        icon: Users,
        title: 'Outreach',
        description: 'Bringing care to the remote regions of Bidar.',
        colorClass: 'bg-rose-50 text-rose-600',
        hoverClass: 'group-hover:scale-110'
    }
];

export const SPECIALIZED_THERAPIES = [
    {
        icon: Baby,
        title: 'Early Intervention',
        description: 'Identifying and providing support for children at risk of poor developmental outcomes through proactive screening and assistance.',
        colorClass: 'bg-rose-50 text-rose-600',
        hoverClass: 'group-hover:bg-rose-600 group-hover:text-white'
    },
    {
        icon: Dna,
        title: 'Genetic Consultation',
        description: 'Providing essential support and information for individuals and families who have, or may be at risk for, specific genetic conditions.',
        colorClass: 'bg-brand-50 text-brand-600',
        hoverClass: 'group-hover:bg-brand-600 group-hover:text-white'
    },
    {
        icon: BrainCircuit,
        title: 'Occupational Therapy',
        description: 'Developing essential skills needed for daily activities, education, and play to help children reach functional independence.',
        colorClass: 'bg-orange-50 text-orange-600',
        hoverClass: 'group-hover:bg-orange-600 group-hover:text-white'
    },
    {
        icon: Smile,
        title: 'Behaviour Therapy',
        description: 'Addressing behavioral challenges through specialized programs to improve overall well-being and social integration.',
        colorClass: 'bg-cyan-50 text-cyan-600',
        hoverClass: 'group-hover:bg-cyan-600 group-hover:text-white'
    },
    {
        icon: Mic,
        title: 'Speech Therapy',
        description: 'Comprehensive programs helping children enhance their communication abilities and overcome language disorders effectively.',
        colorClass: 'bg-indigo-50 text-indigo-600',
        hoverClass: 'group-hover:bg-indigo-600 group-hover:text-white'
    },
    {
        icon: Accessibility,
        title: 'Physiotherapy',
        description: 'Improving physical abilities, mobility, and strength tailored specifically for pediatric neurological needs.',
        colorClass: 'bg-teal-50 text-teal-600',
        hoverClass: 'group-hover:bg-teal-600 group-hover:text-white'
    }
];

export const BOARD_MEMBERS = [
    { initials: 'AP', name: 'Dr. Abhijeet S. Patil', role: 'President' },
    { initials: 'PU', name: 'Dr. Prashant Ramesh Utage', role: 'Vice President' },
    { initials: 'AU', name: 'Dr. Aparna Prashant Utage', role: 'Secretary' },
    { initials: 'SB', name: 'Mr. Sangameshwar Basavaraj Biradar', role: 'Treasurer' },
    { initials: 'JM', name: 'Mrs. Jyoti Math', role: 'Member' },
    { initials: 'DS', name: 'Dr. Sweta Sangamesh Kunakeri', role: 'Member' },
    { initials: 'DC', name: 'Dr. Chinmaya H. L. Patil', role: 'Member' },
];