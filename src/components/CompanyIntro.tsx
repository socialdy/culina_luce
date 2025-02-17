export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-black" id="ueber-beeck-kuechen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/Beeck-Kuechen-Logo.png" 
            alt="Beeck Küchen Logo" 
            className="h-24 w-auto"
          />
        </div>

        <div className="mt-6 text-center">
        <p className="text-white text-lg leading-relaxed mb-6">
            BEECK Küchen GmbH ist ein familiengeführtes Unternehmen, das sich auf maßgeschneiderte Küchenlösungen spezialisiert hat. Seit vielen Jahrzehnten ist das Unternehmen erfolgreich im Markt tätig und steht für höchste Qualität in Handwerkskunst und Design. BEECK Küchen legt großen Wert auf die individuelle Beratung und Planung, sodass jede Küche perfekt auf die Bedürfnisse und den persönlichen Stil der Kunden abgestimmt wird.
          </p>
        </div>
      </div>
    </section>
  );
};
