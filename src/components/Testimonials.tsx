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
      quote: "Ich habe die TREND B nordeiche Küche für ein Projekt in einem modernen Neubau verwendet. Die Holzstruktur und das dezente Design passen perfekt zu unserem minimalistischen Ansatz. Die Küche sieht nicht nur hochwertig aus, sondern fühlt sich auch so an. Absolut empfehlenswert!",
    },
    {
      id: 2,
      name: "Paul Müller",
      role: "Privatkunde",
      quote: "TREND B charcoal war die perfekte Wahl für unsere Neubau-Küche. Der matte Charcoal-Look ist unglaublich elegant und pflegeleicht. Wir sind super zufrieden mit der Qualität und Funktionalität der Möbel – unsere Küche sieht jeden Tag wie neu aus!",
    },
    {
      id: 3,
      name: "Anna Roth",
      role: "Inneneinrichterin",
      quote: "Für eines meiner letzten Projekte entschied ich mich für die LINUX. Der sanfte Grünton bringt eine beruhigende Atmosphäre in die Küche. Die Verarbeitung ist top und auch nach einigen Monaten täglicher Nutzung zeigt die Oberfläche keine Abnutzungserscheinungen.",
    },
    {
      id: 4,
      name: "Lukas Bauer",
      role: "Küchenliebhaber",
      quote: "Ich bin total begeistert von meiner neuen WINDSOR Küche. Die Kombination aus Holz und dem modernen, offenen Design gibt der Küche eine warme und einladende Atmosphäre. Absolut wertig verarbeitet, und das Kochen macht noch mehr Spaß.",
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
                <div className="bg-white/10 p-8 h-full animate-fade-in">
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
