
import React from 'react';
import { X, Sun, Wind, Droplets, AlertTriangle, Users, BarChart3, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Territory } from '@/data/mockTerritories';
import { 
  classifyTerritory, 
  getEnergyNeedColor, 
  getSolarPotentialColor,
  getWindPotentialColor,
  getHydroPotentialColor
} from '@/utils/energyClassification';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface TerritoryDetailsProps {
  territory: Territory | null;
  onClose: () => void;
}

const TerritoryDetails: React.FC<TerritoryDetailsProps> = ({ territory, onClose }) => {
  if (!territory) return null;
  
  const classification = classifyTerritory(territory);
  
  return (
    <div className="animate-slide-up glass-panel p-6 w-full max-w-md max-h-[85vh] overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{territory.name}</h2>
          <p className="text-sm text-muted-foreground">{territory.state} • Nordeste do Brasil</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="col-span-2 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
            <span className="text-sm font-medium">Necessidade Energética</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full", 
              getEnergyNeedColor(classification.needLevel)
            )}>
              {classification.needLevel.toUpperCase()}
            </span>
            <Progress 
              value={territory.metrics.energyNeed} 
              className="h-2 w-32"
              indicatorClassName={territory.metrics.energyNeed > 70 ? "bg-red-500" : 
                                 territory.metrics.energyNeed > 50 ? "bg-amber-500" : "bg-green-500"}
            />
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <Sun className="h-4 w-4 mr-2 text-amber-400" />
            <span className="text-sm font-medium">Potencial Solar</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full", 
              getSolarPotentialColor(classification.solarLevel)
            )}>
              {classification.solarLevel.toUpperCase()}
            </span>
            <Progress value={territory.metrics.solarPotential} className="h-2 w-16" />
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <Wind className="h-4 w-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium">Potencial Eólico</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full", 
              getWindPotentialColor(classification.windLevel)
            )}>
              {classification.windLevel.toUpperCase()}
            </span>
            <Progress value={territory.metrics.windPotential} className="h-2 w-16" />
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <Droplets className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium">Potencial Hídrico</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full", 
              getHydroPotentialColor(classification.hydroLevel)
            )}>
              {classification.hydroLevel.toUpperCase()}
            </span>
            <Progress value={territory.metrics.hydroPotential} className="h-2 w-16" />
          </div>
        </div>
        
        <div className="col-span-2 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <Map className="h-4 w-4 mr-2 text-emerald-500" />
            <span className="text-sm font-medium">Área</span>
          </div>
          <p className="text-sm text-right">{territory.details.area} km²</p>
        </div>
        
        <div className="col-span-2 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <Users className="h-4 w-4 mr-2 text-indigo-500" />
            <span className="text-sm font-medium">População</span>
          </div>
          <p className="text-sm text-right">{territory.details.population.toLocaleString('pt-BR')}</p>
        </div>
        
        <div className="col-span-2 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center mb-1">
            <BarChart3 className="h-4 w-4 mr-2 text-violet-500" />
            <span className="text-sm font-medium">Acesso à Eletricidade</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">da população</span>
            <Progress 
              value={territory.details.electricityAccess} 
              className="h-2 w-32" 
              indicatorClassName={territory.details.electricityAccess > 98 ? "bg-green-500" : 
                                 territory.details.electricityAccess > 95 ? "bg-amber-500" : "bg-red-500"}
            />
          </div>
          <p className="text-xs text-right mt-1">{territory.details.electricityAccess.toFixed(1)}%</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Indicadores Detalhados</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span className="text-muted-foreground">Radiação Solar Média:</span>
            <span className="font-medium">{territory.details.averageSolarRadiation} kWh/m²/dia</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Velocidade Média dos Ventos:</span>
            <span className="font-medium">{territory.details.averageWindSpeed} m/s</span>
          </li>
          <li className="flex justify-between">
            <span className="text-muted-foreground">Recursos Hídricos (escala 0-10):</span>
            <span className="font-medium">{territory.details.waterResources}/10</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-muted/30 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Recomendação Energética</h3>
        <p className="text-sm">{classification.recommendationText}</p>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>Fechar</Button>
        <Button>Ver Mais Detalhes</Button>
      </div>
    </div>
  );
};

export default TerritoryDetails;
