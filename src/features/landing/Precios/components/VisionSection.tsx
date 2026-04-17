'use client';

import React from 'react';
import Image from 'next/image';
import { visionData } from '../data/visionData';

export const VisionSection: React.FC = () => {
  const { titulo, descripcion, imagen } = visionData;

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Columna izquierda - Texto */}
          <div
            className="order-1 md:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="mb-4 md:mb-6">
              {titulo}
            </h2>

            <p
              className="
                text-secondary text-lg md:text-xl leading-relaxed

                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {descripcion}
            </p>
          </div>

          {/* Columna derecha - Imagen */}
          <div
            className="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="
                group relative rounded-2xl overflow-hidden
                bg-gray-100

                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)]
                hover:-translate-y-0.5
              "
            >
              <div className="aspect-4/3 relative">

                {/* Fondo degradado (mejorado) */}
                <div className="
                  absolute inset-0
                  bg-linear-to-br from-accent/20 to-primary/20
                  flex items-center justify-center
                  transition-opacity duration-500
                  group-hover:opacity-0
                ">
                  <svg
                    className="w-16 h-16 md:w-24 md:h-24 text-accent/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  fill
                  className="
                    object-cover

                    transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.05]
                  "
                />

                {/* Glow overlay sutil */}
                <div className="
                  absolute inset-0
                  bg-linear-to-t from-black/10 to-transparent
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                " />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};