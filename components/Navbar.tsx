"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Therapeutic Expertise", href: "#expertise" },
    { name: "Blog", href: "#blog" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <div className="flex items-center gap-2">
                    <Activity className={`w-8 h-8 ${isScrolled ? "text-blue-700" : "text-blue-700"}`} />
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                        Cytogenex
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${isScrolled ? "text-slate-700" : "text-slate-800"
                                }`}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Client Portal
                    </motion.button>
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
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full"
                >
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-700 font-medium hover:text-blue-600"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
                            Client Portal
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
