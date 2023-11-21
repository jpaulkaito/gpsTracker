// client/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupCard = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, password });
      console.log(response.data.message);
      onClose();
      navigate('/Login');
    } catch (error) {
      console.error('Error registering user:', error);

      if (error.response && error.response.status === 400) {
        setErrorMessage('Username already exists. Please choose another.');
      } else {
        setErrorMessage('Error registering user. Please try again.');
      }
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Signup</h5>
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
            onClick={handleSignup}
            className="btn btn-primary"
          >
            Signup
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

export default SignupCard;
