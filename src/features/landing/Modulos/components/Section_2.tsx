import React from "react";
import { modulosData } from "../data/Section_2";
import { FaCheckCircle } from "react-icons/fa";
import { FiActivity, FiTrendingUp } from "react-icons/fi";

export const Section_2: React.FC = () => {
  const { titulo, lista, estadisticas } = modulosData;

  return (
    <section className="py-16 px-5 md:px-10 md:py-16 lg:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-accent text-4xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
          {titulo}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Lista */}
          <div>
            <ul className="space-y-3 md:space-y-4">
              {lista.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 border border-gray-300 border-opacity-50 rounded-lg p-5 md:px-5 md:py-5 bg-white shadow-sm"
                >
                  <FaCheckCircle className="text-accent text-xl md:text-2xl flex-shrink-0" />
                  <span className="text-primary text-base md:text-lg">
                    {item.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha - Estadísticas */}
          <div className="space-y-6 md:space-y-8">
            {estadisticas.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center gap-8 justify-center md:justify-start border border-gray-300 border-opacity-50 rounded-xl p-5 md:px-12 md:py-8 bg-white shadow-sm"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-md flex items-center justify-center bg-blue-100">
                  {stat.esPositivo ? (
                    <FiTrendingUp className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  ) : (
                    <FiActivity className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  )}
                </div>

                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                    {stat.porcentaje}
                  </div>
                  <div className="text-secondary text-base md:text-lg">
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
