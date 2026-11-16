import React from 'react';

export function ActionButton({
  id,
  spanId,
  label,
  onClick,
  disabled = false,
  isActive = false,
}) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn-mic ${isActive ? 'hearing' : ''}`.trim()}
    >
      <span id={spanId}>{label}</span>
    </button>
  );
}
