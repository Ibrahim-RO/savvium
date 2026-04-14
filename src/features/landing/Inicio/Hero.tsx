"use client"

import { motion } from "framer-motion"
import Form from "../../contact/components/Form"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-dvh flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16 py-30 lg:py-0">

      <motion.div
        className="space-y-4 sm:space-y-5 text-center lg:text-left order-1"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-blue-600 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Deja de tomar decisiones a ciegas en tu empresa
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Savvium conecta todas tus áreas en un solo sistema para que tengas control total y tomes decisiones con datos reales.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full order-2 lg:flex lg:items-start lg:pt-20"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="w-full border border-gray-200 rounded-lg p-5 sm:p-8 shadow space-y-5"
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p className="font-bold text-xl sm:text-2xl">
            Agenda tu demo personalizada
          </p>
          <Form />
        </motion.div>
      </motion.div>

    </div>
  )
}