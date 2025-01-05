import React from 'react';
import { TrendingUp, Heart } from 'lucide-react';
import { ComparisonData } from '../types';
import { calculateMonthlyIncome, calculateTotalExpenses } from '../utils/calculations';
import { calculateHappinessScore } from '../utils/happiness';

interface Props {
  data: ComparisonData;
}

interface CountryResultsProps {
  countryName: string;
  monthlyIncome: number;
  expenses: number;
  disposableIncome: number;
  happinessScore: string;
}

const CountryResults: React.FC<CountryResultsProps> = ({
  countryName,
  monthlyIncome,
  expenses,
  disposableIncome,
  happinessScore,
}) => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-600">
        <TrendingUp className="w-5 h-5" />
        {countryName} Financial Summary
      </h3>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span className="text-gray-600">Monthly Income:</span>
          <span className="font-medium">${monthlyIncome.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-600">Total Expenses:</span>
          <span className="font-medium">${expenses.toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-lg font-semibold">
          <span className="text-gray-600">Disposable Income:</span>
          <span className={disposableIncome >= 0 ? 'text-green-600' : 'text-red-600'}>
            ${disposableIncome.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-pink-600">
        <Heart className="w-5 h-5" />
        Happiness Score: {happinessScore}
      </h3>
    </div>
  </div>
);

const ComparisonResults: React.FC<Props> = ({ data }) => {
  const getCountryResults = (country: keyof ComparisonData) => {
    const monthlyIncome = calculateMonthlyIncome(
      data[country].financial.hourlyWage,
      data[country].financial.hoursPerDay
    );
    const expenses = calculateTotalExpenses(data[country].financial);
    const disposableIncome = monthlyIncome - expenses;
    const happinessScore = calculateHappinessScore(data[country].happiness, data[country].weights);

    return { monthlyIncome, expenses, disposableIncome, happinessScore };
  };

  const colombiaResults = getCountryResults('colombia');
  const polandResults = getCountryResults('poland');

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Comparison Results</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <CountryResults countryName="Colombia" {...colombiaResults} />
        <CountryResults countryName="Poland" {...polandResults} />
      </div>
    </div>
  );
};

export default ComparisonResults;