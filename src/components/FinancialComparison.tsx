import React from 'react';
import { DollarSign } from 'lucide-react';
import { FinancialData } from '../types';

interface Props {
  countryName: string;
  data: FinancialData;
  onChange: (field: keyof FinancialData, value: number | boolean) => void;
}

const numberFields = [
  { key: 'hourlyWage' as const, label: 'Hourly Wage', min: 0, step: 0.01 },
  { key: 'hoursPerDay' as const, label: 'Hours per Day', min: 0, max: 24, step: 0.5 },
  { key: 'lunch' as const, label: 'Average Lunch Cost', min: 0, step: 0.01 },
  { key: 'food' as const, label: 'Monthly Food Budget', min: 0, step: 0.01 },
  { key: 'transportation' as const, label: 'Monthly Transportation', min: 0, step: 0.01 },
  { key: 'rent' as const, label: 'Monthly Rent', min: 0, step: 0.01 },
  { key: 'debts' as const, label: 'Monthly Debts', min: 0, step: 0.01 },
  { key: 'carCosts' as const, label: 'Car Ownership Costs', min: 0, step: 0.01 },
  { key: 'gasoline' as const, label: 'Monthly Gasoline', min: 0, step: 0.01 },
] as const;

const FinancialComparison: React.FC<Props> = ({ countryName, data, onChange }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <DollarSign className="w-6 h-6" />
        {countryName} Financial Data
      </h2>
      <div className="grid gap-4">
        {numberFields.map(({ key, label, min, max, step }) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="number"
              value={data[key] || 0}
              onChange={(e) => onChange(key, Number(e.target.value))}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min={min}
              max={max}
              step={step}
            />
          </div>
        ))}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id={`split-rent-${countryName}`}
            checked={data.splitRent}
            onChange={(e) => onChange('splitRent', e.target.checked)}
            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor={`split-rent-${countryName}`} className="text-sm font-medium text-gray-700">
            Split Rent with Partner
          </label>
        </div>
      </div>
    </div>
  );
};

export default FinancialComparison;