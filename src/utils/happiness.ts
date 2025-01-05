import { HappinessData } from '../types';

export const calculateHappinessScore = (happiness: HappinessData, weights: HappinessData): string => {
  let totalScore = 0;
  let totalWeight = 0;

  Object.keys(happiness).forEach((key) => {
    const k = key as keyof typeof happiness;
    totalScore += happiness[k] * weights[k];
    totalWeight += weights[k];
  });

  return totalWeight > 0 ? (totalScore / totalWeight).toFixed(2) : '0';
};