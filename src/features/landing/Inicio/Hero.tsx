"use client"

import Form from "../../contact/components/Form"

export default function Hero() {
  return (
    <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 px-16">
        <div className="space-y-5">
            <h1 className="text-blue-600 font-bold text-6xl">Deja de tomar decisiones a ciegas en tu empresa</h1>
            <p className="text-2xl text-gray-700">Savvium conecta todas tus áreas en un solo sistema para que tengas control total y tomes decisiones con datos reales.</p>
        </div>

        <div>
            <Form />
        </div>
    </div>
  )
}
