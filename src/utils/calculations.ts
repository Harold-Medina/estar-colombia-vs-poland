export const calculateMonthlyIncome = (hourlyWage: number, hoursPerDay: number): number => {
  const workDaysPerWeek = 5;
  const weeksPerMonth = 4;
  return hourlyWage * hoursPerDay * workDaysPerWeek * weeksPerMonth;
};

export const calculateTotalExpenses = (financial: {
  lunch: number;
  food: number;
  transportation: number;
  rent: number;
  splitRent: boolean;
  debts: number;
  carCosts: number;
  gasoline: number;
}): number => {
  const effectiveRent = financial.splitRent ? financial.rent / 2 : financial.rent;
  return (
    financial.lunch +
    financial.food +
    financial.transportation +
    effectiveRent +
    financial.debts +
    financial.carCosts +
    financial.gasoline
  );
};