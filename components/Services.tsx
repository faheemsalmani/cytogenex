"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Beaker, Baby, ShieldAlert, HeartPulse, Brain, ChevronDown, ClipboardList, Database, BarChart3, ShieldCheck } from "lucide-react";

const mainServices = [
    {
        title: "Prenatal & Perinatal Testing",
        description: "Advanced non-invasive screening providing critical insights into fetal health, chromosomal abnormalities, and genetic conditions early in pregnancy.",
        icon: <Baby className="w-8 h-8 text-blue-600" />,
        delay: 0,
    },
    {
        title: "Oncology Genomics",
        description: "Precision tumor profiling and hereditary cancer panels to identify key mutations, enabling personalized and targeted oncological therapies.",
        icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
        delay: 0.1,
    },
    {
        title: "Infertility Diagnostics",
        description: "Comprehensive molecular analysis to determine genetic factors contributing to reproductive challenges and guide proactive family planning.",
        icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
        delay: 0.2,
    },
];

const clinicalServices = [
    {
        title: "Clinical Operation",
        description: "Efficient management and execution of clinical trials with a focus on compliance, safety, and high-quality data collection.",
        icon: <ClipboardList className="w-6 h-6" />,
    },
    {
        title: "Clinical Data Management",
        description: "Robust data processing systems ensuring the integrity and security of clinical trial results from entry to final analysis.",
        icon: <Database className="w-6 h-6" />,
    },
    {
        title: "Statistical Analysis",
        description: "Expert biostatistical services including protocol design, sample size calculation, and comprehensive data interpretation.",
        icon: <BarChart3 className="w-6 h-6" />,
    },
    {
        title: "Pharmacovigilance Services",
        description: "Rigorous safety monitoring and risk management throughout the product lifecycle to ensure patient well-being.",
        icon: <ShieldCheck className="w-6 h-6" />,
    },
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Therapeutic Expertise
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900"
                    >
                        Comprehensive Genomic & Clinical Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Our CAP-accredited, CLIA-certified laboratories leverage the latest advancements in molecular biology to deliver actionable clinical insights with unmatched precision and speed.
                    </motion.p>
                </div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {mainServices.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            className="group relative bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-30 group-hover:scale-150 transition-transform duration-500 origin-top-right mix-blend-multiply" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Clinical Research Services Dropdown Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 rounded-[40px] p-8 md:p-12 shadow-inner border border-blue-100"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Specialized Clinical Research Services
                        </h3>
                        <div className="space-y-4">
                            {clinicalServices.map((service, index) => (
                                <div key={index} className="border-b border-blue-200/50 last:border-0 pb-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                                {service.icon}
                                            </div>
                                            <span className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                                {service.title}
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-14 pr-4 pb-4">
                                                    <p className="text-slate-600 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
