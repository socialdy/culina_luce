import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "LED-LICHTFELDER",
    image: "/images/led-lichtfelder.jpg",
    description: "Moderne LED-Lichtfelder für Küche, Bad und Wohnbereich.",

  },
  {
    id: 2,
    name: "RGB-LICHTFELDER",
    image: "/images/rgb_lichtfelder.jpg",
    description: "Farbwechselfunktion mit RGB-Lichtfeldern für jede Stimmung.",

  },
  {
    id: 3,
    name: "KÜCHENARBEITSPLATTEN AUS GLAS",
    image: "/images/kuechenarbeitsplatten_aus_glas.jpg",
    description: "Elegante und praktische Küchenarbeitsplatten aus Glas in verschiedenen Farben.",

  },
  {
    id: 4,
    name: "KÜCHENRÜCKWÄNDE AUS GLAS",
    image: "/images/kuechen_rueck_waende.jpg",
    description: "Glasrückwände für Küchen, pflegeleicht und modern.",

  },
];






export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-black" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center mb-12">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-black shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center border-2 border-white border-t-0">

                      <h3 className="text-white  mb-1">{product.name}</h3>
                      <p className="text-base mt-3 text-white">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#f9b000]  p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#f9b000] p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};