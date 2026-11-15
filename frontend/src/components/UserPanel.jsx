import { useState } from 'react';

export default function UserPanel({ initialUsers = [], initialShowingActive = true }) {
  const [users, setUsers] = useState(initialUsers);
  const [showingActive, setShowingActive] = useState(initialShowingActive);
  const [loading, setLoading] = useState(false);

  const handleToggleStatus = async () => {
    const nextStatus = !showingActive;
    setLoading(true);

    try {
      const response = await fetch(`/users?active=${nextStatus}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setUsers(Array.isArray(data.usersList) ? data.usersList : []);
      setShowingActive(nextStatus);
    } catch (error) {
      console.error('Error while requesting users from the server:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-panel">
      <h1>
        User panel (<span id="users-count">{users.length}</span>)
      </h1>
      <p>Team Member management :</p>

      <button
        id="btn-toggle-status"
        data-showing-active={showingActive}
        onClick={handleToggleStatus}
        disabled={loading}
      >
        {loading
          ? 'Loading...'
          : showingActive
          ? 'Show Inactive Users'
          : 'Show Active Users'}
      </button>

      <div id="users-container">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <strong>
                ID: {user.id} - NAME : {user.name}
              </strong>{' '}
              — <span>{user.email}</span> — <span>{user.role}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}