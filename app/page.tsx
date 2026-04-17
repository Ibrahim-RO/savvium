import Hero from "@/features/landing/Inicio/Hero";
import Inicio from "@/features/landing/Inicio/Inicio";
import Producto from "@/features/landing/Producto/Producto";
import Modulos from "@/features/landing/Modulos/Modulos";
import Precios from "@/features/landing/Precios/Precios";

export default function Home() {
  return (
    <>
      <Inicio />
      <Producto />
      <Modulos />
      <Precios />
    </>
  );
}
