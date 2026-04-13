'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ModuloCardProps } from '../types';
import Image from 'next/image';

// Datos (se mantienen iguales)
const modulos: ModuloCardProps[] = [
  {
    id: 1,
    title: 'Finanzas, compras, bancos y contabilidad integrados',
    description: '',
    icon: <Check size={20} strokeWidth={3}/>,
  },
  {
    id: 2,
    title: 'Automatización de procesos clave',
    description: '',
    icon: <Check size={20} strokeWidth={3}/>,
  },
  {
    id: 3,
    title: 'Visibilidad total en tiempo real',
    description: '',
    icon: <Check size={20} strokeWidth={3}/>,
  },
  {
    id: 4,
    title: 'Inteligencia artificial que aprende de tu operación',
    description: '',
    icon: <Check size={20} strokeWidth={3}/>,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ModulosGrid = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-chakra text-2xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-10 md:mb-12 leading-tight max-w-4xl mx-auto"
        >
          Una sola plataforma para controlar toda tu empresa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "5px" }}
          transition={{ duration: 0.8 }}
          className="font-chakra text-md md:text-xl lg:text-1xl text-center text-gray-600 mb-12 md:mb-16 leading-tight max-w-2xl mx-auto"
        >
          Savvium es un ERP inteligente que integra y automatiza todas las áreas de tu negocio desde un solo lugar.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-8 md:gap-10" 
        >
          {modulos.map((modulo) => (
            <motion.div
              key={modulo.id}
              variants={itemVariants}
              className="flex items-start gap-5 md:gap-6 group"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center mt-1">
                {modulo.icon}
              </div>
              <div>
                <h3 className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {modulo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-full min-h-[350px] lg:min-h-[350px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200"
          >
            <Image
              src="/images/product.jpg" 
              alt="Módulos de Savvium"
              fill
              className="object-cover object-left-top"
            />
          </motion.div>
          </div>

      </div>
    </section>
  );
};