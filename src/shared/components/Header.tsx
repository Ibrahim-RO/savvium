"use client"

import Link from "next/link";
import { navigation } from "../data/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/60 backdrop-blur-md py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="flex justify-between items-center gap-5 px-10 py-3">
                <Image
                    src={"/savviumLogo.png"}
                    alt="Logo Savvium"
                    width={300}
                    height={150}
                    className="w-40"
                />
                <div>
                    <nav className="flex gap-5 justify-center items-center">
                        {navigation.map(item => {
                            const isActive = activeSection === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    className={`relative mx-4 font-medium transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${isActive
                                        ? "text-blue-600 after:w-full after:bg-blue-600"
                                        : "text-gray-700 hover:text-gold after:w-0 after:bg-blue-600 hover:after:w-full"
                                        }
                  `}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <button
                    className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-lg text-white cursor-pointer font-semibold"
                >
                    Agenda tu demo
                </button>
            </div>
        </header>
    )
}
