import React from 'react';
import ReactDOM from 'react-dom/client';
import UserPanel from "./components/UserPanel";

import '../public/css/users.css';

import '../public/js/users.js';

function UserView() {
  
  const data = window.__INITIAL_DATA__ || {};

  return (
    <UserPanel 
      initialUsers={data.usersList || []} 
      initialShowingActive={data.showingActive ?? true} 
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserView />
  </React.StrictMode>
);