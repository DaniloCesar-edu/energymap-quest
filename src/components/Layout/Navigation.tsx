
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Info, 
  Database, 
  UploadCloud, 
  BookOpen, 
  Map as MapIcon,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  isMenuOpen: boolean;
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  isMenuOpen,
  activeTab,
  onChangeTab
}) => {
  const navItems = [
    { id: 'map', label: 'Mapa', icon: MapIcon },
    { id: 'metrics', label: 'Métricas', icon: Info },
    { id: 'data', label: 'Enviar Dados', icon: UploadCloud },
    { id: 'guide', label: 'Guia', icon: BookOpen },
  ];

  return (
    <nav 
      className={cn(
        "fixed left-0 top-16 bottom-0 z-30 w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="h-full flex flex-col p-4">
        <div className="space-y-1 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onChangeTab(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                  activeTab === item.id 
                    ? "bg-primary text-primary-foreground shadow-subtle" 
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="mt-auto pt-4 border-t border-border">
          <div className="glass-panel p-4 dark:bg-black/20">
            <h3 className="text-sm font-semibold mb-2">Sobre o EnergyMap</h3>
            <p className="text-xs text-muted-foreground">Uma ferramenta para classificação energética dos territórios do Nordeste brasileiro.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
