import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/systemprompttestingAI.css';

import '../public/js/systemprompttestingAI.js';

function SystemPromptEditorView() {

  return (
    <h2>System Prompt Testing AI</h2>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemPromptEditorView />
  </React.StrictMode>
);