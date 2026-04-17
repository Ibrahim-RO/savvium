"use client";
import React from "react";
import Image from "next/image";
import { crecimientoData } from "../data/section_3Data";

export const Section_3: React.FC = () => {
  const { titulo, puntos, imagen } = crecimientoData;

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto">
        {/* TÍTULO */}
        <h2
          className="mb-8 md:mb-12 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {titulo}
        </h2>

        <div className="flex flex-col items-center md:flex-row md:gap-8 lg:gap-14">
          {/* Columna izquierda - Textos */}
          <div className="flex-1 space-y-4 md:space-y-6 mb-6 md:mb-0">
            {puntos.map((punto, index) => (
              <div
                key={punto.id}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="900"
                className="
                  group
                  border border-gray-200
                  rounded-lg
                  p-6 md:p-7
                  shadow-sm bg-white

                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  
                  hover:border-accent/60
                  hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  hover:-translate-y-0.5
                "
              >
                <div className="flex items-start">
                  <span className="text-primary text-lg md:text-xl leading-relaxed transition-colors duration-300 group-hover:text-accent">
                    {punto.texto}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Columna derecha - Imagen */}
          <div className="flex-1" data-aos="zoom-in" data-aos-duration="1000">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 group">
              <Image
                src={imagen.src}
                alt={imagen.alt}
                width={600}
                height={400}
                className="
                  object-cover w-full h-full
                  transition-transform duration-500 ease-in-out
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
