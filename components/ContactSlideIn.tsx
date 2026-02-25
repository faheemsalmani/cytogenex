"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, User, Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function ContactSlideIn() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Mobile Number is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Please enter exactly 10 digits";
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                }, 2000);
            }, 1000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Allow only digits for phone, up to 10
        if (name === "phone") {
            const sanitized = value.replace(/\D/g, "").slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: sanitized }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-l-2xl rounded-r-none shadow-[0_0_20px_rgba(13,148,136,0.4)] flex items-center justify-center transition-all duration-300 hover:pr-5 group"
                aria-label="Open Contact Form"
            >
                <span className="hidden group-hover:block mr-3 text-sm font-bold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 w-0 group-hover:w-auto">
                    Contact Us
                </span>
                <MessageCircle className="w-6 h-6 animate-pulse" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm shadow-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl overflow-y-auto flex flex-col"
                        >
                            <div className="bg-gradient-to-r from-teal-50 to-sky-50 p-6 flex justify-between items-center border-b border-teal-100">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                                    <p className="text-sm text-teal-600 mt-1">We’d love to hear from you. Send us a message!</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-teal-600 hover:bg-teal-100/50 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 p-6 flex flex-col justify-center">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Send className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <User className="h-5 w-5 text-teal-500" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-teal-400"} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            {errors.name && <p className="mt-1 text-sm text-red-500 font-medium">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-teal-500" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-teal-400"} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            {errors.email && <p className="mt-1 text-sm text-red-500 font-medium">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                Mobile Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <Phone className="h-5 w-5 text-teal-500" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.phone ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-teal-400"} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                                                    placeholder="9876543210"
                                                />
                                            </div>
                                            {errors.phone && <p className="mt-1 text-sm text-red-500 font-medium">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                Message
                                            </label>
                                            <div className="relative">
                                                <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none">
                                                    <MessageSquare className="h-5 w-5 text-teal-500" />
                                                </div>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={`block w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-teal-400"} rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none`}
                                                    placeholder="How can we help you today?"
                                                ></textarea>
                                            </div>
                                            {errors.message && <p className="mt-1 text-sm text-red-500 font-medium">{errors.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] hover:shadow-[0_0_20px_rgba(13,148,136,0.5)] transition-all flex justify-center items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Submit Message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
