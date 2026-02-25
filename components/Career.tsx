"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, MapPin, Clock } from "lucide-react";

const careers = [
    {
        title: "Senior Genomic Data Scientist",
        department: "Bioinformatics",
        location: "London, UK (Hybrid)",
        type: "Full-Time",
    },
    {
        title: "Clinical Laboratory Director",
        department: "Pathology",
        location: "Manchester, UK",
        type: "Full-Time",
    },
    {
        title: "Molecular Biologist (NGS)",
        department: "Research & Development",
        location: "London, UK",
        type: "Contract",
    },
    {
        title: "Medical Science Liaison",
        department: "Clinical Operations",
        location: "Remote (UK/EU)",
        type: "Full-Time",
    }
];

export default function Career() {
    return (
        <section id="career" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 rounded-l-full blur-3xl -z-10" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Career Opportunities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        Want to work with us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Join a cutting-edge team pushing the boundaries of medical genomics. We are always looking for passionate scientists, medical professionals, and data experts.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {careers.map((job, i) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <span className="px-4 py-1.5 bg-slate-100 text-slate-600 font-semibold text-sm rounded-full">
                                    {job.department}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{job.title}</h3>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-slate-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> {job.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> {job.type}
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <button className="flex items-center justify-center gap-2 w-full py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                                    I'm interested <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
