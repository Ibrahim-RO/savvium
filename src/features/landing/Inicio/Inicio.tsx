import { ProblemasSection } from "./components/problems"
import { HeroImageSection } from "./components/HeroImage"
import Hero from "./Hero"

export default function Inicio() {
  return (
    <div id="inicio">
      <Hero />
      <HeroImageSection />
      <ProblemasSection />
    </div>
  )
}