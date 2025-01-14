import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#485959] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
          <a href="https://premium-brand-store.com" className="">
            <img
              src="/images/ME-Logo-white_v2.png" // Ersetze dies durch den tatsächlichen Pfad zu deinem Logo
              alt="Foster Kitchens Logo"
              className="h-16 mb-3" // Passe die Größe des Logos an
            />
          </a>
            <p className="text-gray-300">
            Hochwertige Einbauküchen von Beeck, innovative Küchengeräte von Miele sowie exklusive Arbeitsplatten und stilvolle Ausstattung – alles für Ihre Traumküche.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Quicklinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://premium-brand-store.com/kuechen" className="text-gray-300 hover:text-white transition-colors">
                  Küchen
                </a>
              </li>
              <li>
                <a href="https://premium-brand-store.com/abverkauf" className="text-gray-300 hover:text-white transition-colors">
                  Abverkauf
                </a>
              </li>
              <li>
                <a href="https://premium-brand-store.com/ausstattung" className="text-gray-300 hover:text-white transition-colors">
                  Ausstattung
                </a>
              </li>
              <li>
                <a href="https://premium-brand-store.com/bad" className="text-gray-300 hover:text-white transition-colors">
                  Bad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Lamprechtshausener Bundesstraße 1</li>
              <li>5101 Bergheim</li>
              <li><a href="tel:+43 662 452535" className="text-gray-300 hover:text-white transition-colors">+43 662 452535</a></li>
              <li>
                <a href="mailto:me@kuechenstudio-salzburg.com" className="text-gray-300 hover:text-white transition-colors">
                  me@kuechenstudio-salzburg.com
                </a>
              </li>
              <li>
                <a href="premium-brand-store.com" className="text-gray-300 hover:text-white transition-colors">
                  Website
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Öffnungszeiten</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Mo – Fr: 10:00 – 17:00 Uhr</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-300">
          <ul className="space-y-3">
            <li>
              <a href="https://premium-brand-store.com/impressum" className="text-gray-300 hover:text-white transition-colors">
                Impressum
              </a>
            </li>
            <li>
              <a href="https://premium-brand-store.com/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://premium-brand-store.com/agb" className="text-gray-300 hover:text-white transition-colors">
                AGB
              </a>
            </li>
          </ul>
          <p className="mt-6">© 2025 Küchenstudio Bergheim. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-2">Developed by <a className="font-semibold" href="https://socialdynamics.agency">Social Dynamics</a></p>
        </div>
      </div>
    </footer>
  );
};
