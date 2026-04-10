'use client';

import { motion } from 'framer-motion';
import { Layers, TrendingUp, Brain, Users } from 'lucide-react';
import { ModuloCardProps } from '../types';

const problemas: ModuloCardProps[] = [
  {
    id: 1,
    title: 'Modular',
    description: 'Paga y usa solo lo que necesitas',
    icon: <Layers size={30} strokeWidth={2} />,
  },
  {
    id: 2,
    title: 'Escalable',
    description: 'Crece contigo sin cambiar de sistema',
    icon: <TrendingUp size={30} strokeWidth={2} />,
  },
  {
    id: 3,
    title: 'Inteligente',
    description: 'IA integrada para mejores decisiones',
    icon: <Brain size={30} strokeWidth={2} />,
  },
  {
    id: 4,
    title: 'Implementación guiada',
    description: 'Acompañamiento cercano',
    icon: <Users size={30} strokeWidth={2} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ProblemasSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50/50">
      
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-chakra text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-12 md:mb-16 leading-tight max-w-4xl mx-auto"
        >
          No es otro ERP complicado
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {problemas.map((problema) => (
            <motion.div
              key={problema.id}
              opacity={1}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl hover:shadow-gray-800/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-start transition-all duration-300 cursor-pointer"
            >
              <div className="bg-blue-500/10 p-3 rounded-2xl text-blue-600 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                {problema.icon}
              </div>
              <p className="text-gray-800 font-bold text-lg mb-2">
                {problema.title}
              </p>
              <p className="text-gray-600 text-md font-medium leading-relaxed">
                {problema.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full mt-12 md:mt-14 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-blue-50/80 border border-blue-100 rounded-2xl px-6 py-5 md:px-10 md:py-9"
          >
            <p className="text-blue-600 text-base  lg:text-lg">
              <span className="font-bold mr-2">
                Fase piloto:
              </span>
              <span className="font-medium text-gray-600 transition-colors duration-300">
                Acceso anticipado con atención personalizada y evolución constante del producto
              </span>
            </p>
          </motion.div>
        </motion.div>
      
      </div>
    </section>
  );
};