import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/lightbulbAI.css';

import '../public/js/lightbulbAI.js';

function SystemPromptEditorView() {

  return (
    <h2>Colored Light Bulb AI</h2>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemPromptEditorView />
  </React.StrictMode>
);