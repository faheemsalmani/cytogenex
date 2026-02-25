"use client";

import { motion } from "framer-motion";
import { ArrowRight, Microscope, Dna, ShieldCheck, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [clients, setClients] = useState(0);
    const [experience, setExperience] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        const targetClients = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
        const targetExperience = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        const targetAccuracy = Math.floor(Math.random() * (99 - 1 + 1)) + 1;

        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setClients(Math.floor((targetClients / steps) * step));
            setExperience(Math.floor((targetExperience / steps) * step));
            setAccuracy(Math.floor((targetAccuracy / steps) * step));
            if (step >= steps) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, []);
    return (
        <section id="home" className="relative min-h-[95vh] w-full flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Genomic Lab.jpg"
                    alt="Clinical Laboratory"
                    className="w-full h-full object-cover object-center"
                />
                {/* Abstract Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-white shadow-gradient via-slate-50/95 to-slate-200/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100/80 rounded-full border border-blue-200">
                            Pioneering Genomic Excellence
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                            Precision Diagnostics <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                                Defining the Future
                            </span>
                        </h1>
                        <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
                            Cytogenex delivers unmatched therapeutic expertise and cutting-edge genetic insights. We empower healthcare with ultra-high fidelity diagnostics for complex pregnancy, oncology, and genetic screening.
                        </p>
                    </motion.div>

                    {/* Action Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    >
                        <button className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-blue-600/30">
                            Explore Our Services <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                            Schedule Consultation
                        </button>
                    </motion.div>

                    {/* Stats / Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-3 gap-8 pt-10 mt-4 border-t border-slate-200"
                    >
                        <div className="flex flex-col gap-2">
                            <Users className="w-8 h-8 text-blue-600" />
                            <span className="text-2xl font-bold text-slate-900">{clients}+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Enterprise Clients</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Microscope className="w-8 h-8 text-indigo-600" />
                            <span className="text-2xl font-bold text-slate-900">{experience}+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Dna className="w-8 h-8 text-emerald-600" />
                            <span className="text-2xl font-bold text-slate-900">{accuracy}%</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Clinical Accuracy</span>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Decorative Element */}
                <div className="hidden lg:flex justify-end items-center relative h-full">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-lg aspect-square"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-white/40 backdrop-blur-sm p-4 z-10">
                            <img
                                src="/Genomic Lab.png"
                                alt="Genomics Lab"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-0 w-3/5 aspect-square bg-indigo-700 rounded-3xl p-6 shadow-2xl z-20 text-white flex flex-col justify-between">
                            <Dna className="w-12 h-12 opacity-80" />
                            <div>
                                <p className="text-4xl font-bold mb-1">Advanced</p>
                                <p className="text-indigo-200 text-lg">Next-Gen Sequencing Capabilities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
