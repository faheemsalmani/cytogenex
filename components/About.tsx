"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
    const features = [
        { icon: <Award />, title: "Leading Pathology Network", text: "Partnered with globally recognized healthcare standards to ensure unparalleled data integrirty." },
        { icon: <CheckCircle2 />, title: "Precision Molecular Assays", text: "Harnessing highly-sensitive next-generation sequencing for low-frequency variant detection." },
        { icon: <Zap />, title: "Rapid Turnaround", text: "Accelerating the path from sample receipt to comprehensive clinical reporting seamlessly." },
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none animate-pulse-soft" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Images */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 hover:shadow-teal-900/10 transition-shadow duration-500"
                    >
                        <Image
                            src="/Research lab.png"
                            alt="Lab Researchers"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -bottom-16 -right-16 w-2/3 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-50 z-20 hidden md:block"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                            alt="Scientific Analysis"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                        className="absolute top-10 -left-10 bg-white/95 px-8 py-6 rounded-3xl shadow-xl flex items-center justify-center gap-4 z-30 border border-white backdrop-blur-md animate-float"
                    >
                        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                            <span className="text-3xl font-extrabold text-teal-600">1st</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ranked</p>
                            <p className="font-extrabold text-slate-800 text-xl leading-tight">Genetics Lab</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col md:pl-10 mt-16 lg:mt-0">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        About Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8"
                    >
                        Empowering Modern Medicine Through Science
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed mb-6"
                    >
                        At Cytogenex, we bridge the gap between groundbreaking scientific research and daily clinical practice. Our state-of-the-art diagnostic facility in the UK serves healthcare providers globally, delivering unparalleled insights efficiently.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-slate-600 leading-relaxed mb-10"
                    >
                        Led by board-certified geneticists and expert scientists, we are dedicated to setting new benchmarks in medical genetic screening and oncology genomics.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 mt-1 text-sky-500">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-light">{feature.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="mt-12"
                    >
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-lg hover:shadow-xl hover:-translate-y-1 hover:shadow-slate-900/10">
                            Read Our History
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
