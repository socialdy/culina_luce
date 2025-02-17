import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "LINUX powder pistacchio olive",
    image: "/images/linux_pistacchio_olive.jpg",
  },
  {
    id: 2,
    name: "THIN",
    image: "/images/thin.jpg",
  },
  {
    id: 3,
    name: "TREND B mammut eiche",
    image: "/images/trend_b_mammut_eiche.jpg",
  },
  {
    id: 4,
    name: "TREND B charcoal",
    image: "/images/trend_b_charcoal.jpg",
  },
  {
    id: 5,
    name: "TREND B nordeiche",
    image: "/images/trend_b_nordeiche.jpg",
  },
  {
    id: 6,
    name: "TREND B vintage oak",
    image: "/images/trend_b_vintage_oak.jpg",
  },
  {
    id: 7,
    name: "TREND stahlgrau",
    image: "/images/trend_stahlgrau.jpg",
  },
  {
    id: 8,
    name: "VAL S zementschwarz grande",
    image: "/images/val_s_zementschwarz_grande.jpg",
  },
  {
    id: 9,
    name: "IDEAL XT platingrau",
    image: "/images/ideal_xt_platingrau.jpg",
  },
  {
    id: 10,
    name: "IDEAL XT / METALL potoro / champagner gold",
    image: "/images/ideal_xt_metal_potoro_champagner_gold.jpg",
  },
  {
    id: 11,
    name: "TREND / METALL umbra",
    image: "/images/trend_metal_umbra.jpg",
  },
  {
    id: 12,
    name: "METALL kupfer",
    image: "/images/metal_kupfer.jpg",
  },
  {
    id: 13,
    name: "METALL kupfer",
    image: "/images/metal_kupfer_2.jpg",
  },
  {
    id: 14,
    name: "COLORLINE AP ultimate grey",
    image: "/images/colorline_ap_ultimate_grey.jpg",
  },
  {
    id: 15,
    name: "COLORLINE AP weiß + oceanblau",
    image: "/images/colorline_ap_weiss_oceanblau.jpg",
  },
  {
    id: 16,
    name: "COLORLINE L weiß + curry",
    image: "/images/colorline_l_weiss_curry.jpg",
  },
  {
    id: 17,
    name: "COLORLINE L midnight blue",
    image: "/images/colorline_l_midnight_blue.jpg",
  },
  {
    id: 18,
    name: "COLORLINE MC pacific lemon",
    image: "/images/colorline_mc_pacific_lemon.jpg",
  },
  {
    id: 19,
    name: "COLORLINE AP (S)",
    image: "/images/colorline_ap_s.jpg",
  },
  {
    id: 20,
    name: "COLORLINE hgl rund",
    image: "/images/colorline_hgl_rund.jpg",
  },
  {
    id: 21,
    name: "COLORLINE BG cream / eiche provence",
    image: "/images/colorline_bg_cream_eiche_provence.jpg",
  },
  {
    id: 22,
    name: "MIRO SWOOP",
    image: "/images/miro_swoop.jpg",
  },
  {
    id: 23,
    name: "FINESS W nussbaum vinterio",
    image: "/images/finess_w_nussbaum_vinterio.jpg",
  },
  {
    id: 24,
    name: "BUTLERSPANTRY L",
    image: "/images/butlerspantry_l.jpg",
  },
  {
    id: 25,
    name: "VENTO pastell sand astig kaschmir",
    image: "/images/vento_pastell_sand_astig_kaschmir.jpg",
  },
  {
    id: 26,
    name: "WINDSOR kaschmir",
    image: "/images/windsor_kaschmir.jpg",
  },
  {
    id: 27,
    name: "WINDSOR beachwood astig",
    image: "/images/windsor_beachwood_astig.jpg",
  },
  {
    id: 28,
    name: "CERAMIC PUR iron grey",
    image: "/images/ceramic_pur_iron_grey.jpg",
  },
  {
    id: 29,
    name: "STONE PUR",
    image: "/images/stone_pur.jpg",
  },
  {
    id: 30,
    name: "SIGNUM LG",
    image: "/images/signum_lg.jpg",
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
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="text-2xl text-white  md:text-2xl mb-2">{product.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-[#ef7d00]  p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-[#ef7d00] p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};