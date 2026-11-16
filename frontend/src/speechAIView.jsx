import React from 'react';
import ReactDOM from 'react-dom/client';
import SpeechAIPage from './components/speechAI/SpeechAIPage';

import '../public/css/speechAI.css';
import '../public/js/speechAI.js';

function SpeechAIView() {

  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;

  return (
    <SpeechAIPage />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeechAIView />
  </React.StrictMode>
);