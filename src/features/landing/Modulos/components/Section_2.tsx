'use client';
import React from "react";
import { modulosData } from "../data/section_2Data";
import { FaCheckCircle } from "react-icons/fa";
import { FiActivity, FiTrendingUp } from "react-icons/fi";

export const Section_2: React.FC = () => {
  const { titulo, lista, estadisticas } = modulosData;

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">

          {/* Columna izquierda - Lista */}
          <div>
            <ul className="space-y-3 md:space-y-4">
              {lista.map((item, index) => (
                <li
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                  className="
                    group flex items-center gap-3
                    border border-gray-200
                    rounded-lg
                    p-3.5 md:px-5 md:py-5
                    bg-white shadow-sm

                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    
                    hover:border-accent/60
                    hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                    hover:-translate-y-0.5

                    cursor-pointer
                  "
                >
                  <FaCheckCircle className="text-accent text-xl md:text-2xl shrink-0 transition-transform duration-500 group-hover:scale-110" />
                  
                  <span className="
                    text-primary text-base md:text-lg
                    transition-colors duration-300
                    group-hover:text-accent/90
                  ">
                    {item.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha - Estadísticas */}
          <div className="space-y-6 md:space-y-8">
            {estadisticas.map((stat, index) => (
              <div
                key={stat.id}
                data-aos="fade-left"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                className="
                  group flex items-center gap-8
                  justify-center md:justify-start
                  border border-gray-200
                  rounded-xl
                  p-5 md:px-12 md:py-8
                  bg-white shadow-sm

                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

                  hover:border-accent/60
                  hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  hover:-translate-y-0.5
                "
              >
                <div className="
                  w-12 h-12 md:w-16 md:h-16
                  rounded-md flex items-center justify-center
                  bg-blue-100
                  transition-transform duration-500
                  group-hover:scale-110
                ">
                  {stat.esPositivo ? (
                    <FiTrendingUp className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  ) : (
                    <FiActivity className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  )}
                </div>

                <div>
                  <div className="
                    text-4xl md:text-5xl lg:text-6xl font-bold text-accent
                    transition-transform duration-500
                    group-hover:scale-105
                  ">
                    {stat.porcentaje}
                  </div>

                  <div className="
                    text-secondary text-base md:text-lg
                    transition-colors duration-300
                    group-hover:text-primary
                  ">
                    {stat.descripcion}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};