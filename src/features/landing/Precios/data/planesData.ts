import { PreciosData } from '../types/planes.types';

export const preciosData: PreciosData = {
  titulo: "Planes que se adaptan a tu crecimiento",
  subtitulo: "Elige el plan perfecto para tu empresa. Todos incluyen actualizaciones automáticas y acceso a nuevas funcionalidades.",
  planes: [
    {
      id: "1",
      nombre: "Inicial",
      descripcion: "Perfecto para comenzar a organizar tu operación",
      precio: "$2,499",
      precioDetalle: "/mes",
      destacado: false,
      caracteristicas: [
        { id: "1", texto: "Hasta 5 usuarios", incluido: true },
        { id: "2", texto: "Módulo de Finanzas básico", incluido: true },
        { id: "3", texto: "Reportes estándar", incluido: true },
        { id: "4", texto: "Soporte por email", incluido: true },
        { id: "5", texto: "1 GB de almacenamiento", incluido: true }
      ]
    },
    {
      id: "2",
      nombre: "Crecimiento",
      descripcion: "Ideal para empresas en expansión",
      precio: "$4,999",
      precioDetalle: "/mes",
      destacado: true,
      caracteristicas: [
        { id: "1", texto: "Hasta 20 usuarios", incluido: true },
        { id: "2", texto: "Todos los módulos incluidos", incluido: true },
        { id: "3", texto: "Reportes avanzados + IA", incluido: true },
        { id: "4", texto: "Soporte prioritario 24/7", incluido: true },
        { id: "5", texto: "10 GB de almacenamiento", incluido: true },
        { id: "6", texto: "Automatizaciones ilimitadas", incluido: true },
        { id: "7", texto: "Integraciones con apps", incluido: true }
      ]
    },
    {
      id: "3",
      nombre: "Enterprise",
      descripcion: "Para grandes organizaciones con necesidades específicas",
      precio: "Personalizado",
      precioDetalle: "",
      destacado: false,
      caracteristicas: [
        { id: "1", texto: "Usuarios ilimitados", incluido: true },
        { id: "2", texto: "Módulos personalizados", incluido: true },
        { id: "3", texto: "IA avanzada y predicciones", incluido: true },
        { id: "4", texto: "Soporte dedicado + consultor", incluido: true },
        { id: "5", texto: "Almacenamiento ilimitado", incluido: true },
        { id: "6", texto: "API completa", incluido: true },
        { id: "7", texto: "Implementación asistida", incluido: true },
        { id: "8", texto: "Capacitación in-house", incluido: true }

      ]
    }
  ]
};