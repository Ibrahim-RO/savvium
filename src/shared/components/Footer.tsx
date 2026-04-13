"use client"

import Image from "next/image"
import { navigation } from "../data/navigation";
import Link from "next/link";

const socialMedias = [
    { name: "Facebook", ulr: "#" },
    { name: "Instagram", ulr: "#" },
    { name: "LinkedIn", ulr: "#" },
    { name: "Whatsapp", ulr: "#" },
]

export default function Footer() {
    return (
        <footer className="bg-[#101829] text-white">
            <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <Image
                        src={"/savviumLogo.png"}
                        alt="Logo Savvium"
                        width={300}
                        height={150}
                        className="w-40"
                    />
                    <p className="text-gray-300">El ERP inteligente para empresas en crecimiento</p>
                    <div className="flex gap-3">
                        <a 
                            href="#"
                            className="bg-white/10 p-2 rounded-full hover:bg-white/15 hover:transition-transform hover:scale-110 hover:duration-300"
                        >
                            Face
                        </a>
                    </div>
                    {/* social medias : insta, tiktok, linkedin, whatsapp */}
                </div>
                <nav className="flex flex-col gap-2 justify-center items-center">
                    <p className="font-bold text-lg">Enlaces</p>
                    {navigation.map(item => {
                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                className="text-gray-300"
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
                <div className="place-items-end">
                    <div className="space-y-3 ">
                        <p className="text-lg font-bold">¿Listo para empezar?</p>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-lg text-white cursor-pointer font-semibold"
                        >
                            Agenda tu demo
                        </button>
                    </div>
                </div>

            </div>
            <hr />
            <p>&copy; {new Date().getFullYear()} Savvium. Todos los derechos reservados.</p>
        </footer>
    )
}
