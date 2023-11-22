// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupCard from './components/Signup';
import LoginCard from './components/Login';
import GpsTracker from './components/GpsTracker';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignupClose = () => {
    setIsSignupOpen(false);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={<SignupCard onClose={handleSignupClose} />}
        />
        <Route
          path="/login"
          element={<LoginCard onClose={handleLoginClose} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/gpstracker"
          element={
            isLoggedIn ? (
              <GpsTracker onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
