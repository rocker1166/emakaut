import Hero from "@/components/component/hero";
import { Boxes } from "../components/ui/background-boxes"
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <>
   
    <main>
    <div className="  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
     
      <div className="epointer-events-none  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Hero />
    </div>
    
    </main>
    </>
  );
}
