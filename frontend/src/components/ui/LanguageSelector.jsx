import React from 'react';

export function LanguageSelector({
  id,
  label,
  value,
  onChange,
  options,
  disabled = false,
}) {
  return (
    <p>
      {label} :{' '}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </p>
  );
}
