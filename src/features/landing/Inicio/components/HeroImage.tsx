'use client'; 

import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroImageSection = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center pt-20 pb-12 px-4">
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, ease: 'easeOut' }}
        className="w-full max-w-6xl"
      >
        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200">
          <Image
            src="/images/dashboardPreview.jpg"
            alt="Vista previa del sistema Savvium"
            width={1200}
            height={700}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
};