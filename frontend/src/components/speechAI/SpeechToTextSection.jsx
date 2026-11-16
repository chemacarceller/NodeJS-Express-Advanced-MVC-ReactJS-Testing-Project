import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { VoiceTextarea } from '../ui/VoiceTextarea';
import { ActionButton } from '../ui/ActionButton';

export function SpeechToTextSection({
  inputText,
  onInputChange,
  placeholder,
  isHearing,
  isSending,
  isReady,
  onToggleDictation,
  onSendMessage,
}) {
  const controlsDisabled = !isReady || isSending;

  return (
    <section>
      <SectionHeader
        title="Speech to Text AI"
        description="Press the button to start speaking and fill in the text field."
      />
      <div className="voice-container">
        <VoiceTextarea
          id="inputMessage"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          disabled={isSending}
          autoScroll={true}
        />
        &nbsp;
        <ActionButton
          id="btnVoice"
          spanId="estado-mic"
          label={isHearing ? 'Stop Dictation' : 'Start Dictation'}
          onClick={onToggleDictation}
          disabled={controlsDisabled}
          isActive={isHearing}
        />
        &nbsp;&nbsp;&nbsp;
        <ActionButton
          id="btnSend"
          spanId="estado-send"
          label="Send"
          onClick={onSendMessage}
          disabled={controlsDisabled}
        />
      </div>
    </section>
  );
}
