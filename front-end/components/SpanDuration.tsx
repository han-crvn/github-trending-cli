import React from 'react'

interface DurationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const SpanDuration = ({ value, onChange }: DurationSelectorProps) => {
  return (
    <div>
      <button 
        onClick={() => onChange('day')}
        disabled={value === 'day'}
      >
        Day
      </button>
      <button 
        onClick={() => onChange('week')}
        disabled={value === 'week'}
      >
        Week
      </button>
      <button 
        onClick={() => onChange('month')}
        disabled={value === 'month'}
      >
        Month
      </button>
      <button 
        onClick={() => onChange('year')}
        disabled={value === 'year'}
      >
        Year
      </button>
    </div>
  )
}

export default SpanDuration