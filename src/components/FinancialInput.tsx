import React from 'react';

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const FinancialInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 0.01,
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="number"
      value={value === 0 ? '' : value}
      onChange={(e) => {
        const val = e.target.value === '' ? 0 : Number(e.target.value);
        onChange(val);
      }}
      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      min={min}
      max={max}
      step={step}
      placeholder="0"
    />
  </div>
);

export default FinancialInput;