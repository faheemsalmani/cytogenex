"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", mobile: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08)_0%,transparent_50%)]" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >

                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        Ready to Transform Your Research?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Reach out to our team of experts for collaborations, consultation, or to learn more about our genomic and clinical capabilities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-teal-100/50">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Us</h4>
                                <p className="text-slate-600">Mohanbettageri@gmail.com</p>
                                <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1">
                                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-sky-100/50">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Call Us</h4>
                                <p className="text-slate-600">+44 (0) 20 1234 5678</p>
                                <p className="text-slate-500 text-sm mt-1">Mon - Fri, 9am - 6pm</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
                            <h3 className="text-2xl font-bold mb-6">Laboratory HQ</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-500">
                                        <MapPin className="w-5 h-5 text-teal-400 group-hover:text-teal-300" />
                                    </div>
                                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                        Cytogenex Laboratory Headquarters<br />
                                        100 Genomics Way, BioTech Park<br />
                                        Global Medical District, UK
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors duration-500">
                                        <MessageSquare className="w-5 h-5 text-sky-400 group-hover:text-sky-300" />
                                    </div>
                                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                        Technical Support & Lab Reports available 24/7 for regular partners via Portal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-100 focus:bg-white transition-all duration-300"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+1 234 567 890"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-100 focus:bg-white transition-all duration-300"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-100 focus:bg-white transition-all duration-300"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Describe your inquiry..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-100 focus:bg-white transition-all duration-300 resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center gap-3 hover:-translate-y-1"
                            >
                                Send Message <Send className="w-5 h-5 flex-shrink-0" />
                            </button>

                            <div className="text-center pt-4">
                                <p className="text-slate-500 text-sm">
                                    By submitting this form, you agree to our <span className="text-teal-600 underline font-medium cursor-pointer">Privacy Policy</span>.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
