import React from 'react';

export function VoiceToggle({ id, label, checked, onChange }) {
  return (
    <p>
      {label} :{' '}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </p>
  );
}
