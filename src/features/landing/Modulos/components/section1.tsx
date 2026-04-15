'use client';

import { motion } from 'framer-motion';
import { Layers, TrendingUp, Brain, Users } from 'lucide-react';

const modulo: necesidades[] = [
  {
    id: 1,
    title: 'Finanzas y Operaciones',
    description: 'Control total de contabilidad, bancos, compras y reportes financieros en tiempo real.',
    icon: <Layers size={30} strokeWidth={2} />,
  },
  {
    id: 2,
    title: 'Personas y Colaboración',
    description: 'Gestión de equipos, nómina, permisos y comunicación interna centralizada.',
    icon: <TrendingUp size={30} strokeWidth={2} />,
  },
  {
    id: 3,
    title: 'Procesos y Productividad',
    description: 'Automatización de flujos de trabajo, tareas y aprobaciones sin complicaciones.',
    icon: <Brain size={30} strokeWidth={2} />,
  },
  {
    id: 4,
    title: 'Logística y Clientes',
    description: 'Inventario, pedidos, entregas y seguimiento de clientes en un solo lugar.',
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

export const ModNeeds = () => {
  return (
    <section className="w-full py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-chakra text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-12 md:mb-16 leading-tight max-w-4xl mx-auto"
        >
          Todo lo que necesitas, en un solo lugar
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {modulo.map((modulo) => (
            <motion.div
              key={modulo.id}
              opacity={1}
              variants={itemVariants}
              className="group bg-gray-50/50 rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl hover:shadow-gray-800/10 hover:bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-row items-start gap-5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 flex items-center justify-center bg-blue-500/10 p-3 rounded-2xl text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                {modulo.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-gray-800 font-bold text-2xl mb-2">
                  {modulo.title}
                </p>
                <p className="text-gray-600 text-md font-medium leading-relaxed">
                  {modulo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      
      </div>
    </section>
  );
};