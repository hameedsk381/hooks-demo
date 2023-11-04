import React, { useState } from 'react';
import { useAuth } from '../App';

function UserProfile() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real-world scenario, you might validate and send these credentials to a server for authentication.
    login({ name: username });
    setUsername('');
    setPassword('');
  };

  if (user) {
    return <div>Logged in as {user.name}</div>;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserProfile;
