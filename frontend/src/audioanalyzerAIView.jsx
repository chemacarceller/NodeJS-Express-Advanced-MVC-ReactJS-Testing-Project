import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/audioanalyzerAI.css';

import '../public/js/audioanalyzerAI.js';

function SystemPromptEditorView() {

  return (
    <h2>Audio Analyzer AI</h2>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemPromptEditorView />
  </React.StrictMode>
);