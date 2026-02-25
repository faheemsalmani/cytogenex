"use client";


import { Activity, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Col */}
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center gap-2">
                        <Activity className="w-10 h-10 text-blue-500" />
                        <span className="text-3xl font-extrabold tracking-tight text-white">Cytogenex</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Cytogenex leads the field in medical genetic testing and oncology genomics. Unprecedented accuracy, rapid turnaround, and robust analytical capabilities.
                    </p>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Links Col 1 */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Therapeutic Expertise</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Oncology Diagnostics</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Prenatal Screening</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Cytogenetic Banding</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Infertility Genomics</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Postnatal Microarrays</a></li>
                    </ul>
                </div>

                {/* Links Col 2 */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Company Links</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">About Cytogenex</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Client Portal Login</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Career Opportunities</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Laboratory Certifications</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Latest Publications</a></li>
                    </ul>
                </div>

                {/* Contact Col */}
                <div id="contact">
                    <h4 className="text-white font-bold mb-6 text-lg">Get In Touch</h4>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4 text-slate-400 group">
                            <MapPin className="w-5 h-5 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                            <span className="text-sm leading-relaxed">Cytogenex Laboratory Headquarters<br />100 Genomics Way, BioTech Park<br />Global Medical District, UK</span>
                        </li>
                        <li className="flex items-center gap-4 text-slate-400 group">
                            <Phone className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                            <span className="text-sm">+44 (0) 20 1234 5678</span>
                        </li>
                        <li className="flex items-center gap-4 text-slate-400 group">
                            <Mail className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                            <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Mohanbettageri@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Cytogenex Limited. All rights reserved.</p>
                <div className="flex gap-8 text-sm text-slate-500 font-medium">
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
}
