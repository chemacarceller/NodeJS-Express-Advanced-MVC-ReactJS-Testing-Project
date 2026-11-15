import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/systemprompteditor.css';

import '../public/js/systemprompteditor.js';

function SystemPromptEditorView() {

  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;

  return (
    <h2>System Prompt Editor</h2>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemPromptEditorView />
  </React.StrictMode>
);