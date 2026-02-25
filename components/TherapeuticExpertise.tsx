"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, Dna, BrainCircuit, HeartPulse, Activity } from "lucide-react";

const expertiseData = [
    {
        title: "Cardiology",
        description: "Advanced genomic profiling for cardiomyopathies, arrhythmias, and hereditary cardiovascular diseases.",
        icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Oncology",
        description: "Comprehensive tumor molecular profiling to identify actionable mutations and guide targeted therapies.",
        icon: <Dna className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Neurology",
        description: "Next-generation sequencing panels for neurodevelopmental disorders, epilepsy, and neurodegenerative conditions.",
        icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Rare Diseases",
        description: "Whole exome and whole genome sequencing to end the diagnostic odyssey for patients with rare genetic disorders.",
        icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Pharmacogenomics",
        description: "Analyzing genetic variations that influence drug metabolism, efficacy, and risk of adverse reactions.",
        icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Preventive Genomics",
        description: "Proactive screening for actionable genetic markers to enable personalized preventive healthcare strategies.",
        icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    }
];

export default function TherapeuticExpertise() {
    return (
        <section id="expertise" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl opacity-60 z-0 pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Therapeutic Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        With years of dedicated research and clinical application, Cytogenex has cultivated deep vertical expertise across multiple therapeutic areas. We leverage advanced molecular biology to provide precise, actionable insights tailored to complex clinical scenarios, ultimately driving better patient outcomes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseData.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section within Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 bg-blue-600 text-white rounded-[40px] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10 tracking-tight">Need Specialized Genomic Analysis?</h3>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto relative z-10 font-medium">
                        Our expert clinical team is available to discuss custom panel design and targeted sequencing strategies for your specific research or diagnostic needs.
                    </p>
                    <button className="relative z-10 px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                        Schedule a Consultation
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
