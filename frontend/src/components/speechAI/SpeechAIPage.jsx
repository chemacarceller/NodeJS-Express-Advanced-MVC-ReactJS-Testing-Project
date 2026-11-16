import React, { useState, useRef, useCallback } from 'react';
import { useAgentSession } from '../../hooks/useAgentSession';
import { SpeechToTextSection } from './SpeechToTextSection';
import { TextToSpeechSection } from './TextToSpeechSection';

export default function SpeechAIPage() {
  const { isReady, sessionId, iAgent, speechAgent } = useAgentSession();

  const [inputText, setInputText] = useState('');
  const [placeholder, setPlaceholder] = useState('Your dictated text will appear here...');
  const [responseText, setResponseText] = useState('');
  const [isHearing, setIsHearing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(false);

  const inputTextRef = useRef(inputText);
  inputTextRef.current = inputText;

  const isTtsEnabledRef = useRef(isTtsEnabled);
  isTtsEnabledRef.current = isTtsEnabled;

  const processAndSpeakResponse = useCallback(
    (fullTextWithSpace) => {
      if (!isTtsEnabledRef.current) return;

      const sentences = fullTextWithSpace.match(/[^.!?,;\n]+[.!?,;\n]*/g);

      if (sentences) {
        sentences.forEach((sentence) => {
          const cleanSentence = sentence.trim();
          if (cleanSentence.length > 0) {
            speechAgent.speak(cleanSentence);
          }
        });
      }
    },
    [speechAgent]
  );

  const handleSendMessage = useCallback(async () => {
    speechAgent.stopHearing();
    setIsHearing(false);

    const message = inputTextRef.current.trim();
    if (message === '') {
      setPlaceholder('Please write a message before sending.');
      return;
    }

    setResponseText('Thinking...');
    setIsSending(true);

    try {
      const currentSession = sessionId || sessionStorage.getItem('speechAID');
      const aiResponse = await iAgent.sendMessage(currentSession, message);
      const formattedResponse = `${aiResponse} `;

      setResponseText(formattedResponse);
      processAndSpeakResponse(formattedResponse);
      setInputText('');
      setPlaceholder('Your dictated text will appear here...');
    } catch (error) {
      console.error('Error enviando mensaje:', error);
      setResponseText('Error obtaining response from AI.');
    } finally {
      setIsSending(false);
    }
  }, [iAgent, speechAgent, sessionId, processAndSpeakResponse]);

  const handleToggleDictation = () => {
    speechAgent.hear(
      (text) => setInputText(text),
      (hearingState) => setIsHearing(hearingState),
      () => handleSendMessage()
    );
  };

  return (
    <main className="speech-ai-wrapper">
      <SpeechToTextSection
        inputText={inputText}
        onInputChange={setInputText}
        placeholder={placeholder}
        isHearing={isHearing}
        isSending={isSending}
        isReady={isReady}
        onToggleDictation={handleToggleDictation}
        onSendMessage={handleSendMessage}
      />

      <TextToSpeechSection
        isTtsEnabled={isTtsEnabled}
        onToggleTts={setIsTtsEnabled}
        responseText={responseText}
      />
    </main>
  );
}
