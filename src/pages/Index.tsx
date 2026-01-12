import Navbar from "@/components/Navbar";
import MaintenanceContent from "@/components/MaintenanceContent";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-6 border-t border-border bg-card">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GUIREX — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {/* Navbar avec logo et navigation */}
        <Navbar />
        
        {/* Contenu principal de la page de maintenance */}
        <MaintenanceContent />
        
        {/* Footer simple */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
