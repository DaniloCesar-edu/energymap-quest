
import { Territory } from "@/data/mockTerritories";

export interface EnergyClassification {
  needLevel: 'baixa' | 'média' | 'alta';
  solarLevel: 'baixo' | 'médio' | 'alto';
  windLevel: 'baixo' | 'médio' | 'alto';
  hydroLevel: 'baixo' | 'médio' | 'alto';
  primaryRecommendation: 'solar' | 'wind' | 'hydro' | 'mixed';
  recommendationText: string;
}

/**
 * Classifica um território de acordo com suas métricas energéticas
 */
export function classifyTerritory(territory: Territory): EnergyClassification {
  // Classificação de necessidade energética
  let needLevel: 'baixa' | 'média' | 'alta';
  if (territory.metrics.energyNeed < 50) needLevel = 'baixa';
  else if (territory.metrics.energyNeed < 70) needLevel = 'média';
  else needLevel = 'alta';
  
  // Classificação de potencial solar
  let solarLevel: 'baixo' | 'médio' | 'alto';
  if (territory.metrics.solarPotential < 60) solarLevel = 'baixo';
  else if (territory.metrics.solarPotential < 80) solarLevel = 'médio';
  else solarLevel = 'alto';
  
  // Classificação de potencial eólico
  let windLevel: 'baixo' | 'médio' | 'alto';
  if (territory.metrics.windPotential < 60) windLevel = 'baixo';
  else if (territory.metrics.windPotential < 80) windLevel = 'médio';
  else windLevel = 'alto';
  
  // Classificação de potencial hídrico
  let hydroLevel: 'baixo' | 'médio' | 'alto';
  if (territory.metrics.hydroPotential < 40) hydroLevel = 'baixo';
  else if (territory.metrics.hydroPotential < 70) hydroLevel = 'médio';
  else hydroLevel = 'alto';
  
  // Determinação da recomendação primária
  const potentials = [
    { type: 'solar' as const, value: territory.metrics.solarPotential },
    { type: 'wind' as const, value: territory.metrics.windPotential },
    { type: 'hydro' as const, value: territory.metrics.hydroPotential }
  ];
  
  // Ordena por potencial do maior para o menor
  potentials.sort((a, b) => b.value - a.value);
  
  let primaryRecommendation: 'solar' | 'wind' | 'hydro' | 'mixed';
  let recommendationText: string;
  
  // Se o potencial mais alto for significativamente maior que o segundo
  if (potentials[0].value > potentials[1].value + 15) {
    primaryRecommendation = potentials[0].type;
    
    const recommendationMap = {
      solar: `A energia solar é altamente recomendada para ${territory.name} devido à excelente incidência solar na região. Com média de ${territory.details.averageSolarRadiation} kWh/m²/dia, sistemas fotovoltaicos teriam alto rendimento.`,
      wind: `A energia eólica tem grande potencial em ${territory.name}, com velocidade média de vento de ${territory.details.averageWindSpeed} m/s. É recomendado o investimento em parques eólicos na região.`,
      hydro: `${territory.name} apresenta bons recursos hídricos (índice ${territory.details.waterResources}/10), favorecendo a implantação de pequenas centrais hidrelétricas ou sistemas de microgeração hidráulica.`
    };
    
    recommendationText = recommendationMap[primaryRecommendation];
  } else {
    // Se os potenciais forem próximos, recomenda combinação
    primaryRecommendation = 'mixed';
    
    const topTwo = `${translateEnergyType(potentials[0].type)} e ${translateEnergyType(potentials[1].type)}`;
    
    recommendationText = `${territory.name} apresenta bom potencial para uma combinação de fontes, principalmente ${topTwo}. Uma matriz energética diversificada é recomendada para maximizar a eficiência e resiliência do sistema.`;
  }
  
  return {
    needLevel,
    solarLevel,
    windLevel,
    hydroLevel,
    primaryRecommendation,
    recommendationText
  };
}

function translateEnergyType(type: 'solar' | 'wind' | 'hydro'): string {
  const translations = {
    solar: 'energia solar',
    wind: 'energia eólica',
    hydro: 'energia hídrica'
  };
  
  return translations[type];
}

export function getEnergyNeedColor(level: 'baixa' | 'média' | 'alta'): string {
  const colors = {
    baixa: 'bg-energy-need-low',
    média: 'bg-energy-need-medium',
    alta: 'bg-energy-need-high'
  };
  
  return colors[level];
}

export function getSolarPotentialColor(level: 'baixo' | 'médio' | 'alto'): string {
  const colors = {
    baixo: 'bg-energy-solar-low',
    médio: 'bg-energy-solar-medium',
    alto: 'bg-energy-solar-high'
  };
  
  return colors[level];
}

export function getWindPotentialColor(level: 'baixo' | 'médio' | 'alto'): string {
  const colors = {
    baixo: 'bg-energy-wind-low',
    médio: 'bg-energy-wind-medium',
    alto: 'bg-energy-wind-high'
  };
  
  return colors[level];
}

export function getHydroPotentialColor(level: 'baixo' | 'médio' | 'alto'): string {
  const colors = {
    baixo: 'bg-energy-hydro-low',
    médio: 'bg-energy-hydro-medium',
    alto: 'bg-energy-hydro-high'
  };
  
  return colors[level];
}
