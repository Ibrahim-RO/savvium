import { Section_2 } from "./components/Section_2";
import { ModNeeds } from "./components/section1";
import { Section_3 } from "./components/Section_3";

export default function Modulos() { 
  return (
    <div id="modules" className="scroll-mt-16">
      <ModNeeds />
      <Section_2 />
      <Section_3 />
    </div>
  );
}
