"use client"

import Image from "next/image"
import { navigation } from "../data/navigation";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ModalFormContact } from "./ModalFormContact";

const socialMedias = [
    { name: "Instagram", ulr: "#", icon: <FaInstagram /> },
    { name: "Tiktok", ulr: "#", icon: <FaTiktok /> },
    { name: "LinkedIn", ulr: "#", icon: <FaLinkedinIn /> },
    { name: "Whatsapp", ulr: "#", icon: <FaWhatsapp /> },
]

export default function Footer() {
    return (
        <footer className="bg-[#101829] text-white">
            <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 text-center lg:text-left">
                <div className="space-y-3 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2">
                    <div className="flex items-center gap-4">
                        <Image
                            src={"/savviumWhite.png"}
                            alt="Logo Savvium"
                            width={300}
                            height={150}
                            className="w-20"
                        />
                        <div className="font-semibold">
                            <p>SAVVIUM</p>
                            <p>CLOUD ERP</p>
                        </div>
                    </div>
                    <p className="text-gray-300">El ERP inteligente para empresas en crecimiento</p>
                    <div className="flex gap-3">
                        {socialMedias.map(media => (
                            <a
                                key={media.name}
                                href={media.ulr}
                                target="_blank"
                                className="bg-white/10 p-2 rounded-full hover:bg-white/15 hover:transition-transform hover:scale-110 hover:duration-300 text-2xl lg:text-lg"
                            >
                                {media.icon}
                            </a>
                        ))}
                    </div>
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
                <div className="lg:place-items-end">
                    <div className="space-y-3 ">
                        <p className="text-lg font-bold">¿Listo para empezar?</p>
                        <ModalFormContact label={"Agenda tu Demo"} />
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto py-10 space-y-5 text-center">
                <hr className="border border-gray-500" />
                <p>&copy; {new Date().getFullYear()} Savvium. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
