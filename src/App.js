// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupCard from './components/Signup';
import LoginCard from './components/Login'; // Import the Login component

const App = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignupClose = () => {
    setIsSignupOpen(false);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
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
          element={<LoginCard onClose={handleLoginClose} />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
