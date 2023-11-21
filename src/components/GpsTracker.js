// client/src/components/GpsTracker.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const GpsTracker = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    // Implement your logout logic
    logout();
  };

  // Redirect to login page if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>GpsTracker Component</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your GPS tracking functionality here */}
    </div>
  );
};

export default GpsTracker;
