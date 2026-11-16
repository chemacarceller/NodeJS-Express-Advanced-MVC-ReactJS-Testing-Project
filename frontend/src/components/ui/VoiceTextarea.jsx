import React, { useEffect, useRef } from 'react';

export function VoiceTextarea({
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  autoScroll = false,
  rows = 8,
  cols = 128,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (autoScroll && textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [value, autoScroll]);

  return (
    <textarea
      ref={textareaRef}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      cols={cols}
    />
  );
}
