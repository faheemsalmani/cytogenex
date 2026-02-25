"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services", isDropdown: true },
    { name: "Therapeutic Expertise", href: "#expertise" },
    { name: "Blog", href: "#blog" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
];

const servicesDropdown = [
    { name: "Clinical Operations", href: "#services" },
    { name: "Clinical Data Management", href: "#services" },
    { name: "Statistical Analysis", href: "#services" },
    { name: "Pharmacovigilance Services", href: "#services" },
    { name: "Clinical Data Standards", href: "#services" },
    { name: "Medical Writing", href: "#services" },
    { name: "Remote Monitoring (RMS)", href: "#services" },
    { name: "eTMF Services", href: "#services" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="" width={40} height={40} className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-bold tracking-tight text-teal-800">Cyptogenex</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, index) => {
                        if (link.isDropdown) {
                            return (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <motion.button
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${isScrolled ? "text-slate-700" : "text-slate-800"}`}
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </motion.button>

                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 py-3 z-50 overflow-hidden"
                                            >
                                                {servicesDropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-5 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${isScrolled ? "text-slate-700" : "text-slate-800"}`}
                            >
                                {link.name}
                            </motion.a>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-800 focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full z-50 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => {
                                if (link.isDropdown) {
                                    return (
                                        <div key={link.name} className="flex flex-col space-y-2">
                                            <div className="flex items-center justify-between text-slate-700 font-medium">
                                                <span>{link.name}</span>
                                            </div>
                                            <div className="pl-4 flex flex-col space-y-3 border-l-2 border-slate-100">
                                                {servicesDropdown.map(item => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
