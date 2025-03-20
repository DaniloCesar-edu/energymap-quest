
export interface Territory {
  id: string;
  name: string;
  state: string;
  coordinates: [number, number]; // [longitude, latitude]
  metrics: {
    energyNeed: number; // 0-100, quanto maior, maior a necessidade
    solarPotential: number; // 0-100, quanto maior, melhor o potencial
    windPotential: number; // 0-100, quanto maior, melhor o potencial
    hydroPotential: number; // 0-100, quanto maior, melhor o potencial
  };
  details: {
    population: number;
    area: number; // km²
    electricityAccess: number; // % da população
    averageSolarRadiation: number; // kWh/m²/dia
    averageWindSpeed: number; // m/s
    waterResources: number; // 0-10 escala
  };
}

// Dados de exemplo para alguns territórios do Nordeste brasileiro
const mockTerritories: Territory[] = [
  {
    id: "recife",
    name: "Recife",
    state: "PE",
    coordinates: [-34.8813, -8.0539],
    metrics: {
      energyNeed: 40,
      solarPotential: 85,
      windPotential: 55,
      hydroPotential: 30
    },
    details: {
      population: 1653461,
      area: 218,
      electricityAccess: 99.8,
      averageSolarRadiation: 5.8,
      averageWindSpeed: 4.2,
      waterResources: 6
    }
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    state: "CE",
    coordinates: [-38.5266, -3.7319],
    metrics: {
      energyNeed: 45,
      solarPotential: 90,
      windPotential: 75,
      hydroPotential: 20
    },
    details: {
      population: 2686612,
      area: 314,
      electricityAccess: 99.5,
      averageSolarRadiation: 6.1,
      averageWindSpeed: 5.5,
      waterResources: 3
    }
  },
  {
    id: "salvador",
    name: "Salvador",
    state: "BA",
    coordinates: [-38.5108, -12.9714],
    metrics: {
      energyNeed: 55,
      solarPotential: 88,
      windPotential: 60,
      hydroPotential: 25
    },
    details: {
      population: 2857329,
      area: 693,
      electricityAccess: 99.3,
      averageSolarRadiation: 5.9,
      averageWindSpeed: 4.8,
      waterResources: 5
    }
  },
  {
    id: "joao-pessoa",
    name: "João Pessoa",
    state: "PB",
    coordinates: [-34.8631, -7.1195],
    metrics: {
      energyNeed: 50,
      solarPotential: 86,
      windPotential: 65,
      hydroPotential: 30
    },
    details: {
      population: 817511,
      area: 211,
      electricityAccess: 99.5,
      averageSolarRadiation: 5.7,
      averageWindSpeed: 5.0,
      waterResources: 4
    }
  },
  {
    id: "maceio",
    name: "Maceió",
    state: "AL",
    coordinates: [-35.7353, -9.6498],
    metrics: {
      energyNeed: 65,
      solarPotential: 87,
      windPotential: 50,
      hydroPotential: 35
    },
    details: {
      population: 1025360,
      area: 509,
      electricityAccess: 98.7,
      averageSolarRadiation: 5.8,
      averageWindSpeed: 4.2,
      waterResources: 6
    }
  },
  {
    id: "natal",
    name: "Natal",
    state: "RN",
    coordinates: [-35.2094, -5.7945],
    metrics: {
      energyNeed: 48,
      solarPotential: 89,
      windPotential: 80,
      hydroPotential: 15
    },
    details: {
      population: 890480,
      area: 167,
      electricityAccess: 99.6,
      averageSolarRadiation: 6.0,
      averageWindSpeed: 7.0,
      waterResources: 2
    }
  },
  {
    id: "teresina",
    name: "Teresina",
    state: "PI",
    coordinates: [-42.8019, -5.0919],
    metrics: {
      energyNeed: 70,
      solarPotential: 92,
      windPotential: 45,
      hydroPotential: 40
    },
    details: {
      population: 868075,
      area: 1392,
      electricityAccess: 97.8,
      averageSolarRadiation: 6.2,
      averageWindSpeed: 3.8,
      waterResources: 7
    }
  },
  {
    id: "sao-luis",
    name: "São Luís",
    state: "MA",
    coordinates: [-44.3028, -2.5297],
    metrics: {
      energyNeed: 75,
      solarPotential: 85,
      windPotential: 60,
      hydroPotential: 45
    },
    details: {
      population: 1108975,
      area: 834,
      electricityAccess: 97.2,
      averageSolarRadiation: 5.6,
      averageWindSpeed: 4.5,
      waterResources: 8
    }
  },
  {
    id: "aracaju",
    name: "Aracaju",
    state: "SE",
    coordinates: [-37.0731, -10.9472],
    metrics: {
      energyNeed: 58,
      solarPotential: 88,
      windPotential: 55,
      hydroPotential: 25
    },
    details: {
      population: 664908,
      area: 182,
      electricityAccess: 99.1,
      averageSolarRadiation: 5.9,
      averageWindSpeed: 4.1,
      waterResources: 5
    }
  },
  {
    id: "juazeiro",
    name: "Juazeiro",
    state: "BA",
    coordinates: [-40.5003, -9.4156],
    metrics: {
      energyNeed: 78,
      solarPotential: 95,
      windPotential: 70,
      hydroPotential: 60
    },
    details: {
      population: 218324,
      area: 6500,
      electricityAccess: 96.5,
      averageSolarRadiation: 6.3,
      averageWindSpeed: 5.1,
      waterResources: 8
    }
  },
  {
    id: "petrolina",
    name: "Petrolina",
    state: "PE",
    coordinates: [-40.5003, -9.3989],
    metrics: {
      energyNeed: 75,
      solarPotential: 95,
      windPotential: 65,
      hydroPotential: 60
    },
    details: {
      population: 354317,
      area: 4561,
      electricityAccess: 97.2,
      averageSolarRadiation: 6.3,
      averageWindSpeed: 4.9,
      waterResources: 8
    }
  },
  {
    id: "patos",
    name: "Patos",
    state: "PB",
    coordinates: [-37.2803, -7.0231],
    metrics: {
      energyNeed: 80,
      solarPotential: 93,
      windPotential: 60,
      hydroPotential: 20
    },
    details: {
      population: 108192,
      area: 512,
      electricityAccess: 96.0,
      averageSolarRadiation: 6.2,
      averageWindSpeed: 4.5,
      waterResources: 3
    }
  },
  {
    id: "sobral",
    name: "Sobral",
    state: "CE",
    coordinates: [-40.3517, -3.6889],
    metrics: {
      energyNeed: 72,
      solarPotential: 94,
      windPotential: 65,
      hydroPotential: 25
    },
    details: {
      population: 210711,
      area: 2122,
      electricityAccess: 96.8,
      averageSolarRadiation: 6.1,
      averageWindSpeed: 4.8,
      waterResources: 4
    }
  },
  {
    id: "parnaiba",
    name: "Parnaíba",
    state: "PI",
    coordinates: [-41.7756, -2.9055],
    metrics: {
      energyNeed: 68,
      solarPotential: 91,
      windPotential: 85,
      hydroPotential: 30
    },
    details: {
      population: 153482,
      area: 436,
      electricityAccess: 97.4,
      averageSolarRadiation: 6.1,
      averageWindSpeed: 7.5,
      waterResources: 6
    }
  },
  {
    id: "mossoro",
    name: "Mossoró",
    state: "RN",
    coordinates: [-37.3442, -5.1878],
    metrics: {
      energyNeed: 62,
      solarPotential: 92,
      windPotential: 75,
      hydroPotential: 15
    },
    details: {
      population: 300618,
      area: 2110,
      electricityAccess: 98.2,
      averageSolarRadiation: 6.2,
      averageWindSpeed: 6.0,
      waterResources: 2
    }
  }
];

export default mockTerritories;
