export const defaultFinancialData = {
  hourlyWage: 0,
  hoursPerDay: 8,
  lunch: 0,
  lunchesPerMonth: 20, // Default to 20 working days
  food: 0,
  transportation: 0,
  rent: 0,
  splitRent: false,
  debts: 0,
  carCosts: 0,
  gasoline: 0,
} as const;

export const defaultHappinessData = {
  jobSatisfaction: 5,
  safety: 5,
  socialLife: 5,
  culturalActivities: 5,
  workLifeBalance: 5,
  environmentalQuality: 5,
  health: 5,
  politicalStability: 5,
} as const;

export const defaultWeights = {
  jobSatisfaction: 3,
  safety: 3,
  socialLife: 3,
  culturalActivities: 3,
  workLifeBalance: 3,
  environmentalQuality: 3,
  health: 3,
  politicalStability: 3,
} as const;