// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../context/useAuth';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
