'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Clock, Eye, Repeat, CircleAlert } from 'lucide-react';
import { ProblemaCardProps } from '../types';

const problemas: ProblemaCardProps[] = [
  {
    id: 1,
    title: 'Información financiera dispersa o desactualizada',
    icon: <TrendingDown size={40} strokeWidth={2} />,
  },
  {
    id: 2,
    title: 'Procesos manuales que consumen tiempo',
    icon: <Clock size={40} strokeWidth={2} />,
  },
  {
    id: 3,
    title: 'Falta de visibilidad entre áreas',
    icon: <Eye size={40} strokeWidth={2} />,
  },
  {
    id: 4,
    title: 'Decisiones basadas en superposiciones',
    icon: <CircleAlert size={40} strokeWidth={2} />,
  },
  {
    id: 5,
    title: 'Dificultad para escalar operaciones',
    icon: <Repeat size={40} strokeWidth={2} />,
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
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
          Si tu empresa está creciendo, probablemente ya enfrentaste esto:
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problemas.map((problema) => (
            <motion.div
              key={problema.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl hover:shadow-gray-500/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-start transition-colors duration-300 cursor-pointer"
            >
              <div className="text-blue-600 mb-6">
                {problema.icon}
              </div>
              <p className="text-gray-700 text-lg font-medium leading-relaxed transition-colors duration-300">
                {problema.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};