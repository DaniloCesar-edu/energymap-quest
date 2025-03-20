
import React from 'react';
import { Sun, Wind, Droplets, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import mockTerritories from '@/data/mockTerritories';

const EnergyMetricsOverview: React.FC = () => {
  // Calculando médias
  const avgEnergyNeed = mockTerritories.reduce((sum, t) => sum + t.metrics.energyNeed, 0) / mockTerritories.length;
  const avgSolarPotential = mockTerritories.reduce((sum, t) => sum + t.metrics.solarPotential, 0) / mockTerritories.length;
  const avgWindPotential = mockTerritories.reduce((sum, t) => sum + t.metrics.windPotential, 0) / mockTerritories.length;
  const avgHydroPotential = mockTerritories.reduce((sum, t) => sum + t.metrics.hydroPotential, 0) / mockTerritories.length;
  
  // Encontrando territórios destacados
  const highestEnergyNeed = [...mockTerritories].sort((a, b) => b.metrics.energyNeed - a.metrics.energyNeed)[0];
  const highestSolarPotential = [...mockTerritories].sort((a, b) => b.metrics.solarPotential - a.metrics.solarPotential)[0];
  const highestWindPotential = [...mockTerritories].sort((a, b) => b.metrics.windPotential - a.metrics.windPotential)[0];
  const highestHydroPotential = [...mockTerritories].sort((a, b) => b.metrics.hydroPotential - a.metrics.hydroPotential)[0];
  
  return (
    <div className="animate-fade-in p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Métricas Energéticas</h2>
        <p className="text-muted-foreground">
          Visão geral dos indicadores energéticos para os territórios do Nordeste brasileiro.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevation">
          <CardHeader className="bg-gradient-to-r from-red-100 to-amber-100 dark:from-red-950 dark:to-amber-950">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Necessidade Energética</CardTitle>
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <CardDescription>Indicador de pobreza energética</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Média da Região</span>
                <span className="font-medium">{avgEnergyNeed.toFixed(1)}/100</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full" 
                  style={{ width: `${avgEnergyNeed}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Território com Maior Necessidade</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span className="text-sm font-medium">{highestEnergyNeed.name}, {highestEnergyNeed.state}</span>
                </div>
                <span className="text-sm font-medium">{highestEnergyNeed.metrics.energyNeed}/100</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Apenas {highestEnergyNeed.details.electricityAccess.toFixed(1)}% da população tem acesso à eletricidade.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevation">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950 dark:to-yellow-950">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Potencial Solar</CardTitle>
              <Sun className="h-5 w-5 text-amber-400" />
            </div>
            <CardDescription>Capacidade para energia solar</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Média da Região</span>
                <span className="font-medium">{avgSolarPotential.toFixed(1)}/100</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-400 rounded-full" 
                  style={{ width: `${avgSolarPotential}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Território com Maior Potencial</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                  <span className="text-sm font-medium">{highestSolarPotential.name}, {highestSolarPotential.state}</span>
                </div>
                <span className="text-sm font-medium">{highestSolarPotential.metrics.solarPotential}/100</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Radiação solar média de {highestSolarPotential.details.averageSolarRadiation} kWh/m²/dia.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevation">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Potencial Eólico</CardTitle>
              <Wind className="h-5 w-5 text-blue-400" />
            </div>
            <CardDescription>Capacidade para energia eólica</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Média da Região</span>
                <span className="font-medium">{avgWindPotential.toFixed(1)}/100</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 rounded-full" 
                  style={{ width: `${avgWindPotential}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Território com Maior Potencial</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-sm font-medium">{highestWindPotential.name}, {highestWindPotential.state}</span>
                </div>
                <span className="text-sm font-medium">{highestWindPotential.metrics.windPotential}/100</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Velocidade média dos ventos de {highestWindPotential.details.averageWindSpeed} m/s.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevation">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Potencial Hídrico</CardTitle>
              <Droplets className="h-5 w-5 text-blue-600" />
            </div>
            <CardDescription>Capacidade para energia hidrelétrica</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Média da Região</span>
                <span className="font-medium">{avgHydroPotential.toFixed(1)}/100</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${avgHydroPotential}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Território com Maior Potencial</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium">{highestHydroPotential.name}, {highestHydroPotential.state}</span>
                </div>
                <span className="text-sm font-medium">{highestHydroPotential.metrics.hydroPotential}/100</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Índice de recursos hídricos: {highestHydroPotential.details.waterResources}/10.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Metodologia de Classificação</h3>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <p className="text-sm mb-4">
              Os territórios são classificados com base nos seguintes indicadores:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                  Necessidade Energética
                </h4>
                <p className="text-xs text-muted-foreground">
                  Medida pela porcentagem da população sem acesso adequado à eletricidade, 
                  regularidade do fornecimento e disponibilidade de serviços energéticos básicos.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold flex items-center mb-2">
                  <Sun className="h-4 w-4 mr-2 text-amber-400" />
                  Potencial Solar
                </h4>
                <p className="text-xs text-muted-foreground">
                  Calculado a partir da radiação solar média (kWh/m²/dia), horas de insolação,
                  nebulosidade média e disponibilidade de áreas para instalação de painéis.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold flex items-center mb-2">
                  <Wind className="h-4 w-4 mr-2 text-blue-400" />
                  Potencial Eólico
                </h4>
                <p className="text-xs text-muted-foreground">
                  Baseado na velocidade média dos ventos (m/s), consistência da direção,
                  rugosidade do terreno e disponibilidade de áreas para parques eólicos.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold flex items-center mb-2">
                  <Droplets className="h-4 w-4 mr-2 text-blue-600" />
                  Potencial Hídrico
                </h4>
                <p className="text-xs text-muted-foreground">
                  Avaliado pela presença de rios, lagos e outros recursos hídricos, vazão média,
                  regularidade do fluxo de água e viabilidade para micro e mini hidroelétricas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnergyMetricsOverview;
