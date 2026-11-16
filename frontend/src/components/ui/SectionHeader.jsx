import React from 'react';

export function SectionHeader({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </>
  );
}
