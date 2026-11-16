import { useState, useEffect, useRef } from 'react';
import IAgent from '../../public/js/iAgent';
import SpeechAgent from '../../public/js/speechAgent';

export function useAgentSession({
  storageKey = 'speechAID',
  dbType = 'NormalDB',
  systemPrompt = null,
  modelParameters = null,
} = {}) {
  const [isReady, setIsReady] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const iAgentRef = useRef(null);
  const speechAgentRef = useRef(null);

  if (!iAgentRef.current) iAgentRef.current = new IAgent();
  if (!speechAgentRef.current) speechAgentRef.current = new SpeechAgent();

  useEffect(() => {
    let intervalId = null;
    let isMounted = true;

    const handleForceError = (msg) => {
      if (window.handleBeforeUnload) {
        window.removeEventListener('beforeunload', window.handleBeforeUnload);
      }
      window.onbeforeunload = null;
      window.location.href = `/force-error?msg=${encodeURIComponent(msg)}`;
    };

    const initSession = async () => {
      try {
        let currentId = sessionStorage.getItem(storageKey);
        if (!currentId) {
          currentId = await iAgentRef.current.initAgent(storageKey, dbType);
          sessionStorage.setItem(storageKey, currentId);
        }

        // Si la vista requiere configurar el system prompt (como TranslatorAI)
        if (systemPrompt && modelParameters) {
          await iAgentRef.current.fixModelSystem(currentId, systemPrompt, modelParameters);
        }

        if (!isMounted) return;
        setSessionId(currentId);
        console.log(`=> ${storageKey}... ID = ${currentId}`);

        // Cargar configuración y lanzar polling de sesión
        const configRes = await fetch('/api/config');
        const config = await configRes.json();
        const timeoutMs = config?.EXPIRED_SESSION_CLIENT_CHECK_TIMEOUT
          ? parseInt(config.EXPIRED_SESSION_CLIENT_CHECK_TIMEOUT, 10)
          : 10000;

        intervalId = setInterval(async () => {
          try {
            const res = await fetch('/api/client/expired-session-consult', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId: currentId }),
            });
            const data = await res.json();

            if (!res.ok) {
              throw new Error(`${data.error} : ${data.details}`);
            }

            if (data.status === 'expired') {
              clearInterval(intervalId);
              sessionStorage.clear();
              handleForceError(data.msg);
            }
          } catch (err) {
            clearInterval(intervalId);
            handleForceError(err.message);
          }
        }, timeoutMs);
      } catch (error) {
        console.error('Error inicializando la sesión o .env:', error);
      } finally {
        if (isMounted) setIsReady(true);
      }
    };

    initSession();

    return () => {
      isMounted = false;
      if (intervalId) clearInterval(intervalId);
      if (speechAgentRef.current) speechAgentRef.current.stopHearing();
    };
  }, [storageKey, dbType, systemPrompt, modelParameters]);

  return {
    isReady,
    sessionId,
    iAgent: iAgentRef.current,
    speechAgent: speechAgentRef.current,
  };
}