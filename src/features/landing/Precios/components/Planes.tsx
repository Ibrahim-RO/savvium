"use client";
import React from "react";
import { preciosData } from "../data/planesData";
import Link from "next/link";

export const Planes: React.FC = () => {
  const { titulo, subtitulo, planes } = preciosData;

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">
            {titulo}
          </h2>

          <p
            className="text-secondary text-lg md:text-xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 group">
          {planes.map((plan, index) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
              className={`
                group/card relative rounded-2xl border bg-white shadow-sm

                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                will-change-transform

                group-hover:opacity-70 hover:opacity-100!

                ${
                  plan.destacado
                    ? `
                      border-accent md:scale-[1.03] z-10

                      shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_10px_30px_-10px_rgba(0,0,0,0.2)]

                      hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)]
                      hover:-translate-y-0.5
                      hover:scale-[1.05]
                    `
                    : `
                      border-gray-200

                      hover:border-accent/50
                      hover:shadow-[0_12px_35px_-10px_rgba(0,0,0,0.15)]
                      hover:-translate-y-0.5
                    `
                }
              `}
            >
              {/* Badge destacado */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50">
                  <div className="bg-accent text-white text-sm font-semibold px-4 py-1.5 rounded-2xl shadow-md">
                    Más popular
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8 text-center">
                {/* Nombre */}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.nombre}
                </h3>

                {/* Descripción */}
                <p className="text-secondary text-lg md:text-base mb-4">
                  {plan.descripcion}
                </p>

                {/* Precio */}
                <div className="mb-6">
                  <span
                    className="
                      text-4xl md:text-4xl lg:text-[2.7rem] font-bold text-accent

                      inline-block
                      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover/card:scale-[1.06]
                      group-hover/card:-translate-y-px
                    "
                  >
                    {plan.precio}
                  </span>

                  {plan.precioDetalle && (
                    <span className="text-secondary text-md md:text-base ml-1">
                      {plan.precioDetalle}
                    </span>
                  )}
                </div>

                {/* Características */}
                <ul className="space-y-3 text-left">
                  {plan.caracteristicas.map((caract) => (
                    <li
                      key={caract.id}
                      className="flex items-start gap-2 group/item transition-all duration-300"
                    >
                      <span
                        className="
                          shrink-0 w-5 h-5 mt-0.5 text-accent
                          transition-transform duration-300
                          group-hover/item:scale-110
                        "
                      >
                        <svg
                          className="w-full h-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>

                      <span
                        className="
                          text-secondary text-md md:text-base
                          transition-colors duration-300
                          group-hover/item:text-primary
                        "
                      >
                        {caract.texto}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`
                    w-full mt-6 md:mt-8 py-2.5 md:py-3 px-4 rounded-lg font-semibold 

                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      plan.nombre === "Crecimiento"
                        ? "bg-accent text-white hover:bg-accent/90 hover:shadow-md hover:-translate-y-px"
                        : "bg-input/80 hover:bg-input/60 hover:-translate-y-px"
                    }
                  `}
                >
                  {plan.precio === "Personalizado"
                    ? "Comenzar ahora →"
                    : "Contactar ventas →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="flex gap-2 md:gap-4 justify-center mt-8 lg:mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>¿Necesitas un plan personalizado?</p>

          <Link
            href="/#contact"
            className="
            text-accent font-semibold
            underline-offset-4
            transition-all duration-300
            hover:underline hover:text-accent/80
          "
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};
