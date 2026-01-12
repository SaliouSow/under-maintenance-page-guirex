import { Settings } from "lucide-react";
import maintenanceIllustration from "@/assets/maintenance-illustration.png";

const MaintenanceContent = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Illustration avec animation */}
          <div className="relative mb-8 animate-fade-in">
            <img
              src={maintenanceIllustration}
              alt="Maintenance en cours"
              className="w-full max-w-md md:max-w-lg animate-float"
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
            Site en maintenance
          </h1>

          {/* Sous-titre */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Nous travaillons actuellement sur notre site pour vous offrir une meilleure expérience. 
            Merci de votre patience !
          </p>

          {/* Indicateur de progression */}
          <div 
            className="flex items-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-sm text-muted-foreground">Mise à jour en cours</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot"></span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot-delay-1"></span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot-delay-2"></span>
            </div>
          </div>

          {/* Message de contact */}
          <div 
            className="mt-12 p-6 bg-secondary/50 rounded-xl border border-border animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-foreground/80">
              <span className="font-semibold text-primary">Besoin d'assistance ?</span>
              <br />
              <span className="text-sm text-muted-foreground">
                N'hésitez pas à nous contacter pendant cette période de maintenance.
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MaintenanceContent;
