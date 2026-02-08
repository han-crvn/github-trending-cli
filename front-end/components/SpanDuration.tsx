import React from 'react'

interface DurationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SpanDuration({ value, onChange }: DurationSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="duration" className="text-sm font-medium">
        Time Range:
      </label>
      <select 
        id="duration"
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="day">Last Day</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
      </select>
    </div>
  )
}