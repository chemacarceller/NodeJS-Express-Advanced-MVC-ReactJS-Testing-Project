import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { VoiceToggle } from '../ui/VoiceToggle';
import { VoiceTextarea } from '../ui/VoiceTextarea';

export function TextToSpeechSection({
  isTtsEnabled,
  onToggleTts,
  responseText,
}) {
  const helperText =
    'Once the text in this field is filled listen to the result if the Text To Voice Enabled checkbox is set';

  return (
    <section>
      <SectionHeader title="Text to Speech AI" />
      <VoiceToggle
        id="Text2Voice"
        label="Text To Voice Enabled"
        checked={isTtsEnabled}
        onChange={onToggleTts}
      />
      <p>{helperText}</p>
      <div className="voice-container">
        <VoiceTextarea
          id="outputResponse"
          value={responseText}
          placeholder={helperText}
          disabled={true}
        />
      </div>
    </section>
  );
}
