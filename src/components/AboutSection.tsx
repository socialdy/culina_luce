import { Check } from "lucide-react"; 

export const AboutSection = () => {
  const benefits = [
    "Maßgeschneiderte Küchenlösungen, die perfekt auf die Bedürfnisse und den Lebensstil der Kunden abgestimmt sind.",
    "Verwendung hochwertiger, nachhaltiger Materialien für langlebige und umweltfreundliche Küchen.",
    "Familiengeführtes Unternehmen mit jahrzehntelanger Erfahrung und Expertise in der Küchenplanung und -produktion.",
    "Kombination aus funktionaler Exzellenz und ästhetischem Design für Küchen, die sowohl praktisch als auch ein echter Blickfang sind.",
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/_lp6k-x_Uxg"
              title="BEECK Küchen Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-white mb-12">Warum BEECK Küchen wählen?</h2>
            <p className="text-white mb-8">
              BEECK Küchen kombiniert jahrzehntelange Handwerkskunst mit innovativen Lösungen, um maßgeschneiderte Küchen zu kreieren, die sowohl funktional als auch ästhetisch ansprechend sind.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-white" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
