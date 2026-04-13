"use client"

import { motion } from "framer-motion"
import Form from "../../contact/components/Form"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto min-h-dvh grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-blue-600 font-bold text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Deja de tomar decisiones a ciegas en tu empresa
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Savvium conecta todas tus áreas en un solo sistema para que tengas control total y tomes decisiones con datos reales.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full self-start pt-20 lg:pt-24"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="border border-gray-200 rounded-lg p-8 shadow space-y-5 mt-6"
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p className="font-bold text-2xl">
            Agenda tu demo personalizada
          </p>
          <Form />
        </motion.div>
      </motion.div>

    </div>
  )
}