import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/audioanalyzerAI.css';

import '../public/js/audioanalyzerAI.js';

function SystemPromptEditorView() {

  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;

  return (
    <h2>Audio Analyzer AI</h2>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemPromptEditorView />
  </React.StrictMode>
);