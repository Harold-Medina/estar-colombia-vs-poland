import React from 'react';
import { Smile } from 'lucide-react';
import { HappinessData } from '../types';

interface Props {
  countryName: string;
  data: HappinessData;
  weights: HappinessData;
  onDataChange: (field: keyof HappinessData, value: number) => void;
  onWeightChange: (field: keyof HappinessData, value: number) => void;
}

const HappinessComparison: React.FC<Props> = ({
  countryName,
  data,
  weights,
  onDataChange,
  onWeightChange,
}) => {
  const fields = [
    { key: 'jobSatisfaction' as const, label: 'Job Satisfaction' },
    { key: 'safety' as const, label: 'Safety' },
    { key: 'socialLife' as const, label: 'Social Life' },
    { key: 'culturalActivities' as const, label: 'Cultural Activities' },
    { key: 'workLifeBalance' as const, label: 'Work-Life Balance' },
    { key: 'environmentalQuality' as const, label: 'Environmental Quality' },
    { key: 'health' as const, label: 'Health' },
    { key: 'politicalStability' as const, label: 'Political Stability' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Smile className="w-6 h-6" />
        {countryName} Happiness Metrics
      </h2>
      <div className="grid gap-6">
        {fields.map(({ key, label }) => (
          <div key={key}>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              {label}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-gray-500">Rating (1-10)</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={data[key]}
                  onChange={(e) => onDataChange(key, Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm">{data[key]}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">Importance (1-5)</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={weights[key]}
                  onChange={(e) => onWeightChange(key, Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm">{weights[key]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappinessComparison;