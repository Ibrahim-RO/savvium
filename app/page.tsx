import Hero from "@/features/landing/Inicio/Hero";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import Inicio from "@/features/landing/Inicio/Inicio";
import Producto from "@/features/landing/Producto/Producto";
import Modulos from "@/features/landing/Modulos/Modulos";
import Precios from "@/features/landing/Precios/Precios";

export default function Home() {
  return (
    <>
      <Hero />
      <Inicio />
      <Producto />
      <Modulos />
      <Precios />
    </>
  );
}
