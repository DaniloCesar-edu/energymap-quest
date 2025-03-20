
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="glass-panel p-8 max-w-md text-center animate-scale-in">
        <div className="glass-icon mx-auto mb-6">
          <Map className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Território não encontrado</p>
        <p className="text-sm text-muted-foreground mb-8">
          O caminho {location.pathname} não existe no nosso mapeamento.
        </p>
        <Button asChild className="w-full">
          <a href="/">Voltar ao Mapa</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
