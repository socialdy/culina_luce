import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-black backdrop-blur-sm border-black">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <a href="/" className="h-6 sm:h-8">
              <img
                src="/images/culina_luce_logo.svg"
                alt="Culina Luce Logo"
                className="h-full m-0 w-auto"
              />
            </a>
            <a href="https://kuechenstudio-bergheim.at" className="h-11 sm:h-14">
              <img
                src="/images/me_logo.png"
                alt="Küchenstudio Bergheim Logo"
                className="h-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-white">
            <a
              href="#produkte"
              className="hover:text-[#f9b000] transition-colors"
            >
              Produkte
            </a>
            <a
              href="#ueber-culina-luce"
              className="hover:text-[#f9b000] transition-colors"
            >
              Über Culina Luce
            </a>
            <a
              href="/#referenzen"
              className="hover:text-[#f9b000] transition-colors"
            >
              Referenzen
            </a>
            <a href="/#beratung">
              <Button className="bg-[#333] hover:bg-[#f9b000] text-[#f9b000] hover:text-white uppercase font-light mt-4 px-6 py-3 text-[1.1rem] sm:px-4 sm:py-4 sm:text-[1.2rem] md:px-10 md:py-6 md:text-[1.3rem] lg:px-12 lg:py-8 lg:text-[1.4rem]">
                Beratungstermin sichern!
              </Button>
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffffbf"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black text-white border-t border-white shadow-md mobile">
            <div className="flex flex-col items-start gap-4 py-4 pl-6">
              <a
                href="/#produkte"
                className="hover:text-[#f9b000] transition-colors"
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-culina-luce"
                className="hover:text-[#f9b000] transition-colors"
                onClick={toggleMobileMenu}
              >
                Über Culina Luce
              </a>
              <a
                href="/#referenzen"
                className="hover:text-[#f9b000] transition-colors"
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung">
                <Button className="bg-[#333] hover:bg-[#f9b000] text-[#f9b000] hover:text-white uppercase font-light px-6 py-3 text-[1.1rem] sm:px-4 sm:py-4 sm:text-[1.2rem] md:px-10 md:py-6 md:text-[1.3rem] lg:px-12 lg:py-8 lg:text-[1.4rem]">
                  Beratungstermin sichern!
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
