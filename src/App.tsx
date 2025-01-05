import React, { useState, useEffect } from 'react';
import { ComparisonData } from './types';
import FinancialComparison from './components/FinancialComparison';
import HappinessComparison from './components/HappinessComparison';
import ComparisonResults from './components/ComparisonResults';
import { Globe } from 'lucide-react';
import { defaultFinancialData, defaultHappinessData, defaultWeights } from './constants/defaults';

function App() {
  const [data, setData] = useState<ComparisonData>(() => {
    const savedData = localStorage.getItem('comparisonData');
    return savedData ? JSON.parse(savedData) : {
      colombia: {
        financial: { ...defaultFinancialData },
        happiness: { ...defaultHappinessData },
        weights: { ...defaultWeights },
      },
      poland: {
        financial: { ...defaultFinancialData },
        happiness: { ...defaultHappinessData },
        weights: { ...defaultWeights },
      },
    };
  });

  useEffect(() => {
    localStorage.setItem('comparisonData', JSON.stringify(data));
  }, [data]);

  const handleFinancialChange = (
    country: keyof ComparisonData,
    field: keyof typeof defaultFinancialData,
    value: number | boolean
  ) => {
    setData((prev) => ({
      ...prev,
      [country]: {
        ...prev[country],
        financial: {
          ...prev[country].financial,
          [field]: value,
        },
      },
    }));
  };

  const handleHappinessChange = (
    country: keyof ComparisonData,
    field: keyof typeof defaultHappinessData,
    value: number
  ) => {
    setData((prev) => ({
      ...prev,
      [country]: {
        ...prev[country],
        happiness: {
          ...prev[country].happiness,
          [field]: value,
        },
      },
    }));
  };

  const handleWeightChange = (
    country: keyof ComparisonData,
    field: keyof typeof defaultWeights,
    value: number
  ) => {
    setData((prev) => ({
      ...prev,
      [country]: {
        ...prev[country],
        weights: {
          ...prev[country].weights,
          [field]: value,
        },
      },
    }));
  };

  const handleReset = () => {
    setData({
      colombia: {
        financial: { ...defaultFinancialData },
        happiness: { ...defaultHappinessData },
        weights: { ...defaultWeights },
      },
      poland: {
        financial: { ...defaultFinancialData },
        happiness: { ...defaultHappinessData },
        weights: { ...defaultWeights },
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3 mb-2">
            <Globe className="w-10 h-10" />
            Colombia vs Poland Comparison
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare the cost of living and quality of life between Colombia and Poland.
            Input your data below to see a detailed comparison.
          </p>
        </header>

        <ComparisonResults data={data} />

        <button
          onClick={handleReset}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition-colors"
        >
          Reset All Data
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <FinancialComparison
              countryName="Colombia"
              data={data.colombia.financial}
              onChange={(field, value) => handleFinancialChange('colombia', field, value)}
            />
            <HappinessComparison
              countryName="Colombia"
              data={data.colombia.happiness}
              weights={data.colombia.weights}
              onDataChange={(field, value) => handleHappinessChange('colombia', field, value)}
              onWeightChange={(field, value) => handleWeightChange('colombia', field, value)}
            />
          </div>

          <div className="space-y-8">
            <FinancialComparison
              countryName="Poland"
              data={data.poland.financial}
              onChange={(field, value) => handleFinancialChange('poland', field, value)}
            />
            <HappinessComparison
              countryName="Poland"
              data={data.poland.happiness}
              weights={data.poland.weights}
              onDataChange={(field, value) => handleHappinessChange('poland', field, value)}
              onWeightChange={(field, value) => handleWeightChange('poland', field, value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;