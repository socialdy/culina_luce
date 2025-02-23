import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Eva Sommer",
      role: "Architektin",
      quote: "Die LED-Lichtfelder sorgen für eine moderne, gleichmäßige Ausleuchtung. Kein Flackern, kein sichtbarer Lichtpunkt – einfach perfekt für unsere Designs.",
    },
    {
      id: 2,
      name: "Paul Müller",
      role: "Privatkunde",
      quote: "Die RGB-Lichtfelder sind der Wahnsinn! Ich liebe es, die Farben je nach Stimmung anzupassen. Unsere Küche wirkt jetzt viel lebendiger.",
    },
    {
      id: 3,
      name: "Anna Roth",
      role: "Inneneinrichterin",
      quote: "Die Glasarbeitsplatten sind super pflegeleicht und sehen richtig edel aus. Perfekt für Kunden, die Wert auf Design und Funktion legen.",
    },
    {
      id: 4,
      name: "Lukas Bauer",
      role: "Küchenliebhaber",
      quote: "Unsere Glasrückwand ist nicht nur ein Hingucker, sondern auch total praktisch. Keine Fugen, einfach abwischen – nie wieder Fliesenspritzer!",
    },
  ];

  return (
    <section className="py-20 bg-black text-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-white text-center mb-12 ">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-[#333] p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/80 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/80 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
