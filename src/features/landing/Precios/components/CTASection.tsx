"use client";

import React from "react";
import { ctaData } from "../data/visionData";
import Link from "next/link";

export const CTASection: React.FC = () => {
  const { titulo, botonTexto, botonLink } = ctaData;

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24">
      <div
        className="
          md:max-w-xl lg:max-w-4xl mx-auto text-center
          bg-accent rounded-2xl
          p-8 md:p-12 lg:p-16

          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* TÍTULO */}
        <h2
          className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {titulo}
        </h2>

        {/* BOTÓN */}
        <Link
          href={botonLink}
          data-aos="fade-up"
          data-aos-delay="300"
          className="
            group inline-block
            bg-white text-accent font-semibold
            px-6 md:px-8 py-3 md:py-4
            rounded-lg text-base md:text-lg

            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

            hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
            hover:-translate-y-0.5
            hover:scale-[1.03]

            active:scale-[0.98]
          "
        >
          <span
            className="
              inline-block
              transition-transform duration-500
              group-hover:translate-x-1
            "
          >
            {botonTexto}
          </span>
        </Link>
      </div>
    </section>
  );
};
