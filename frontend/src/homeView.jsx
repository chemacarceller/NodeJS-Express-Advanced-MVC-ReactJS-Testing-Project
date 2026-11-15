import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/css/home.css';

import '../public/js/home.js';

function HomeView() {

  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;
  const message = data.message || 'This page is being dynamically rendered from the Express server.';

  return (
    <div>
      <h1>WELCOME</h1>
      <p>{message}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>
);