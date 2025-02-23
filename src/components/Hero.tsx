import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center flex-col lg:flex-row">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 h-full">
        <img
          src="/images/hero.jpg"
          alt="Culina Luce LED-Lichtfelder und Glasrückwände"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 bg-black text-white">
        <div className="max-w-7xl animate-fade-in">
          <h1 className="pt-4">
            LED-Lichtfelder & Glaswände für Ihre Küche
          </h1>
          <p className="text-base mt-3">
            Erleben Sie bei uns im Küchenstudio Bergheim die einzigartigen LED-Lichtfelder und Glasrückwände von Culina Luce. Diese modernen und maßgeschneiderten Produkte bieten nicht nur Funktionalität, sondern schaffen auch eine besondere Atmosphäre, die Ihr Zuhause bereichert.
          </p>
          <a href="/#beratung">
          <Button className="bg-[#333] hover:bg-[#f9b000] text-[#f9b000] hover:text-white uppercase font-light mt-4 px-6 py-3 text-[1.1rem] sm:px-4 sm:py-4 sm:text-[1.2rem] md:px-10 md:py-6 md:text-[1.3rem] lg:px-12 lg:py-8 lg:text-[1.4rem]">
Beratungstermin sichern!
</Button>


          </a>
        </div>
      </div>
    </section>
  );
};
