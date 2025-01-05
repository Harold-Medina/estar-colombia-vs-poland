import React from 'react';
import { DollarSign } from 'lucide-react';
import { FinancialData } from '../types';
import FinancialInput from './FinancialInput';

interface Props {
  countryName: string;
  data: FinancialData;
  onChange: (field: keyof FinancialData, value: number | boolean) => void;
}

const fields = [
  { key: 'hourlyWage', label: 'Hourly Wage', step: 0.01 },
  { key: 'hoursPerDay', label: 'Hours per Day', max: 24, step: 0.5 },
  { key: 'lunch', label: 'Average Lunch Cost', step: 0.01 },
  { key: 'lunchesPerMonth', label: 'Lunches per Month', step: 1, max: 31 },
  { key: 'food', label: 'Additional Monthly Food Budget', step: 0.01 },
  { key: 'transportation', label: 'Monthly Transportation', step: 0.01 },
  { key: 'rent', label: 'Monthly Rent', step: 0.01 },
  { key: 'debts', label: 'Monthly Debts', step: 0.01 },
  { key: 'carCosts', label: 'Car Ownership Costs', step: 0.01 },
  { key: 'gasoline', label: 'Monthly Gasoline', step: 0.01 },
] as const;

const FinancialComparison: React.FC<Props> = ({ countryName, data, onChange }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <DollarSign className="w-6 h-6" />
        {countryName} Financial Data
      </h2>
      <div className="grid gap-4">
        {fields.map(({ key, label, max, step }) => (
          <FinancialInput
            key={key}
            label={label}
            value={data[key]}
            onChange={(value) => onChange(key, value)}
            max={max}
            step={step}
          />
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