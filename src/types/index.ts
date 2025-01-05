export interface FinancialData {
  hourlyWage: number;
  hoursPerDay: number;
  splitRent: boolean;
  lunch: number;
  lunchesPerMonth: number;
  food: number;
  transportation: number;
  rent: number;
  debts: number;
  carCosts: number;
  gasoline: number;
}

export interface HappinessData {
  jobSatisfaction: number;
  safety: number;
  socialLife: number;
  culturalActivities: number;
  workLifeBalance: number;
  environmentalQuality: number;
  health: number;
  politicalStability: number;
}

export interface CountryData {
  financial: FinancialData;
  happiness: HappinessData;
  weights: HappinessData;
}

export interface ComparisonData {
  colombia: CountryData;
  poland: CountryData;
}