// GpsTracker.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../context/useAuth';

const GpsTracker = () => {
  const navigate = useNavigate();
  const { logout, username } = useAuth();
  const location = useLocation();  // Use useLocation hook to get location information
  const loginHistoryId = location.state?.loginHistoryId;

  console.log('Username:', username);
  console.log('Login History ID:', loginHistoryId);

  const handleLogout = async () => {
    try {
      logout();
      navigate('/login');
      console.log(`${username} Successfully logout`);
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  return (
    <div>
      <h2>GpsTracker Component</h2>
      <p>Welcome, {username}!</p>
      <p>Login History ID: {loginHistoryId}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GpsTracker;
