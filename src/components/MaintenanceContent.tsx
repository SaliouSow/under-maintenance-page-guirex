import { Settings, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import maintenanceIllustration from "@/assets/maintenance-illustration.png";

const MaintenanceContent = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Illustration */}
          <div className="relative mb-8 animate-fade-in">
            <img
              src={maintenanceIllustration}
              alt="Maintenance en cours"
              className="w-full max-w-md md:max-w-lg"
            />
            
            {/* Engrenages décoratifs animés */}
            <div className="absolute -top-4 -right-4 md:right-8 text-primary/30">
              <Settings size={32} className="animate-spin-slow" />
            </div>
            <div className="absolute top-8 -left-2 md:left-4 text-accent/40">
              <Settings size={24} className="animate-spin-slow-reverse" />
            </div>
          </div>

          {/* Titre principal */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {t.maintenance.title}
          </h1>

          {/* Sous-titre */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t.maintenance.subtitle}
          </p>

          {/* Boutons de contact */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="tel:+22461011121314">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 flex items-center gap-2">
                <Phone size={20} />
                +224 610 111 213 14
              </Button>
            </a>
            <a href="mailto:guirex@guirex.com">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 flex items-center gap-2">
                <Mail size={20} />
                guirex@guirex.com
              </Button>
            </a>
          </div>

          {/* Message de contact */}
          <div 
            className="mt-12 p-6 bg-secondary/50 rounded-xl border border-border animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-foreground/80">
              <span className="font-semibold text-primary">{t.maintenance.needHelp}</span>
              <br />
              <span className="text-sm text-muted-foreground">
                {t.maintenance.helpText}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MaintenanceContent;
