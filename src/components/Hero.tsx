import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Left Image */}
      <div className="w-1/2 h-full">
        <img
          src="/images/hero_bg.jpg"
          alt="Culina Luce LED-Lichtfelder und Glasrückwände"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="w-1/2 h-full flex flex-col justify-center px-8 text-white">
        <div className="max-w-7xl animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold">
            Culina Luce – LED-Lichtfelder und Glaswände für Ihre Traumküche
          </h1>
          <p className="text-lg">
            Im <strong>Küchenstudio Bergheim</strong> präsentieren wir Ihnen in Zusammenarbeit mit **Culina Luce** innovative LED-Lichtfelder und maßgeschneiderte Glasrückwände. Diese einzigartigen Produkte sorgen für eine stimmungsvolle Atmosphäre in Ihrer Küche und bringen modernes Design und Technik perfekt zusammen.
          </p>
          <a href="/#beratung">
            <Button className="bg-[#ef7d00] hover:bg-[#ef7d00] text-black px-6 py-6 mt-9 rounded-full">
              Jetzt Beratungstermin sichern!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
