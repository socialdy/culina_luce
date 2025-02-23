export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-black" id="ueber-culina-luce">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/culina_luce_logo.svg" 
            alt="Culina Luce Logo" 
            className="h-24 w-auto"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-white text-lg leading-relaxed mb-6">
            Culina Luce ist eine Marke, die sich auf hochwertige Glasrückwände und LED-Lichtfelder spezialisiert hat. Seit über 15 Jahren fertigen wir maßgeschneiderte Lösungen für private und gewerbliche Kunden. Unser Sortiment umfasst Küchenrückwände, Wand- und Badfelder sowie individuell beleuchtete oder unbeleuchtete Küchenarbeitsplatten.
          </p>
        </div>
      </div>
    </section>
  );
};
