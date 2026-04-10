"use client"

import Image from "next/image"
import { navigation } from "../data/navigation";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#101829] text-white">
            <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
                <div>
                    <Image
                        src={"/savviumLogo.png"}
                        alt="Logo Savvium"
                        width={300}
                        height={150}
                        className="w-40"
                    />
                    <p>El ERP inteligente para empresas en crecimiento</p>
                </div>
                <nav className="flex flex-col gap-2 justify-center items-center">
                    <p>Enlaces</p>
                    {navigation.map(item => {
                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                className=""
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
                <div>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-lg text-white cursor-pointer font-semibold"
                    >
                        Agenda tu demo
                    </button>
                </div>
            </div>
            <hr />
            <p>&copy; {new Date().getFullYear()} Savvium. Todos los derechos reservados.</p>
        </footer>
    )
}
