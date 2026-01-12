import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import guirexLogo from "@/assets/guirex-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Partenaires", href: "#partners" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo et nom */}
          <div className="flex items-center gap-3">
            <img
              src={guirexLogo}
              alt="GUIREX Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold text-primary">
              GUIREX
            </span>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:guirex@guirex.com">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                Contactez-nous
              </Button>
            </a>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="mailto:guirex@guirex.com">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2">
                  Contactez-nous
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
