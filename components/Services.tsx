"use client";

import { motion } from "framer-motion";
import { Activity, Beaker, Baby, ShieldAlert, HeartPulse, Brain } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Prenatal & Perinatal Testing",
            description: "Advanced non-invasive screening providing critical insights into fetal health, chromosomal abnormalities, and genetic conditions early in pregnancy.",
            icon: <Baby className="w-8 h-8 text-teal-500" />,
            delay: 0,
        },
        {
            title: "Oncology Genomics",
            description: "Precision tumor profiling and hereditary cancer panels to identify key mutations, enabling personalized and targeted oncological therapies.",
            icon: <ShieldAlert className="w-8 h-8 text-sky-500" />,
            delay: 0.1,
        },
        {
            title: "Infertility Diagnostics",
            description: "Comprehensive molecular analysis to determine genetic factors contributing to reproductive challenges and guide proactive family planning.",
            icon: <HeartPulse className="w-8 h-8 text-emerald-500" />,
            delay: 0.2,
        },
        {
            title: "Postnatal Microarray Analysis",
            description: "High-resolution karyotyping and microarray testing to diagnose developmental delays, autism spectrum, and intellectual disabilities.",
            icon: <Brain className="w-8 h-8 text-teal-500" />,
            delay: 0.3,
        },
        {
            title: "Pharmacogenomics",
            description: "Evaluating your unique DNA profile to determine the safest and most effective medication dosages, minimizing adverse reactions.",
            icon: <Beaker className="w-8 h-8 text-sky-500" />,
            delay: 0.4,
        },
        {
            title: "General Cytogenetics",
            description: "Detecting large-scale genomic rearrangements and structural variations using state-of-the-art cytogenetic banding techniques.",
            icon: <Activity className="w-8 h-8 text-emerald-500" />,
            delay: 0.5,
        },
    ];

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-50/50 rounded-full blur-3xl" />
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Services
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900"
                    >
                        Comprehensive Genomic Solutions
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            className="group relative bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top-right mix-blend-multiply" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-teal-50/80 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-teal-100 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-teal-500/30">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-900 transition-colors duration-300">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
