import React from 'react';
import ReactDOM from 'react-dom/client';
import TranslatorAIPage from './components/translatorAI/TranslatorAIPage';

import '../public/css/translatorAI.css';
import '../public/js/translatorAI.js';

function TranslatorAIView() {

  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;

  return (
    <TranslatorAIPage />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TranslatorAIView />
  </React.StrictMode>
);