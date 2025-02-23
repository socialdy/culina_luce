import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Hochwertige Glasrückwände und LED-Lichtfelder für individuelle Designs.",
    "Maßgeschneiderte Lösungen für private und gewerbliche Kunden.",
    "Über 15 Jahre Erfahrung in der Fertigung von Glas- und Lichtlösungen.",
    "Handgefertigte Unikate mit modernster LED-Technologie.",
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/szMgrPDblMw"
              title="CULINA LUCE - Hochwertige Glasrückwände & LED-Lichtfelder"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-white mb-12">Warum CULINA LUCE?</h2>
            <p className="text-white mb-8">
              CULINA LUCE steht für modernes Design, individuelle Lösungen und
              höchste Qualität. Unsere Glasrückwände und LED-Lichtfelder
              bringen Licht in Ihr Leben und setzen stilvolle Akzente.
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
