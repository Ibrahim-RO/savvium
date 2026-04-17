"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

export const ScrollTop = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed right-5 bottom-5 flex items-center justify-center">
            <button
                className={`${showButton ? 'block' : 'hidden'}  bottom-full bg-blue-500 hover:bg-blue-600 p-3 rounded-full cursor-pointer`}
                onClick={scrollToTop}
            >
                <FaArrowUp className="text-white"/>
            </button>
        </div>
    )
}
