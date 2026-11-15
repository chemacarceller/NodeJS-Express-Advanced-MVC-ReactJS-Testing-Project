import React from 'react';
import ReactDOM from 'react-dom/client';
import UserPanel from "./components/UserPanel";

// We import the CSS for this page; this is not strictly necessary since we are using React.
// The code is specific to each individual component.
import '../public/css/users.css';
import '../public/js/users.js';

// Component : UserView
function UserView() {
  
  const data = window.__INITIAL_DATA__ || {};
  if (data.title) document.title = data.title;

  return (

    // We load the UserPanel component
    <UserPanel 
      initialUsers={data.usersList || []} 
      initialShowingActive={data.showingActive ?? true} 
    />
  );
}

// Take your <UserView /> component (along with everything it contains) 
// and render it inside a specific HTML container.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserView />
  </React.StrictMode>
);