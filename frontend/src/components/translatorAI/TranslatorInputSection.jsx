import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { LanguageSelector } from '../ui/LanguageSelector';
import { VoiceTextarea } from '../ui/VoiceTextarea';
import { ActionButton } from '../ui/ActionButton';

export function TranslatorInputSection({
  inputLanguage,
  inputLanguageOptions,
  inputText,
  onInputChange,
  placeholder,
  isHearing,
  isTranslating,
  isReady,
  onToggleDictation,
  onTranslate,
}) {
  const controlsDisabled = !isReady || isTranslating;

  return (
    <section>
      <SectionHeader
        title="Translator AI"
        description="Press the button to start speaking and fill in the text field."
      />
      <LanguageSelector
        id="InputLanguageSelector"
        label="Select the language in which you want to speak"
        value={inputLanguage}
        options={inputLanguageOptions}
        disabled={true}
      />
      <div className="voice-container">
        <VoiceTextarea
          id="inputMessage"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          disabled={isTranslating}
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
          label="Translate"
          onClick={onTranslate}
          disabled={controlsDisabled}
        />
      </div>
    </section>
  );
}
