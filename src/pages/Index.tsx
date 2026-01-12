import Navbar from "@/components/Navbar";
import MaintenanceContent from "@/components/MaintenanceContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar avec logo et navigation */}
      <Navbar />
      
      {/* Contenu principal de la page de maintenance */}
      <MaintenanceContent />
      
      {/* Footer simple */}
      <footer className="py-6 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GUIREX — Votre tranquillité en un choix
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
