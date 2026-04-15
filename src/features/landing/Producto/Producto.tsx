import { ModulosGrid } from "./components/moduloGrid"
import { ProblemasSection } from "./components/moduloComponents"

export default function Producto() {
  return (
    <div id="product" className="scroll-m-10">
      <ModulosGrid />
      <ProblemasSection />
    </div>
  );
}