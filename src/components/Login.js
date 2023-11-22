// client/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginCard = ({ onClose, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      console.log(response.data.message);
      console.log('Login history ID:', response.data.loginHistoryId);
      onClose();
      setIsLoggedIn(true);
      navigate('/gpstracker', { state: { loginHistoryId: response.data.loginHistoryId } });
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Incorrect login details. Please try again.');
    }
  };
  
  

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-primary"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary ms-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
