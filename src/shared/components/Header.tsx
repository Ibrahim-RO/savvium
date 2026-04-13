"use client"

import Link from "next/link";
import { navigation } from "../data/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/10 py-0"
                        : "bg-transparent py-1"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <Image
                            src={"/savviumLogo.png"}
                            alt="Logo Savvium"
                            width={300}
                            height={150}
                            className={`w-28 md:w-32 transition-all duration-500 ${scrolled ? "brightness-0 invert" : ""}`}
                        />
                    </motion.div>

                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item, i) => {
                            const isActive = activeSection === item.name;
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                                >
                                    <Link
                                        href={item.url}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                                                ? scrolled
                                                    ? "text-white bg-white/10"
                                                    : "text-blue-600 bg-blue-50"
                                                : scrolled
                                                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeDot"
                                                className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? "bg-blue-400" : "bg-blue-600"}`}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`hidden md:block relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-300 group ${scrolled
                                ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25"
                                : "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30"
                            }`}
                    >
                        <span className="relative z-10">Agenda tu demo</span>
                        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors duration-300 ${scrolled || menuOpen ? "text-white" : "text-gray-700"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-current rounded-full origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-0.5 bg-current rounded-full"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-6 h-0.5 bg-current rounded-full origin-center"
                        />
                    </motion.button>
                </div>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 32 }}
                            className="fixed top-0 right-0 z-40 h-full w-72 bg-gray-950 border-l border-white/10 flex flex-col md:hidden"
                        >
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                                <Image
                                    src={"/savviumLogo.png"}
                                    alt="Logo Savvium"
                                    width={200}
                                    height={100}
                                    className="w-24 brightness-0 invert"
                                />
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                                {navigation.map((item, i) => {
                                    const isActive = activeSection === item.name;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * i, duration: 0.35 }}
                                        >
                                            <Link
                                                href={item.url}
                                                onClick={() => setMenuOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                                        ? "text-white bg-blue-600/20 border border-blue-500/30"
                                                        : "text-gray-300 hover:text-white hover:bg-white/8"
                                                    }`}
                                            >
                                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />}
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="px-4 pb-8"
                            >
                                <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3 rounded-xl text-sm shadow-lg shadow-blue-600/30">
                                    Agenda tu demo
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}