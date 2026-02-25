"use client";

import { motion } from "framer-motion";
import { ArrowRight, Microscope, Dna, Users, Activity, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

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
                <Image
                    src="/main.png"
                    alt="Clinical Laboratory"
                    fill
                    className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
                />
                {/* Abstract Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-teal-50/80 to-sky-50/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
            </div>

            {/* Floating Background Icons */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Microscope className="absolute top-1/4 left-1/4 w-32 h-32 text-teal-100/40 animate-float" />
                <Dna className="absolute bottom-1/4 right-1/4 w-48 h-48 text-sky-100/40 animate-float animation-delay-2000" />
                <HeartPulse className="absolute top-1/3 right-1/3 w-24 h-24 text-emerald-100/40 animate-float animation-delay-4000" />
                <Activity className="absolute bottom-1/3 left-1/3 w-40 h-40 text-teal-100/30 animate-pulse-soft" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-5 py-2 mb-5 text-sm font-semibold tracking-wider text-teal-700 uppercase bg-teal-50/80 rounded-full border border-teal-200 animate-pulse-soft">
                            Pioneering Genomic Excellence
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                            Precision Diagnostics <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-500">
                                Defining the Future
                            </span>
                        </h1>
                        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
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
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-3 px-8 py-4 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1 animate-pulse-glow"
                        >
                            Explore Our Services <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-700 rounded-full font-semibold text-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-lg">
                            More Info
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
                            <Users className="w-8 h-8 text-teal-500" />
                            <span className="text-2xl font-bold text-slate-800">{clients}+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Enterprise Clients</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Microscope className="w-8 h-8 text-sky-500" />
                            <span className="text-2xl font-bold text-slate-800">{experience}+</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Dna className="w-8 h-8 text-emerald-500" />
                            <span className="text-2xl font-bold text-slate-800">{accuracy}%</span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Clinical Accuracy</span>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Decorative Element */}
                <div className="hidden lg:flex justify-end items-center relative h-full">
                    <motion.div
                        className="relative w-full max-w-lg aspect-square animate-breath"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-sky-100 rounded-full blur-3xl opacity-60 animate-pulse-soft" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/10 border border-white/60 backdrop-blur-sm p-4 z-10 animate-float">
                            <Image
                                src="/Genomic Lab.png"
                                alt="Anatomical / Genomic Illustration"
                                fill
                                className="w-full h-full object-cover rounded-[1.5rem] opacity-90 transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-0 w-3/5 aspect-square bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-xl shadow-teal-900/5 z-20 text-slate-800 flex flex-col justify-between border border-white">
                            <Dna className="w-12 h-12 text-teal-500 animate-pulse-soft" />
                            <div>
                                <p className="text-4xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600">Advanced</p>
                                <p className="text-slate-500 text-sm font-medium">Next-Gen Sequencing Capabilities</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
