import React from 'react'

interface DurationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const SpanDuration = ({ value, onChange }: DurationSelectorProps) => {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>
  )
}

export default SpanDuration