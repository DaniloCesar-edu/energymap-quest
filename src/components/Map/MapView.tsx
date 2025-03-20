
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from 'lucide-react';
import mockTerritories, { Territory } from '@/data/mockTerritories';
import TerritoryDetails from './TerritoryDetails';
import { cn } from '@/lib/utils';
import { classifyTerritory, getEnergyNeedColor } from '@/utils/energyClassification';

const MapView: React.FC = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(5);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Simulação do carregamento do mapa
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Simular zoom
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 1, 10));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden border border-border">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col items-center">
            <Loader className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-sm text-muted-foreground">Carregando mapa...</p>
          </div>
        </div>
      ) : (
        <>
          <div 
            ref={mapContainerRef} 
            className="h-full w-full relative bg-[#e8f4fa] overflow-hidden"
            style={{ 
              backgroundImage: "url('https://uploads-ssl.webflow.com/5e8c373de83ca612f838e59f/5eb18ceeff822637f5e8666f_brazil_detail.png')",
              backgroundSize: `${900 + zoomLevel * 100}px`,
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              height: '100%'
            }}
          >
            {/* Marcadores de território */}
            <div className="absolute inset-0">
              {mockTerritories.map(territory => {
                const classification = classifyTerritory(territory);
                const needColor = getEnergyNeedColor(classification.needLevel);
                const size = zoomLevel * 4;
                
                // Posições relativas no mapa simulado
                // Em um app real, essas coordenadas seriam convertidas de geo para posições na tela
                const relativeLeft = `${35 + (territory.coordinates[0] + 50) * 0.8}%`;
                const relativeTop = `${25 + (territory.coordinates[1] + 15) * 3}%`;
                
                return (
                  <div 
                    key={territory.id}
                    className={cn(
                      "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                      "transition-all duration-300 ease-out animate-pulse"
                    )}
                    style={{ 
                      left: relativeLeft, 
                      top: relativeTop,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                    onClick={() => setSelectedTerritory(territory)}
                  >
                    <div 
                      className={cn(
                        "rounded-full border-2 border-white shadow-lg",
                        needColor
                      )}
                      style={{ 
                        width: `${size}px`, 
                        height: `${size}px`,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    {zoomLevel > 7 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap">
                        <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-white/80 shadow-sm">
                          {territory.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Controles do mapa */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <button 
                onClick={handleZoomIn}
                className="w-8 h-8 bg-white/90 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-lg font-bold">+</span>
              </button>
              <button 
                onClick={handleZoomOut}
                className="w-8 h-8 bg-white/90 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
              >
                <span className="text-lg font-bold">-</span>
              </button>
            </div>
            
            {/* Legenda */}
            <div className="absolute bottom-4 left-4 bg-white/90 shadow-md rounded-lg p-3">
              <h3 className="text-xs font-semibold mb-2">Necessidade Energética</h3>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-energy-need-low"></div>
                <span>Baixa</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-energy-need-medium"></div>
                <span>Média</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-energy-need-high"></div>
                <span>Alta</span>
              </div>
            </div>
          </div>
          
          {/* Barra de informações */}
          <div className="absolute left-4 right-4 top-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
            <p className="text-sm text-center">
              Mapa energético do Nordeste brasileiro. Clique em um ponto para ver detalhes.
            </p>
          </div>
          
          {/* Painel de detalhes do território */}
          {selectedTerritory && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-full">
              <TerritoryDetails 
                territory={selectedTerritory} 
                onClose={() => setSelectedTerritory(null)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MapView;
