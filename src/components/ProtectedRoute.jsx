import React from 'react';
import { getToken } from '../services/authService';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) {
    // Si no hay token, redirigir al login
    return <Navigate to="/Login" />;
  }

  // Si el token existe, mostrar el contenido protegido
  return children;
};

export default ProtectedRoute;
