import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpg"
          alt="Beeck Küchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl animate-fade-in">
          <h1 className=" mb-6 max-w-screen-lg break-words">
          Individuelle Küchenlösungen von Beeck Küchen
          </h1>

<p>
          Im <strong>Küchenstudio Bergheim</strong> präsentieren wir Ihnen die hochwertigen Küchen von Beeck –{' '}
  <br />
  kreativ und funktional, perfekt zugeschnitten auf Ihren Lebensstil und Raum.
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
